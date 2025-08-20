import { type GameEvent } from "../games.js";
import { audioReaction, playGameMusic } from "../audioSystem.js";

const winGameEvent: GameEvent = { nextMessageId: 316 };
const quitGameEvent: GameEvent = { nextMessageId: 309 };

const baseName = "piano-game"
const main = document.getElementsByTagName("main")[0];

const key = "C0D0D0E0C0D0E0D0C0C0C0";
const pianoKeysAudios: { [index: string]: string } = {
    "C0": "static/audios/0-piano_C0.mp3",
    "Db0": "static/audios/1-piano_Db0.mp3",
    "D0": "static/audios/2-piano_D0.mp3",
    "Eb0": "static/audios/3-piano_Eb0.mp3",
    "E0": "static/audios/4-piano_E0.mp3",
    "F0": "static/audios/5-piano_F0.mp3",
    "Gb0": "static/audios/6-piano_Gb0.mp3",
    "G0": "static/audios/7-piano_G0.mp3",
    "Ab1": "static/audios/8-piano_Ab1.mp3",
    "A1": "static/audios/9-piano_A1.mp3",
    "Bb1": "static/audios/10-piano_Bb1.mp3",
    "B1": "static/audios/11-piano_B1.mp3",
    "C1": "static/audios/12-piano_C1.mp3",
};

export function pianoGameLauncher(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = "Ouverture de l'interface audio...";
    div.className = "chat__messages__game";

    initGame(fragment);

    return fragment;
}

function initGame(eventElement: DocumentFragment) {
    playGameMusic("gameOne");

    const fragment = document.createDocumentFragment();
    const loading = loadingText();
    const section = fragment.appendChild(document.createElement("section"));
    section.appendChild(loading);

    section.className = baseName;
    section.id = "game";

    main.appendChild(fragment);

    setTimeout(() => {
        loading.remove();

        const pianoContainer = section.appendChild(document.createElement("div"));

        pianoContainer.className = baseName + "__piano";

        const userInput: Array<string> = []

        const pianoKeys = Object.keys(pianoKeysAudios);

        pianoKeys.forEach((pianoKey) => {
            const div = document.createElement("div");

            div.className = baseName + "__piano__key";

            if (pianoKey.length === 3) {
                div.className += "__black";
            };

            div.addEventListener("click", () => {
                if (userInput.length >= 11) { userInput.shift() };

                userInput.push(pianoKey);

                playPiano(pianoKey);

                if (userInput.join("") == key) {
                    audioReaction("success");
                    eventElement.dispatchEvent(new CustomEvent("won", { detail: winGameEvent }));
                };
            });

            pianoContainer.appendChild(div);
        })

        const quitBtn = document.createElement("button");
        quitBtn.textContent = "SORTIR";
        quitBtn.className = baseName + "__quit";

        section.appendChild(quitBtn);

        quitBtn.addEventListener("click", () => {
            eventElement.dispatchEvent(new CustomEvent("quit", { detail: quitGameEvent }));
        });

        main.appendChild(fragment);



    }, 2000);
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Ouverture de l'interface audio...";
    p.className = baseName + "__loading";

    return p
}

export function playPiano(key: string) {
    const audio = new Audio(pianoKeysAudios[key]);
    audio.play();

    audio.addEventListener("ended", () => {
        audio.remove();
    })
}