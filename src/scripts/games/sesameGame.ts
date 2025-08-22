import { type GameEvent } from "../games.js";
import { audioReaction, playGameMusic } from "../audioSystem.js";

const winGameEvent: GameEvent = { nextMessageId: 306 };
const quitGameEvent: GameEvent = { nextMessageId: 309 };

const baseName = "sesame-game"
const main = document.getElementsByTagName("main")[0];

const key = "SEPT CHAKRAS";

export function sesameGameLauncher(): DocumentFragment {
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

        const doorContainer = section.appendChild(document.createElement("div"));

        doorContainer.className = baseName + "__rock";
        const hint = doorContainer.appendChild(document.createElement("p"))

        hint.textContent = "धvगासा सागा साoरेगाx, मunगाstगा tधनिlगाधu निorगाधl रेont lगा सागाtधसागा गाroरेगाrध tध सागासाitगा, sगाsधmगा cगारेगाrध."
        hint.className = baseName + "__rock__hint"

        const voiceForm = doorContainer.appendChild(document.createElement("div"));

        voiceForm.className = baseName + "__rock__voice";

        const input = voiceForm.appendChild(document.createElement("input"));

        input.className = baseName + "__rock__voice__input";
        input.type = "text";
        input.placeholder = "...";

        const speakBtn = voiceForm.appendChild(document.createElement("button"));
        speakBtn.textContent = "LIRE";
        speakBtn.className = baseName + "__rock__voice__button";

        const quitBtn = section.appendChild(document.createElement("button"));
        quitBtn.textContent = "SORTIR";
        quitBtn.className = baseName + "__quit";

        quitBtn.addEventListener("click", () => {
            eventElement.dispatchEvent(new CustomEvent("quit", { detail: quitGameEvent }));
        });

        speakBtn.addEventListener("click", () => {
            let utter = utterance(input.value);

            utter.addEventListener("end", () => {
                if (input.value.toUpperCase() === key) {
                    audioReaction("success")
                    // eventElement.dispatchEvent(new CustomEvent("won", { detail: winGameEvent }));
                } else {
                    audioReaction("error")
                }
            })

            // Speak the text
            speechSynthesis.speak(utter);
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

function utterance(text: string) {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Select a voice
    const voices = speechSynthesis.getVoices();;
    utterance.voice = voices[0];

    voices.forEach((voice) => {
        if (voice.name == "French (France)+Half-LifeAnnouncementSystem") {
            utterance.voice = voice
            utterance.lang = "fr-FR"
        }
    });

    return utterance;
}
