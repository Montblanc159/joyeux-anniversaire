import { dialogs, type Dialog, type Answer } from './dialogs.js';
import { games, GameEvent } from "./games.js"

const chatBox = document.getElementsByClassName("chat__messages")[0];
const anchor = document.getElementsByClassName("chat__messages__anchor")[0];
const inputBox = document.getElementsByClassName("chat__input")[0];

const bgAudio = new Audio();
bgAudio.loop = true;

const messageContructors: { [index: string]: (dialog: Dialog) => DocumentFragment } = {
    basic: createBasicMessage,
    video: createVideoMessage,
    audio: createAudioMessage,
    game: createGameMessage,
    narrator: createNarratorMessage,
    image: createImageMessage,
}

const uiSoundFX: { [index: string]: string } = {
    msgReceived: "static/msg-notif.mp3",
    error: "static/error.mp3",
    success: "static/success.mp3",
    booting: "static/booting.mp3"
}

const bgMusics: { [index: string]: string } = {
    main: "static/main-bg-music.mp3",
    gameOne: "static/game-one-bg-music.mp3"
}

function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string): string {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

export function audioReaction(eventName: string) {
    const audio = new Audio(uiSoundFX[eventName]);
    audio.play();
}

export function playGameMusic(src?: string) {
    if (src) {
        bgAudio.src = bgMusics[src];
    }

    bgAudio.play();
}

export function pauseGameMusic() {
    bgAudio.pause()
}

function checkCookie(): void {
    if (getCookie("dialogsPath") === "") {
        setCookie("dialogsPath", JSON.stringify([]), 30);
    }

    if (getCookie("lastDialog") === "") {
        setCookie("lastDialog", JSON.stringify(0), 30);
    }
}

function updateDialogPathCookie(dialogId: number): void {
    let dialogsPath: Array<number> = JSON.parse(getCookie("dialogsPath"));

    if (!dialogsPath.includes(dialogId)) {
        dialogsPath.push(dialogId);
        setCookie("dialogsPath", JSON.stringify(dialogsPath), 30);
    }
}

function updateLastDialogCookie(dialogId: number): void {
    setCookie("lastDialog", JSON.stringify(dialogId), 30);
}

function createBasicMessage(dialog: Dialog): DocumentFragment {
    const content = dialog.content;
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"));
    const p = div.appendChild(document.createElement("p"));

    p.textContent = "VH: " + dialog.content;
    div.className = "chat__messages__him";

    audioReaction("msgReceived");

    return fragment;
}

function createUserMessage(answer: Answer): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = "ER: " + answer.content;
    div.className = "chat__messages__me";
    return fragment;
}


function createNarratorMessage(dialog: Dialog): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = dialog.content;
    div.className = "chat__messages__narrator";

    return fragment;
}

function createVideoMessage(dialog: Dialog): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const video = div.appendChild(document.createElement("video"));
    const p = div.appendChild(document.createElement("p"));

    video.src = dialog.media || "";
    video.autoplay = false;
    video.controls = true;
    p.textContent = "VH: " + dialog.content;
    div.className = "chat__messages__him";

    audioReaction("msgReceived");

    return fragment;
}

function createImageMessage(dialog: Dialog): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const image = div.appendChild(document.createElement("img"));
    const p = div.appendChild(document.createElement("p"));

    image.src = dialog.media || "";
    p.textContent = "VH: " + dialog.content;
    div.className = "chat__messages__him";

    audioReaction("msgReceived");

    return fragment;
}

function createAudioMessage(dialog: Dialog): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const audio = div.appendChild(document.createElement("audio"));
    const p = div.appendChild(document.createElement("p"));

    audio.src = dialog.media || "";
    audio.autoplay = false;
    audio.controls = true;
    p.textContent = "VH: " + dialog.content;
    div.className = "chat__messages__him";

    audioReaction("msgReceived");

    return fragment;
}

function createGameMessage(dialog: Dialog): DocumentFragment {
    if (dialog.media) {
        const game = games[dialog.media];

        if (game) {
            audioReaction("booting");
            let gameElement = game();

            gameElement.addEventListener("won", (event: CustomEventInit<GameEvent>) => {
                document.getElementById("game")?.remove();
                playGameMusic("main");

                if (event.detail) {
                    nextMessage(event.detail.nextMessageId)
                }
            })

            return gameElement;
        } else {
            return document.createDocumentFragment();
        }
    } else {
        return document.createDocumentFragment();
    }
}

function addPlaceHolder() {
    const div = document.createElement("div");
    const dot1 = document.createElement("div");
    const dot2 = document.createElement("div");
    const dot3 = document.createElement("div");
    dot1.className = "chat__placeholder__dot";
    dot2.className = "chat__placeholder__dot";
    dot3.className = "chat__placeholder__dot";

    div.className = "chat__placeholder";

    div.appendChild(dot1);
    div.appendChild(dot2);
    div.appendChild(dot3);

    chatBox.insertBefore(div, anchor);
}

function removePlaceHolder() {
    let placeHolder = document.getElementsByClassName("chat__placeholder")[0];
    chatBox.removeChild(placeHolder);
}

function nextMessage(id: number) {
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }

    let nextDialog = dialogs.find((dialog) => dialog.id === id);


    if (nextDialog) {
        let timeToWait =
            Math.floor((Math.random() * 100)) + (nextDialog.content.length * 10)

        addPlaceHolder();

        if (nextDialog.turningPoint) {
            updateDialogPathCookie(nextDialog.id);
        }

        updateLastDialogCookie(nextDialog.id)

        setTimeout(() => {
            removePlaceHolder();

            const messageConstructor = messageContructors[nextDialog.type];

            if (nextDialog.dialogId) {
                chatBox.insertBefore(messageConstructor(nextDialog), anchor);
                nextMessage(nextDialog.dialogId);
            } else {
                chatBox.insertBefore(messageConstructor(nextDialog), anchor);
                nextDialog.answers.forEach((answer) => {
                    inputBox.appendChild(createButton(answer));
                })
            }
        }, timeToWait);
    }
}

function createButton(answer: Answer) {
    let button = document.createElement("button");

    button.textContent = answer.content;
    button.className = "chat__button";
    button.id = answer.dialogId.toString();

    button.addEventListener("click", () => {
        chatBox.insertBefore(createUserMessage(answer), anchor);
        nextMessage(answer.dialogId);
    })

    return button;
}

checkCookie();
playGameMusic("main");

let lastDialogId = JSON.parse(getCookie("lastDialog"));

nextMessage(lastDialogId);