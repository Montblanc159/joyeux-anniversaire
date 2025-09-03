import { type GameEvent } from "../games.js";
import { audioReaction, playGameMusic } from "../audioSystem.js";

const winGameEvent: GameEvent = { nextMessageId: 420 };
// const quitGameEvent: GameEvent = { nextMessageId: 309 };

const baseName = "chest-game"
const main = document.getElementsByTagName("main")[0];

const hintSentence = [
    "Un arbre ne prend racine que s'il en a le cœur.",
    "Alors, l'homme gonfle son plexus solaire",
    "Et lui crie à pleine gorge :",
    "\"Ouvre ton troisième œil et ta couronne dominera le bois sacré\"."
]

const chakras = Object.freeze({
    root: "static/images/r.webp",
    heart: "static/images/h.webp",
    solarPlexus: "static/images/p.webp",
    throat: "static/images/t.webp",
    thirdEye: "static/images/e.webp",
    crown: "static/images/c.webp",
    sacred: "static/images/s.webp",
});

type ChakraNames = Array<keyof typeof chakras>


const key: ChakraNames = Object.keys(chakras) as ChakraNames;


export function chestGameLauncher(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    audioReaction("booting");

    p.textContent = "Ouverture du logiciel...";
    div.className = "chat__messages__game";

    initGame(fragment);

    return fragment;
}

function initGame(eventElement: DocumentFragment) {
    playGameMusic("chestGame");

    const fragment = document.createDocumentFragment();
    const loading = loadingText();
    const section = fragment.appendChild(document.createElement("section"));
    section.appendChild(loading);

    section.className = baseName;
    section.id = "game";

    main.appendChild(fragment);

    setTimeout(() => {
        loading.remove();

        hintSentence.forEach((sentencePart) => {
            let text = section.appendChild(document.createElement("p"));
            text.className = baseName + "__hint";
            text.textContent = sentencePart;
        })

        const buttonContainer = section.appendChild(document.createElement("div"));

        buttonContainer.className = baseName + "__buttons";

        let userInput: ChakraNames = []

        shuffle(key).forEach((chakraName) => {
            const imgButton = buttonContainer.appendChild(document.createElement("div"));
            imgButton.style.backgroundImage = "url('" + chakras[chakraName] + "')";
            imgButton.id = chakraName;
            imgButton.className = baseName + "__buttons__button";
            // imgButton.alt = "Un étrange symbole";

            imgButton.addEventListener("click", () => {
                audioReaction("click");

                if (userInput.length >= key.length) { userInput.shift() };

                userInput.push(chakraName);

                if (userInput.length == key.length && userInput.every((input, index) => input === key[index])) {
                    audioReaction("success");

                    const btn = section.appendChild(document.createElement("button"));
                    btn.textContent = "OUVRIR";
                    btn.className = baseName + "__validate"

                    btn.addEventListener("click", () => {
                        playGameMusic("main");
                        eventElement.dispatchEvent(new CustomEvent("won", { detail: winGameEvent }));
                    })
                }
            })
        })

        main.appendChild(fragment);

    }, 2000);
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Ouverture du logiciel...";
    p.className = baseName + "__loading";

    return p
}

function shuffle(array: ChakraNames) {
    let clonedArray = Array.from(array);

    for (let i = clonedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
    }

    return clonedArray;
}