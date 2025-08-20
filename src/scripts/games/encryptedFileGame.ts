import { type GameEvent } from "../games.js";
import { audioReaction, playGameMusic } from "../audioSystem.js";

const clearSentences = [
    "ONZE NOVEMBRE DEUX MILLE DIX HUIT",
    "PROTOCOLE D ESSAI NUMERO SEIZE",
    "SUJET: ELLIE",
    "STATUT: ECHEC",
    "CAUSE: DECES APRES ARRET DES FONCTIONS CEREBRALES",
    "DESCRIPTION: DES L INJECTION DE SCOPOLAMINE ET DE FLUNITRAZEPAM,",
    "LE SUJET SE MONTRE RECEPTIF ET SE SOUMET AUX ORDRES.",
    "APRES UNE DEMI HEURE, LE SUJET PERD CONNAISSANCE.",
    "INJECTION D ADRENALINE INFRUCTUEUSE.",
    "LE SUJET DECEDE UNE HEURE APRES L INJECTION.",
    "EFFETS PERSONNELS STOCKES EN LIEU SUR."
]

const key = "TEMPLEDUPEUPLE";
const encryptedSentences = clearSentences.map((clearSentence) => vigenereNums(clearSentence, key, true));
const gameEvent: GameEvent = { nextMessageId: 220 };
const baseName = "encrypted-file-game"
const main = document.getElementsByTagName("main")[0];

export function encryptedFileGameLauncher(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = "Ouverture du fichier...";
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


        const deencryptor = section.appendChild(document.createElement("div"));
        const deencryptorTitle = deencryptor.appendChild(document.createElement("p"));
        // const clueText = deencryptor.appendChild(document.createElement("p"));
        const input = deencryptor.appendChild(document.createElement("input"));

        const file = section.appendChild(document.createElement("div"));
        const fileDescription = file.appendChild(document.createElement("p"));

        deencryptorTitle.textContent = "Décrypteur 2000";
        // clueText.textContent = "Adepte de ce culte ou végétarien, en quête de soin, d'une même molécule ils ont besoin.";

        deencryptor.className = baseName + "__deencryptor";
        // clueText.className = baseName + "__deencryptor__clue";
        deencryptorTitle.className = baseName + "__deencryptor__title";

        input.className = baseName + "__deencryptor__input";
        input.type = "text";
        input.placeholder = "Clef de cryptage";

        file.className = baseName + "__file"
        fileDescription.className = baseName + "__file__description"
        fileDescription.textContent = "/home/gaby/privé/201811082034-rapport.txt"

        let cypher: Array<HTMLParagraphElement> = [];

        encryptedSentences.forEach((encryptedSentence) => {
            let p = file.appendChild(document.createElement("p"));
            p.textContent = encryptedSentence;
            cypher.push(p);
        })

        main.appendChild(fragment);

        input.addEventListener("input", () => {
            cypher.forEach((p, index) => {
                p.textContent = vigenereNums(encryptedSentences[index], input.value, false);
            })

            if (input.value.toUpperCase().replaceAll(" ", "") === key) {
                audioReaction("success");
                input.disabled = true;
                input.className += "--success";

                const validateBtn = document.createElement("button")
                validateBtn.textContent = "✓"
                validateBtn.className = baseName + "__deencryptor__validate";

                validateBtn.addEventListener("click", () => {
                    eventElement.dispatchEvent(new CustomEvent("won", { detail: gameEvent }));
                });

                input.after(validateBtn);
            }
        })

    }, 2000);
}

function vigenereNums(input: string, key: string, encrypt: boolean) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (key.length == 0) {
        return input;
    }

    input = input.toUpperCase();
    key = key.toUpperCase().replaceAll(" ", "");

    let output = "";
    let key_index = 0;

    input.split("").forEach((char) => {
        let input_char_value = alphabet.indexOf(char);

        if (input_char_value > -1) { // ne (dé)chiffre que les 26 lettres majuscules
            if (encrypt) { // cryptage
                input_char_value += alphabet.indexOf(key.charAt(key_index));
            } else { // décryptage
                input_char_value -= alphabet.indexOf(key.charAt(key_index));
            }


            input_char_value += 26;
            input_char_value %= 26;

            output += alphabet.charAt(input_char_value);
            key_index = (key_index + 1) % key.length;
        } else {
            output += char;
        }
    })

    return output;
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Ouverture du fichier...";
    p.className = baseName + "__loading";

    return p
}