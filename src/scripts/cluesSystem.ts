import { getCookie } from "./cookies.js";
import { clues, type Clue } from "./clues.js";
import { audioReaction } from "./audioSystem.js";

const clueContructors: { [index: string]: (clue: Clue) => DocumentFragment } = {
    text: createTextClue,
    video: createVideoClue,
    audio: createAudioClue,
    image: createImageClue,
}


const baseName = "clues"
const clueZone = document.getElementsByClassName(baseName)[0];

export function addClues() {
    const turningPoints: Array<number> = JSON.parse(getCookie("dialogsPath"));

    turningPoints.forEach((dialogId) => {
        const clue = clues.find((clue) => clue.dialogId === dialogId);

        if (clue) {
            const clueDisplayed = document.getElementById("clue_" + clue.dialogId) !== null

            if (!clueDisplayed) {
                let popUpFragm = clueContructors[clue.type](clue);

                let iconFragm = document.createDocumentFragment();
                let link = iconFragm.appendChild(document.createElement("a"));
                let icon = link.appendChild(document.createElement("img"));


                icon.src = clue?.icon || "static/default-clue-icon.webp";
                icon.className = baseName + "__link__icon";

                link.className = baseName + "__link";
                link.title = clue.title;


                clueZone.appendChild(iconFragm);
                clueZone.appendChild(popUpFragm);

                link.addEventListener("click", () => {
                    toggleClue(clue);
                })
            }
        }
    });
}

function toggleClue(clue: Clue) {
    let window = document.getElementById("clue_" + clue.dialogId);

    if (window) {
        if (window.className.includes("--is-open")) {
            window.className = window.className.replace("--is-open", "");
            audioReaction("close");
        } else {
            window.className += "--is-open";
            audioReaction("open");
        }
    }
}

function createTextClue(clue: Clue): DocumentFragment {
    const fragment = document.createDocumentFragment();
    let window = fragment.appendChild(document.createElement("div"));
    let title = window.appendChild(document.createElement("h2"));
    let closeButton = window.appendChild(document.createElement("btn"));

    window.className = baseName + "__window";
    window.id = "clue_" + clue.dialogId.toString();

    title.textContent = clue.title;
    title.className = baseName + "__window__title"

    closeButton.textContent = "x";
    closeButton.className = baseName + "__window__close";

    closeButton.addEventListener("click", () => {
        toggleClue(clue);
    })

    clue.content?.forEach((text) => {
        let content = window.appendChild(document.createElement("p"));
        content.textContent = text || "";
        content.className = baseName + "__window__content"
    })

    return fragment;
}

function createAudioClue(clue: Clue): DocumentFragment {
    const fragment = createTextClue(clue);

    let media = fragment.appendChild(document.createElement("audio"));

    media.src = clue?.media || "";
    media.controls = true;
    media.className = baseName + "__window__audio";

    return fragment;
}

function createVideoClue(clue: Clue): DocumentFragment {
    const fragment = createTextClue(clue);

    let media = fragment.appendChild(document.createElement("video"));

    media.src = clue?.media || "";
    media.controls = true;
    media.className = baseName + "__window__video";

    return fragment;
}

function createImageClue(clue: Clue): DocumentFragment {
    const fragment = createTextClue(clue);

    let media = fragment.appendChild(document.createElement("img"));

    media.src = clue?.media || "";
    media.className = baseName + "__window__image";

    return fragment;
}

addClues;

document.addEventListener("nextDialog", () => {
    addClues();
});