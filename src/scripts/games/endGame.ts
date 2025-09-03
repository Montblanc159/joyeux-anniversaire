import { playGameMusic } from "../audioSystem.js";
import { getCookie, resetCookie } from "../cookies.js";

const baseName = "end-game"
const main = document.getElementsByTagName("main")[0];
const userPath: Array<integer> = JSON.parse(getCookie("dialogsPath"));

const sentences: { [index: integer]: string } = {
    0: "Un asile clandestin découvert à Arkham détenait en secret des gourous de sectes que tout le monde pensait disparus.", // base
    250: "Malheureusement, en investigant les lieux, tous les détenus ont été retrouvés décédés et le directeur de l'établissement, mentionné dans différents papiers retrouvés sur place sous le surnom d'Arkham, n'a pas été retrouvé.", // Don't kill
    260: "En investigant les lieux, la police a découvert le corps d'une femme, Elizabeth Miskatonic, tuée par balle dans son bureau. Les détenus l'appelaient Arkham, elle semblait diriger l'asile clandestin.", // Kill
    220: "Pour rajouter à l'horreur, l'asile conduisait des expériences de soumission chimique sur leurs détenus dont l'issue était souvent fatale.",
    307: "Les autorités étaient sur le point d'intervenir. Ce que la direction de l'asile clandestin avait pressenti. Ils empoisonnaient petit à petit leurs détenus avec de la prednisone dans l'éventualité d'une intervention de la police.",
    398: "Deux personnalités connues du public, Paul Shaeffer et Vernon Wayne Howell, plus connu sous le nom de David Koresh, se sont quand même évadées. Ils ont été aidés par une personne encore inconnue que les autorités recherchent.", // Take paul
    399: "Un détenu a réussi à s'échapper, Vernon Wayne Howell, bien connu du public sous le nom de David Koresh. Il a été aidé par une personne encore inconnue que la police recherche activement.", // Dont take paul
    990: "Une personne, contactée de l'intérieur par Vernon Wayne Howell, autrement connu sous le nom de David Koresh, est à l'origine de la découverte. David Koresh souhaitait, en cachant son identité, être aidé dans son évasion. Les autorités soupçonnaient ces activités clandestines mais, faute de preuve, ne pouvaient intervenir. La découverte a permis de porter secours aux détenus. Malheureusement après 24 heures de garde, tous les détenus sont morts d'insuffisance rénale. Les autorités suspectent un empoisonnement à la prednisone par la direction qui avait eu vent d'une intervention prochaine.", // alternate
}

export function endGameLauncher(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    p.textContent = "Fin de la connexion...";
    div.className = "chat__messages__game";

    initGame(fragment);

    return fragment;
}

function initGame(fragment: DocumentFragment) {
    playGameMusic("endGame");

    const loading = loadingText();
    const section = fragment.appendChild(document.createElement("section"));
    section.appendChild(loading);

    const clues = document.getElementsByClassName("clues")[0] as HTMLElement;

    if (clues) {
        clues.style.display = "none";
    }

    section.className = baseName;
    section.id = "game";

    main.appendChild(fragment);

    setTimeout(() => {
        loading.remove();

        // ADD STUFF HERE

        const title = section.appendChild(document.createElement("h1"));

        title.textContent = "Horreur à Arkham";
        title.className = baseName + "__title"

        userPath.forEach((dialogId) => {
            let sentence = sentences[dialogId];

            if (sentence) {
                let p = section.appendChild(document.createElement("p"));

                p.textContent = sentences[dialogId];
                p.className = baseName + "__text";
            }
        })

        let p = section.appendChild(document.createElement("p"));

        const date = new Date();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        p.textContent = "Extrait du Arkham Herald - " + currentDate;
        p.className = baseName + "__text"

        const readBtn = section.appendChild(document.createElement("button"));
        readBtn.className = baseName + "__reset";
        readBtn.textContent = "LIRE L'ARTICLE";

        readBtn.addEventListener("click", () => {
            window.location.reload();
        });

        // const btn = section.appendChild(document.createElement("button"));
        // btn.className = baseName + "__reset";
        // btn.textContent = "RECOMMENCER";

        // btn.addEventListener("click", () => {
        //     resetCookie();
        //     window.location.reload();
        // });

        // ADD STUFF HERE

        main.appendChild(fragment);
    }, 2000);
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Quelques jours plus tard...";
    p.className = baseName + "__loading";

    return p
}