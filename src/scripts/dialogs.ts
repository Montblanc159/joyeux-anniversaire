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
        content: "Je suis Vernon W.H. Vous ne me connaissez pas.",
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
        content: "Un proche m'a soufflé votre nom, il m'a assuré que vous étiez une spécialiste des sectes.",
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
        content: "Je ne peux pas vous le dire, je le mettrais en danger.",
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
        content: "Seigneur Arkham nous a annoncé que le monde ne survivra pas au maximum de l'étoile variable zêta des Gémeaux. Ce sera le 20 septembre.",
        answers: [
            {
                content: "C'est de la folie... Qui est ce Arkham ?",
                dialogId: 70,
            }
        ],
    },
    {
        id: 70,
        type: "basic",
        content: "C'est notre prophète. Ces paroles m'ont guidé durant ces dix dernières années. Je commets l'ultime trahison en venant vous parler... Mais je ne peux me résoudre à voir mes proches mourir, ni à mourir moi-même... Je n'en ai pas le courage et puis... J'ai des doutes...",
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
        media: "static/videos/80.webm",
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
        content: "NON, SURTOUT PAS ! Cela précipiterait la mort de tout le monde. Il nous a prévenus, toute intrusion du monde extérieur dans notre Havre nous anéantira. Il refuse de nous voir souffrir la fin des temps.",
        answers: [],
        dialogId: 105,
    },
    {
        id: 105,
        type: "basic",
        content: "Non, je dois contrecarrer ses plans, rassembler des preuves de sa corruption et convaincre mes semblables de revenir sur le chemin des êtres de lumière. Et pour ça j'ai besoin de vos connaissances et de votre perspicacité.",
        answers: [
            {
                content: "Il n'y a pas \"d'êtres de lumière\" ni \"d'êtres du néant\" !",
                dialogId: 110,
            }
        ]
    },
    {
        id: 110,
        type: "basic",
        content: "Je sais que ces concepts vous sont étrangers mais je ne suis pas là pour vous convaincre du bien-fondé de notre Havre. J'ai urgemment besoin de vos connaissances, pas de votre scepticisme.",
        answers: [],
        dialogId: 120,
    },
    {
        id: 120,
        type: "narrator",
        content: "Vous sentez qu'argumenter contre son mysticisme ne vous mènera nulle part.",
        answers: [
            {
                content: "Trouvons les plans d'Arkham.",
                dialogId: 130,
            }
        ],
    },
    {
        id: 130,
        type: "basic",
        content: "Merci mille fois. Je me suis procuré un portable qui me permet d'être en contact avec vous. J'ai réussi à me connecter au réseau privé de notre Seigneur. Je pense que l'on peut y trouver des informations importantes. Mais je suis bloqué par un mot de passe. Pouvez-vous le trouver ?",
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
        content: "Bien joué ! Maintenant, nous allons devoir tirer l'aiguille de la botte de foin.",
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
        content: "Il contient deux fichiers, je vous les fais parvenir.",
        answers: [],
        dialogId: 180,
    },
    {
        id: 180,
        type: "image",
        content: "Serait-ce une énigme ?",
        media: "static/images/180.jpg",
        turningPoint: true,
        answers: [],
        dialogId: 190,
    },
    {
        id: 190,
        type: "image",
        content: "Un plan.",
        turningPoint: true,
        media: "static/images/190.jpg",
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
        turningPoint: true,
        content: "Oh mon dieu... Irène... Non, ce n'est pas possible...",
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
        content: "C'est... C'était une fervente fidèle d'Arkham... Et une personne qui m'était très chère... Elle devait réaliser son ascension.",
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
        content: "Il doit être caché dans le Havre. Peut-être qu'en jetant un œil au plan que l'on a trouvé...",
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
        content: "Je suis dans la cuisine. Il ne faut pas que je reste trop longtemps. Seuls les plus fervents y sont autorisés depuis plus d'un mois.",
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
        content: "La nourriture doit rester pure, seuls les êtres dont l'aura est lumineuse peuvent la manipuler.",
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
        media: "static/images/303.jpg",
        answers: [],
        dialogId: 304,
    },
    {
        id: 304,
        type: "basic",
        content: "La note semble reliée à cette serrure, à vous de jouer.",
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
        content: "De la prednisone, je connais ce médicament... Il a dû nous accoutumer lentement en empoisonnant nos repas... Un arrêt brutal et c'est le décès assuré.",
        media: "static/images/307.jpg",
        answers: [],
        dialogId: 308
    },
    {
        id: 308,
        type: "image",
        turningPoint: true,
        content: "Une note est cachée entre les boîtes de médicaments. Encore plus cryptique que d'habitude.",
        media: "static/images/308.jpg",
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
        content: "C'est le plus beau lieu du Havre. Il est magnifique, couvert de dorures et de peintures à la gloire de notre Seigneur Arkham. C'est ici qu'en sa présence nous pratiquons la méditation dynamique qui nous permettra de devenir des êtres de lumière, pour finalement faire notre ascension.",
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
        media: "static/images/313.jpg",
        turningPoint: true,
        answers: [
            {
                content: "Penchons-nous sur ce piano.",
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
        media: "static/images/316.jpg",
        content: "Il y a un crâne dans le tiroir... et dans ce crâne... un papier à musique avec une écriture qui m'est inconnue.",
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
        content: "C'est notre lieu de ressourcement. Elle est énorme, toute de verre et d'acier. On y trouve de magnifiques plantes équatoriales : des orchidées, des sensitives ou du datura. De sublimes oiseaux aussi. Et surtout, l'air y est pur.",
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
        content: "Oui, je ne suis pas sûr de ce que j'avance mais il y a une imposante roche, et sur une des faces, il y a d'étranges signes gravés. Peut-être y jeterez-vous un œil ?",
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
        content: "Le caillou bouge, il fait un tel boucan, j'ai peur qu'il n'alerte du monde... Il cachait un escalier ! Vite, je descends.",
        answers: [
            {
                content: "Ok, faites attention.",
                dialogId: 327
            }
        ]
    },
    {
        id: 327,
        type: "narrator",
        content: "5 minutes plus tard, Vernon est étrangement silencieux.",
        answers: [
            {
                dialogId: 328,
                content: "Tout va bien ?"
            }
        ]
    },
    {
        id: 328,
        type: "narrator",
        content: "5 minutes de plus s'écoulent, Vernon ne répond toujours pas.",
        answers: [
            {
                dialogId: 329,
                content: "Vernon ?"
            }
        ]
    },
    {
        id: 329,
        type: "basic",
        content: "La connexion est en train de s'interrompre, j'espère que ce message va quand même passer... Il va falloir que vous inspectiez la page web pour trouver le mot de passe de reconnexion.",
        answers: [
            {
                dialogId: 330,
                content: "[La connexion se coupe]"
            }
        ]
    },
    {
        id: 330,
        content: "",
        type: "game",
        media: "reconnectGame",
        answers: []
    },
    {
        id: 340,
        content: "C'est bon, la connexion est rétablie, ça devrait tenir. Le réseau n'est pas bon en souterrain.",
        type: "basic",
        answers: [
            {
                content: "Où est-ce que vous vous trouvez maintenant ?",
                dialogId: 350
            }
        ]
    },
    {
        id: 350,
        content: "L'entrée s'est refermée derrière moi. J'ai descendu les escaliers, et maintenant je suis dans une pièce qui ressemble à une luxueuse suite d'hôtel. Les murs sont tapissés d'images obscènes, et de photos d'Arkham.",
        type: "basic",
        dialogId: 360,
        answers: []
    },
    {
        id: 360,
        content: "Il y a un bureau qui trône au milieu de la pièce. Dans le fond, il y a une lourde porte blindée. À ma droite une porte en bois d'où semble s'échapper un courant d'air.",
        type: "basic",
        dialogId: 370,
        answers: []
    },
    {
        id: 370,
        content: "Où est-ce que je vais ?",
        type: "basic",
        answers: [
            {
                content: "La porte en bois",
                dialogId: 380,
            },
            {
                content: "La porte blindée",
                dialogId: 390,
            },
            {
                content: "Le bureau",
                dialogId: 400,
            }
        ]
    },
    {
        id: 371,
        content: "Où est-ce que je vais ?",
        type: "basic",
        answers: [
            {
                content: "La porte en bois",
                dialogId: 381,
            },
            {
                content: "Le bureau",
                dialogId: 400,
            }
        ]
    },
    {
        id: 380,
        content: "Je sens de l'air frais et humide passer par les interstices de la porte. C'est peut-être une sortie. Mais elle est verrouillée.",
        type: "basic",
        turningPoint: true,
        answers: [],
        dialogId: 370,
    },
    {
        id: 381,
        content: "Je sens de l'air frais et humide passer par les interstices de la porte. C'est peut-être une sortie. Mais elle est verrouillée.",
        type: "basic",
        turningPoint: true,
        answers: [],
        dialogId: 371,
    },
    {
        id: 390,
        content: "La porte n'est pas fermée. J'entends d'étranges bruits. Je l'ouvre ?",
        type: "basic",
        answers: [
            {
                content: "Oui, mais restez prudent.",
                dialogId: 392
            },
            {
                content: "Non, allez fouiller le bureau.",
                dialogId: 400
            },
            {
                content: "Non, allons à la porte en bois.",
                dialogId: 380
            }
        ]
    },
    {
        id: 391,
        content: "La porte n'est pas fermée. J'entends d'étranges bruits. Je l'ouvre ?",
        type: "basic",
        answers: [
            {
                content: "Oui, mais restez prudent.",
                dialogId: 392
            },
            {
                content: "Non, allez fouiller le bureau.",
                dialogId: 400
            },
            {
                content: "Non, allons à la porte en bois.",
                dialogId: 380
            }
        ]
    },
    {
        id: 392,
        content: "Il y a quelqu'un !",
        type: "basic",
        dialogId: 394,
        answers: []
    },
    {
        id: 394,
        content: "C'est Paul S... Il avait supposément atteint son ascension... Il est assis sur une chaise au centre de la pièce. Il n'est pas attaché mais il n'essaie pas de s'enfuir. C'est comme s'il était mort... et vivant à la fois... Ces yeux me suivent mais je n'y décèle aucune conscience.",
        type: "basic",
        answers: [
            {
                content: "C'est peut-être la soumission chimique qu'Arkham évoquait dans son fichier crypté...",
                dialogId: 396
            }
        ]
    },
    {
        id: 396,
        content: "C'est ça, oui. Il y a des fioles partout, des pétales de Datura et autres produits que je ne saurais reconnaître... Il tentait d'élaborer un mélange pour nous transformer en zombies à son service...",
        type: "basic",
        answers: [
            {
                content: "Il faudra peut-être sauver Paul.",
                dialogId: 398,
            },
            {
                content: "On ne peut pas prendre Paul avec nous, ce serait trop risqué.",
                dialogId: 399,
            }
        ]
    },
    {
        id: 398,
        turningPoint: true,
        type: "basic",
        content: "Oui de toute façon, si le produit est efficace, il fera ce que je lui dis de faire.",
        answers: [],
        dialogId: 371,
    },
    {
        id: 399,
        turningPoint: true,
        type: "basic",
        content: "Vous avez peut-être raison, mieux vaut être sûr que je sorte d'ici pour pouvoir arrêter cette folie.",
        answers: [],
        dialogId: 371,
    },
    {
        id: 400,
        type: "basic",
        content: "Ok j'y suis. Il n'y a rien de notable sur le bureau mais un de ses tiroirs qui est fermé. Il y a des boutons avec d'étranges symboles dessus.",
        answers: [
            {
                content: "Ok, jetons-y un oeil.",
                dialogId: 410,
            }
        ]
    },
    {
        id: 410,
        type: "game",
        media: "chestGame",
        content: "",
        answers: []
    },
    {
        id: 420,
        type: "basic",
        content: "Je fouille le tiroir.",
        answers: [],
        dialogId: 422,
    },
    {
        id: 422,
        type: "basic",
        content: "Ça y est, je crois qu'on a tout. Il y a une dizaine de rapports semblables à celui qu'on a trouvé sur l'ordinateur. Tous statuent sur des décès, que des gens que j'appréciais...",
        answers: [],
        dialogId: 424
    },
    {
        id: 424,
        type: "basic",
        turningPoint: true,
        content: "Il y a aussi leurs effets personnels, une petite clef, une carte et un pistolet.",
        answers: [
            {
                content: "Ok très bien, rassemblez les preuves et trouvez la sortie.",
                dialogId: 426,
            }
        ]
    },
    {
        id: 426,
        type: "audio",
        media: "static/audios/426.mp3",
        content: "...",
        answers: [
            {
                content: "Sauvez-vous Vernon !",
                dialogId: 428
            }
        ]
    },
    {
        id: 428,
        type: "narrator",
        content: "Vernon ne répond pas.",
        answers: [
            {
                content: "Vernon ?",
                dialogId: 429
            }
        ]
    },
    {
        id: 429,
        type: "narrator",
        content: "Après une vingtaine de minutes de silence, le voilà qui répond.",
        answers: [],
        dialogId: 430
    },
    {
        id: 430,
        type: "basic",
        content: "Je... j'ai ouvert la porte avec la petite clef et j'ai fui. Je suis dans un dédale de couloirs souterrains, aidez-moi à m'y retrouver avant qu'ils ne m'attrapent ici...",
        answers: [
            {
                content: "Ok, c'est parti.",
                dialogId: 432
            }
        ]
    },
    {
        id: 432,
        type: "game",
        content: "",
        media: "caveGame",
        answers: []
    },
    {
        id: 433,
        type: "video",
        media: "out.mp4",
        content: "",
        answers: [
            {
                content: "[FIN DU JEU]",
                dialogId: 435,
            }
        ]
    },
    {
        id: 435,
        type: "game",
        media: "endGame",
        content: "",
        answers: []
    },
    {
        id: 990,
        type: "basic",
        content: "...",
        turningPoint: true,
        answers: [
            {
                content: "Comment ça asile d'arkham ?! Vous êtes dans un asile ?",
                dialogId: 992,
            }
        ]
    },
    {
        id: 992,
        type: "basic",
        content: "On ne peut rien vous cacher...",
        answers: [
            {
                content: "Vous avez essayé de me rouler dans la farine. Qui êtes-vous ?",
                dialogId: 994,
            }
        ]
    },
    {
        id: 994,
        type: "basic",
        content: "Comment le Christ se révèle-t-il dans le quatrième sceau ?",
        answers: [
            {
                content: "Comme un cavalier sur un cheval pâle.",
                dialogId: 995,
            }
        ]
    },

    {
        id: 995,
        type: "basic",
        content: "Et quel était son nom ?",
        answers: [
            {
                content: "Mort !",
                dialogId: 996,
            }
        ]
    },
    {
        id: 996,
        type: "basic",
        content: "Vous savez ce que signifie Koresh ?",
        answers: [
            {
                content: "Dites le moi !",
                dialogId: 997,
            }
        ]
    },
    {
        id: 997,
        type: "basic",
        content: "Cela veut dire : mort !",
        answers: [
            {
                content: "[FIN DU JEU]",
                dialogId: 435,
            }
        ]
    },
]