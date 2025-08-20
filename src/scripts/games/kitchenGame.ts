import { type GameEvent } from "../games.js";
import { audioReaction, playGameMusic } from "../audioSystem.js";

const winGameEvent: GameEvent = { nextMessageId: 306 };
const quitGameEvent: GameEvent = { nextMessageId: 309 };

const baseName = "kitchen-game"
const main = document.getElementsByTagName("main")[0];

const key = "334";

export function kitchenGameLauncher(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = "Ouverture du logiciel...";
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

        const lockContainer = section.appendChild(document.createElement("div"));

        lockContainer.className = baseName + "__lock";

        const times = 3;
        let inputs: Array<HTMLInputElement> = [];

        for (let i = 0; i < times; i++) {
            let input = lockContainer.appendChild(document.createElement("input"));

            input.className = baseName + "__lock__input";
            input.type = "text";
            input.maxLength = 1;
            input.placeholder = "?";
            input.id = "lock_" + i;

            inputs.push(input);
        }

        const validateBtn = document.createElement("button");
        validateBtn.textContent = "DÉVERROUILLER";
        validateBtn.className = baseName + "__lock__validate";
        validateBtn.disabled = true;

        lockContainer.appendChild(validateBtn);

        const quitBtn = document.createElement("button");
        quitBtn.textContent = "SORTIR";
        quitBtn.className = baseName + "__quit";

        section.appendChild(quitBtn);

        quitBtn.addEventListener("click", () => {
            eventElement.dispatchEvent(new CustomEvent("quit", { detail: quitGameEvent }));
        });

        main.appendChild(fragment);

        inputs.forEach((input) => {
            input.addEventListener("change", () => {
                let userInput = inputs.map((input) => input.value).join("");

                if (userInput === key) {
                    audioReaction("success");
                    inputs.forEach((input) => { input.disabled = true });

                    validateBtn.disabled = false;
                    quitBtn.disabled = true;

                    validateBtn.addEventListener("click", () => {
                        eventElement.dispatchEvent(new CustomEvent("won", { detail: winGameEvent }));
                    });
                }
            });
        })
    }, 2000);
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Ouverture du logiciel...";
    p.className = baseName + "__loading";

    return p
}