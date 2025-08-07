import { dialogs, type Dialog, type Answer } from './dialogs.js';
const chatBox = document.getElementsByClassName("chat__messages")[0];
const inputBox = document.getElementsByClassName("chat__input")[0];


function createMessage(content: string, him: boolean): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = content;

    if (him) {
        div.className = "chat__message__him";
    } else {
        div.className = "chat__message__me";
    }

    return fragment;
}

function addPlaceHolder() {
    const div = document.createElement("div");
    div.className = "chat__placeholder";

    chatBox.appendChild(div);
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

        setTimeout(() => {
            removePlaceHolder();

            if (nextDialog.responseId) {
                chatBox.appendChild(createMessage(nextDialog.content, true));
                nextMessage(nextDialog.responseId);
            } else {
                chatBox.appendChild(createMessage(nextDialog.content, true));
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
    button.id = answer.responseId.toString();

    button.addEventListener("click", () => {
        chatBox.appendChild(createMessage(answer.content, false));
        nextMessage(answer.responseId);
    })

    return button;
}


nextMessage(dialogs[0].id);