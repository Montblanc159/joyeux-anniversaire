import { type GameEvent } from "../games.js";
import { audioReaction, playGameMusic } from "../audioSystem.js";

const winGameEvent: GameEvent = { nextMessageId: 340 };
// const quitGameEvent: GameEvent = { nextMessageId: 309 };

const baseName = "reconnect-game"
const main = document.getElementsByTagName("main")[0];

const key = "NXIVM";

export function reconnectGameLauncher(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    // audioReaction("booting");

    p.textContent = "Déconnexion...";
    div.className = "chat__messages__game";

    initGame(fragment);

    return fragment;
}

function initGame(fragment: DocumentFragment) {
    playGameMusic("reconnectGame");

    const clues = document.getElementsByClassName("clues")[0] as HTMLElement;

    if (clues) {
        clues.style.display = "none";
    }

    const loading = loadingText();
    const section = fragment.appendChild(document.createElement("section"));
    section.appendChild(loading);

    section.className = baseName;
    section.id = "game";

    main.appendChild(section);

    setTimeout(() => {
        loading.remove();
        build_ui(fragment, section);
    }, 2000);
}

function build_ui(fragment: DocumentFragment, section: HTMLElement) {
    const clues = document.getElementsByClassName("clues")[0] as HTMLElement;

    const text = section.appendChild(document.createElement("p"));

    text.className = baseName + "__text"
    text.textContent = "Mot de passe : "

    const input = text.appendChild(document.createElement("input"));

    input.className = baseName + "__text__input";
    input.type = "text";
    input.focus();

    main.appendChild(fragment);

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {

            if (input.value === key) {
                if (clues) {
                    clues.style.display = "flex";
                }

                audioReaction("booting");

                playGameMusic("main");
                fragment.dispatchEvent(new CustomEvent("won", { detail: winGameEvent }));
            } else {
                input.remove();
                text.remove();

                const oldLine = section.appendChild(document.createElement("p"));

                oldLine.className = baseName + "__text"
                oldLine.textContent = "Mot de passe : " + input.value;

                build_ui(fragment, section);
            }
        }
    })
}


function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Déconnexion...";
    p.className = baseName + "__loading";

    return p
}