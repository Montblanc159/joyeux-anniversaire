import { type GameEvent } from "../games.js";
import { audioReaction, pauseGameMusic, playGameMusic } from "../chat.js";

const body = document.getElementsByTagName("body")[0];
const password = "Waco";
const gameEvent: GameEvent = { nextMessageId: 150 };

export function passwordGameLauncher(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = "Programme lancé...";
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

    section.className = "password-game";
    section.id = "game";


    body.appendChild(fragment);


    setTimeout(() => {
        loading.remove();

        const image = section.appendChild(document.createElement("img"));
        const loginForm = section.appendChild(document.createElement("div"));
        const input = loginForm.appendChild(document.createElement("input"));
        const button = loginForm.appendChild(document.createElement("button"))
        const details = section.appendChild(document.createElement("abbr"));
        const help = details.appendChild(document.createElement("p"));


        image.className = "password-game__image";
        image.src = "https://placehold.co/150x150";

        details.className = "password-game__details";
        details.title = "1993 : David y siègea.";

        help.className = "password-game__details__help";
        help.textContent = "Indice";

        loginForm.className = "password-game__form"

        input.className = "password-game__form__input";
        input.type = "text";

        button.className = "password-game__form__button";
        button.textContent = "✓";

        body.appendChild(fragment);

        button.addEventListener("click", () => {
            if (checkPassword(input.value)) {
                audioReaction("success");
                eventElement.dispatchEvent(new CustomEvent("won", { detail: gameEvent }));
            } else {
                audioReaction("error");
            }
        })

    }, 2000);
}

function checkPassword(input: string) {
    return input === password
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Démarrage du système...";
    p.className = "password-game__loading";

    return p
}