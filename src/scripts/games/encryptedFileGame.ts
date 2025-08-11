import { type GameEvent } from "../games.js";
import { audioReaction, pauseGameMusic, playGameMusic } from "../chat.js";

const body = document.getElementsByTagName("body")[0];
const clearSentence = "ONZE NOVEMBRE DEUX MILLE DIX HUIT PROTOCOLE D ESSAI NUMERO SIX SUJET ELLIE. CAUSE DU DECES: ARRET DES FONCTIONS CEREBRALES"
const key = "LETEMPLEDUPEUPLE";
const encryptedSentence = vigenereNums(clearSentence, key, true);
const gameEvent: GameEvent = { nextMessageId: 150 };
const baseName = "encrypted-file-game"

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


    body.appendChild(fragment);


    setTimeout(() => {
        loading.remove();

        const file = section.appendChild(document.createElement("div"));
        const deencryptor = section.appendChild(document.createElement("div"));
        const input = file.appendChild(document.createElement("input"));
        const cypher = file.appendChild(document.createElement("p"))


        input.className = baseName + "__input";
        input.type = "text";
        input.placeholder = "Clef";

        file.className = baseName + "__file"
        cypher.textContent = encryptedSentence;

        body.appendChild(fragment);

        input.addEventListener("input", () => {
            cypher.textContent = vigenereNums(encryptedSentence, input.value, false);

            if (input.value === key) {
                audioReaction("success");
                // eventElement.dispatchEvent(new CustomEvent("won", { detail: gameEvent }));
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

    key = key.toUpperCase();
    // let key_correct = "";

    // for (let i = 0; i < key.length; i++) {
    //     let key_char = alphabet.indexOf(key.charAt(i));
    //     if (key_char > -1) { key_correct += alphabet.charAt(key_char) };
    // }

    // key = key_correct;


    let output = "";
    let key_index = 0;
    let n = 0;

    for (let i = 0; i < input.length; i++) {
        let input_char = input.charAt(i);
        let input_char_value = alphabet.indexOf(input_char);

        if (input_char_value > -1) { // ne (dé)chiffre que les 26 lettres majuscules
            if (encrypt) { // cryptage
                input_char_value += alphabet.indexOf(key.charAt(key_index));
            } else { // décryptage
                input_char_value -= alphabet.indexOf(key.charAt(key_index));
            }


            input_char_value += 26;
            input_char_value %= 26;

            // if ((n % 5 == 0) && (n > 0) && (encrypt)) {
            //     output += " "
            // };

            n++;

            output += alphabet.charAt(input_char_value);
            key_index = (key_index + 1) % key.length;
        } else {
            output += input_char;
        }
    }

    return output;
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Ouverture du fichier...";
    p.className = "password-game__loading";

    return p
}