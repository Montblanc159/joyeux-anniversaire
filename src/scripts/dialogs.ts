export type Dialog = {
    id: number
    content: string
    type: "basic" | "video" | "audio" | "game" | "narrator" | "image"
    media?: string
    dialogId?: number
    turningPoint?: boolean;
    answers: Array<Answer>
}

export type Answer = {
    content: string
    dialogId: number
}

export const dialogs: Array<Dialog> = [
    {
        id: 0,
        content: "...",
        type: "basic",
        turningPoint: true,
        answers: [
            {
                content: "Bonjour ?",
                dialogId: 10
            },
        ],
    },
    {
        id: 10,
        content: "Je suis soulagé que vous soyez là. J'ai très peu de temps et la situation est désespérée ici...",
        type: "basic",
        answers: [
            {
                content: "Qui êtes-vous ?",
                dialogId: 20
            },
        ],
    },
    {
        id: 20,
        type: "basic",
        content: "Je suis Vernon Howell. Vous ne me connaissez pas.",
        answers: [
            {
                content: "Pourquoi me contacter moi ?",
                dialogId: 30,
            }
        ],
    },
    {
        id: 30,
        type: "basic",
        content: "Un proche m'a soufflé votre nom, il m'a assuré que vous êtiez une spécialiste des sectes",
        answers: [
            {
                content: "Qui est ce proche ?",
                dialogId: 40,
            }
        ],
    },
    {
        id: 40,
        type: "basic",
        content: "Je ne peux pas vous le dire, je le mettrais en danger",
        answers: [
            {
                content: "Que vous arrive-t-il ?",
                dialogId: 50,
            }
        ],
    },
    {
        id: 50,
        type: "basic",
        content: "L'apocalypse approche. Le monde va s'éteindre et des gens vont mourir, je vais mourir. Il va nous tuer.",
        answers: [
            {
                content: "Comment ça l'apocalypse ?",
                dialogId: 60,
            }
        ],
    },
    {
        id: 60,
        type: "basic",
        content: "Seigneur Gabriel nous a annoncé que le monde ne survivra pas au maximum de l'étoile variable zêta des gémeaux. Ce sera le 20 septembre.",
        answers: [
            {
                content: "C'est de la folie... Qui est ce Gabriel ?",
                dialogId: 70,
            }
        ],
    },
    {
        id: 70,
        type: "basic",
        content: "C'est notre prophète. Ces paroles m'ont guidés durant ces dix dernières années. Je commet l'ultime trahison à venir vous parler... Mais je ne peux me résoudre à voir mes proches mourir, ni à mourir moi-même... Je n'en ai pas le courage et puis... J'ai des doutes...",
        answers: [],
        dialogId: 75,
    },
    {
        id: 75,
        type: "basic",
        content: "Tout être est corruptible et j'ai l'impression que notre maître s'est fait corrompre par une force maléfique, que nous ne sommes plus guidés par les êtres de lumière mais par les êtres du néant. Aidez-moi, je vous en prie...",
        answers: [
            {
                content: "Tout ça me paraît faux...",
                dialogId: 80,
            }
        ]
    },
    {
        id: 80,
        type: "video",
        media: "static/bigbuck.mp4",
        content: "Me croyez-vous maintenant ?",
        answers: [
            {
                content: "Vous avez besoin de quoi ? Que j'appelle la police ?",
                dialogId: 100,
            }
        ],
    },
    {
        id: 100,
        type: "basic",
        content: "NON, SURTOUT PAS ! Cela précipiterait la mort de tout le monde. Il nous a prévenu, toute intrusion du monde extérieur dans notre Havre nous anéantira. Il refuse de nous voir souffrir la fin des temps et préfère que nous disparaissions sans peines.",
        answers: [],
        dialogId: 105,
    },
    {
        id: 105,
        type: "basic",
        content: "Non, je dois contre-carrer ses plans, rassembler des preuves de sa corruption et convaincre mes semblables de revenir sur le chemin des êtres de lumière. Et pour ça j'ai besoin de vos connaissances et de votre perspicacité.",
        answers: [
            {
                content: "Il n'y a pas 'd'êtres de lumière' ni 'd'êtres du néant' !",
                dialogId: 110,
            }
        ]
    },
    {
        id: 110,
        type: "basic",
        content: "Je sais que ces concepts vous sont étrangés mais je ne suis pas là pour vous convaincre du bien fondé de notre Havre. J'ai urgemment besoin de vos connaissances pas de votre scepticisme.",
        answers: [],
        dialogId: 120,
    },
    {
        id: 120,
        type: "narrator",
        content: "Vous sentez qu'argumenter contre son mysticisme ne vous ménera nulle part",
        answers: [
            {
                content: "Trouvons les plans du gourou",
                dialogId: 130,
            }
        ],
    },
    {
        id: 130,
        type: "basic",
        content: "Merci mille fois. Je me suis procuré un portable qui me permet d'être en contact avec vous. J'ai réussi à me connecter au réseau privé de notre seigneur. Je pense que l'on peut y trouver des informations importantes. Mais je suis bloqué par un mot de passe. Pouvez-vous le trouver ?",
        answers: [
            {
                content: "Ok, c'est parti !",
                dialogId: 140,
            }
        ],
    },
    {
        id: 140,
        type: "game",
        media: "passwordGame",
        content: "",
        answers: [],
    },
    {
        id: 150,
        type: "basic",
        content: "Bien joué ! Maintenant, nous allons devoir tirer l'aiguille de la botte de foin. ",
        answers: [],
        dialogId: 160,
    },
    {
        id: 160,
        type: "basic",
        content: "Je vois deux dossiers : Protocole et Privé. J'ouvre lequel ?",
        answers: [
            {
                content: "'Protocole'",
                dialogId: 170,
            },
            {
                content: "'Privé'",
                dialogId: 200,
            }
        ]
    },
    {
        id: 170,
        type: "basic",
        content: "Il contient deux fichiers, je vous les fait parvenir.",
        answers: [],
        dialogId: 180,
    },
    {
        id: 180,
        type: "image",
        content: "Serait-ce une énigme ?",
        media: "",
        turningPoint: true,
        answers: [],
        dialogId: 190,
    },
    {
        id: 190,
        type: "image",
        content: "Un plan ?",
        turningPoint: true,
        media: "",
        answers: [],
        dialogId: 160,
    },
    {
        id: 200,
        type: "basic",
        content: "Un fichier crypté. C'est hors de mes compétences, à vous de jouer.",
        answers: [
            {
                content: "Ok, c'est parti.",
                dialogId: 210,
            },
        ],
    },
    {
        id: 210,
        type: "game",
        media: "encryptedFileGame",
        content: "",
        answers: [],
    },
]