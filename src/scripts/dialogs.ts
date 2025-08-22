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
        content: "Bonjour. Je suis soulagé que vous soyez là. J'ai très peu de temps et la situation est désespérée ici...",
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
                content: "Pourquoi me contacter ?",
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
        media: "static/videos/bigbuck.mp4",
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
        content: "NON, SURTOUT PAS ! Cela précipiterait la mort de tout le monde. Il nous a prévenu, toute intrusion du monde extérieur dans notre Havre nous anéantira. Il refuse de nous voir souffrir la fin des temps.",
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
        content: "Je vois deux dossiers : Protocole et Privé. Je commence par Privé.",
        answers: [],
        dialogId: 170,
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
        media: "https://placehold.co/350x350",
        turningPoint: true,
        answers: [],
        dialogId: 190,
    },
    {
        id: 190,
        type: "image",
        content: "Un plan.",
        turningPoint: true,
        media: "https://placehold.co/350x350",
        answers: [],
        dialogId: 195,
    },
    {
        id: 195,
        type: "basic",
        content: "J'ouvre le deuxième dossier, Protocole.",
        answers: [],
        dialogId: 200,
    },
    {
        id: 200,
        type: "basic",
        content: "Un fichier crypté. Hors de mes compétences, à vous de jouer.",
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
    {
        id: 220,
        type: "basic",
        content: "Oh mon dieu... Ellie... Non, ce n'est pas possible...",
        answers: [
            {
                content: "Vous la connaissiez ?",
                dialogId: 230
            }
        ],
    },
    {
        id: 230,
        type: "basic",
        content: "C'est... C'était une fervente fidèle de Gabriel... Elle devait réaliser son ascension.",
        answers: [],
        dialogId: 240
    },
    {
        id: 240,
        type: "basic",
        content: "Il va payer ! Je vais le tuer !",
        answers: [
            {
                content: "Non, sa place est en prison.",
                dialogId: 250,
            },
            {
                content: "C'est tout ce qu'il mérite.",
                dialogId: 260,
            }
        ],
    },
    {
        id: 250,
        type: "basic",
        content: "Et pourtant l'envie est tellement forte. Je vais essayer de me contenir...",
        turningPoint: true,
        answers: [
            {
                content: "Oui. Rassemblez vos esprits, allons trouver ce \"lieu sûr\".",
                dialogId: 270,
            }
        ]
    },
    {
        id: 260,
        type: "basic",
        content: "...",
        turningPoint: true,
        answers: [
            {
                content: "Bon... Rassemblez vos esprits, allons trouver ce \"lieu sûr\".",
                dialogId: 270,
            }
        ]
    },
    {
        id: 270,
        type: "basic",
        content: "Il doit être caché dans le Havre. Peut-être qu'en jetant un oeil au plan que l'on a trouvé...",
        answers: [],
        dialogId: 280,
    },
    {
        id: 280,
        type: "basic",
        content: "Où est-ce que je vais ?",
        answers: [
            {
                content: "Dans la cuisine.",
                dialogId: 300
            },
            {
                content: "Dans la chapelle de méditation.",
                dialogId: 310
            },
            {
                content: "Dans la verrière.",
                dialogId: 320
            },
        ]
    },
    {
        id: 300,
        type: "narrator",
        content: "Dix minutes plus tard...",
        answers: [],
        dialogId: 301
    },
    {
        id: 301,
        type: "basic",
        content: "Je suis dans la cuisine. Il ne faut pas que je reste trop longtemps. Seul les plus fervents y sont autorisés depuis plus d'un mois.",
        answers: [
            {
                content: "Il y a une raison à ça ?",
                dialogId: 302,
            },
            {
                content: "Très bien, dépêchons-nous, que voyez-vous ?",
                dialogId: 303,
            },
            {
                content: "Changer de lieu",
                dialogId: 280
            }
        ]
    },
    {
        id: 302,
        type: "basic",
        content: "La nourriture doit rester pure, seul les êtres dont l'aura est lumineuse peuvent la manipuler.",
        answers: [
            {
                content: "Très bien, dépêchons-nous, que voyez-vous ?",
                dialogId: 303,
            },
            {
                content: "Changer de lieu",
                dialogId: 280
            }
        ]
    },
    {
        id: 303,
        type: "image",
        content: "J'y ai trouvé un petit frigo avec une étrange serrure. Il y a une note sur le frigo.",
        turningPoint: true,
        media: "https://placehold.co/350x350",
        answers: [],
        dialogId: 304,
    },
    {
        id: 304,
        type: "basic",
        content: "La note semble relier à cette serrure, à vous de jouer.",
        answers: [
            {
                content: "Ok, c'est parti.",
                dialogId: 305,
            }
        ]
    },
    {
        id: 305,
        type: "game",
        content: "",
        media: "kitchenGame",
        answers: [],
    },
    {
        id: 306,
        type: "basic",
        content: "Ok le frigo est ouvert. Je regarde ce qu'il y a dedans.",
        answers: [],
        dialogId: 307
    },
    {
        id: 307,
        type: "image",
        turningPoint: true,
        content: "De la prednisone, je connais ce médicament... Il a dû nous accoutumer lentement en empoisonnant nos repas... Un arrêt brutal et c'est le décés assuré.",
        media: "https://placehold.co/350x350",
        answers: [],
        dialogId: 308
    },
    {
        id: 308,
        type: "image",
        turningPoint: true,
        content: "Une note est caché entre les boîtes de médicament. Encore plus cryptique que d'habitude.",
        media: "https://placehold.co/350x350",
        answers: [
            {
                content: "Ok, partons de là.",
                dialogId: 280,
            }
        ],
    },
    {
        id: 309,
        type: "basic",
        content: "Ok je suis sorti.",
        answers: [],
        dialogId: 280,
    },
    {
        id: 310,
        type: "narrator",
        content: "Dix minutes plus tard...",
        answers: [],
        dialogId: 311
    },
    {
        id: 311,
        type: "basic",
        content: "Je suis dans la chapelle. ",
        answers: [
            {
                content: "À quoi vous sert cette chapelle ?",
                dialogId: 312
            },
            {
                content: "Regardez autour de vous.",
                dialogId: 313
            },
            {
                content: "Changer de lieu",
                dialogId: 280
            }
        ]
    },
    {
        id: 312,
        type: "basic",
        content: "C'est le plus beau lieu du Havre. Il est magnifique, couvert de dorures et de peintures à la gloire de notre Seigneur Gabriel. C'est ici qu'en sa présence nous pratiquons la méditation dynamique qui nous permettra de devenir des êtres de lumières, pour finalement faire notre ascension.",
        answers: [
            {
                content: "Regardez autour de vous.",
                dialogId: 313
            },
            {
                content: "Changer de lieu",
                dialogId: 280
            }
        ]
    },
    {
        id: 313,
        type: "image",
        content: "À droite il y a un piano, sur son pupitre, à la place d'une partition, un étrange mot. Qu'en pensez-vous ?",
        media: "https://placehold.co/350x350",
        turningPoint: true,
        answers: [
            {
                content: "Penchons nous sur ce piano.",
                dialogId: 314
            },
        ]
    },
    {
        id: 314,
        type: "game",
        content: "",
        media: "pianoGame",
        answers: [],
    },
    {
        id: 315,
        type: "basic",
        content: "Bravo ! Vos talents de musiciennes n'ont d'égales que votre perspicacité. Un tiroir caché s'est ouvert dans le piano.",
        answers: [],
        dialogId: 316,
    },
    {
        id: 316,
        type: "image",
        turningPoint: true,
        media: "https://placehold.co/350x350",
        content: "Il y a un crâne dans le tiroir... et dans ce crâne... un papier à musique avec une écritures qui m'est inconnue.",
        answers: [
            {
                content: "Ok, allons voir ailleurs.",
                dialogId: 280,
            }
        ],
    },
    {
        id: 320,
        type: "narrator",
        content: "Dix minutes plus tard...",
        answers: [],
        dialogId: 322
    },
    {
        id: 322,
        type: "basic",
        content: "Je suis dans la verrière.",
        answers: [
            {
                content: "À quoi vous sert cette verrière ?",
                dialogId: 323,
            },
            {
                content: "Voyez-vous quelque-chose ?",
                dialogId: 324,
            },
            {
                content: "Changer de lieu",
                dialogId: 280
            }
        ]
    },
    {
        id: 323,
        type: "basic",
        content: "C'est notre lieu de ressourcement. Elle est énorme, toute de verre et d'acier. On y trouve de magnifiques plantes équatoriales: des orchidées, des sensitives ou de la datura. De sublimes oiseaux aussi. Et surtout, l'air y est pur.",
        answers: [
            {
                content: "Voyez-vous quelque-chose ?",
                dialogId: 324,
            },
            {
                content: "Changer de lieu",
                dialogId: 280
            }
        ]
    },
    {
        id: 324,
        type: "basic",
        content: "Oui, je ne suis pas sûr de ce que j'avance mais il y a une imposante roche, et sur une des faces, il y a d'étranges signes gravés. Peut-être y jeterez-vous un oeil ?",
        answers: [
            {
                content: "Allons-y",
                dialogId: 325,
            },
            {
                content: "Changer de lieu",
                dialogId: 280
            }
        ]
    },
    {
        id: 325,
        type: "game",
        media: "sesameGame",
        content: "",
        answers: []
    },
    {
        id: 326,
        type: "basic",
        content: "Le caillou bouge ! Il fait un tel boucan, j'ai peur qu'il n'ait alerté du monde !",
        answers: []
    }
]