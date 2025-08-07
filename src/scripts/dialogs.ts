export type Dialog = {
    id: number
    content: string
    type: "basic" | "video" | "audio" | "game" | "thought"
    media?: string,
    responseId?: number
    answers: Array<Answer>
}

export type Answer = {
    content: string
    responseId: number
}

export const dialogs: Array<Dialog> = [
    {
        id: 0,
        content: "",
        type: "basic",
        answers: [
            {
                content: "Bonjour ?",
                responseId: 10
            },
        ],
    },
    {
        id: 10,
        content: "Je suis soulagé que vous soyez là. La situation est désespérée ici...",
        type: "basic",
        answers: [
            {
                content: "Qui êtes-vous ?",
                responseId: 20
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
                responseId: 30,
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
                responseId: 40,
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
                responseId: 50,
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
                responseId: 60,
            }
        ],
    },
    {
        id: 60,
        type: "basic",
        content: "Il a annoncé que le monde ne survivra pas au maximum de l'étoile variable zêta des gémeaux. Ce sera le 20 septembre.",
        answers: [
            {
                content: "C'est de la folie... 'Il' c'est qui ?",
                responseId: 70,
            }
        ],
    },
    {
        id: 70,
        type: "basic",
        content: "C'est notre prophète, seigneur Gabriel. Ces paroles m'ont guidés durant ces dix dernières années. Je commet l'ultime trahison à venir vous parler... Mais je ne peux me résoudre à voir mes proches mourir, ni à mourir moi-même... Je n'en ai pas le courage et puis... J'ai des doutes... Tout être est corruptible et j'ai l'impression que notre maître s'est fait corrompre par une force maléfique, que nous ne sommes plus guidés par les êtres de lumière mais par les êtres du néant. Aidez-moi, je vous en prie...",
        answers: [
            {
                content: "Tout ça me paraît énorme, qu'est-ce qui me prouve que vous n'êtes pas en train d'inventer tout ça ?",
                responseId: 80,
            }
        ],
    },
    {
        id: 80,
        type: "video",
        media: "foo",
        content: "Me croyez-vous maintenant ?",
        answers: [
            {
                content: "Vous avez besoin de quoi ? Que j'appelle la police ?",
                responseId: 100,
            }
        ],
    },
    {
        id: 100,
        type: "basic",
        content: "NON, SURTOUT PAS ! Cela précipiterait la mort de tout le monde. Il nous a prévenu, toute intrusion du monde extérieur dans notre Havre nous anéantira. Il refuse de nous voir souffrir la fin des temps et préfère que nous disparaissions sans peines. Non, je dois trouver comment il compte nous tuer et contre-carrer ses plans, rassembler des preuves de sa corruption et convaincre mes semblables de revenir sur le chemin des êtres de lumière. Et pour ça j'ai besoin de vos connaissances et de votre perspicacité.",
        answers: [
            {
                content: "Il n'y a pas 'd'êtres de lumières' ni 'd'êtres du néant', ce sont des foutaises !",
                responseId: 110,
            }
        ],
    },
    {
        id: 110,
        type: "basic",
        content: "Je sais que ces concepts vous sont étrangés mais je ne suis pas là pour vous convaincre du bien fondé de notre Havre. J'ai urgemment besoin de vos connaissances pas de votre scepticisme.",
        answers: [],
        responseId: 120,
    },
    {
        id: 120,
        type: "thought",
        content: "Vous sentez qu'argumenter contre son mysticisme ne vous ménera nulle part",
        answers: [
            {
                content: "Trouvons les plans du gourou",
                responseId: 10,
            }
        ],
    },
]