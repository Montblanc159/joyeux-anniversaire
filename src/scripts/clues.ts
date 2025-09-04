export type Clue = {
    dialogId: number,
    title: string,
    media?: string,
    type: "video" | "text" | "audio" | "image",
    content?: Array<string>,
    icon?: string
}

export const clues: Array<Clue> = [
    {
        title: "Fichier : plan-havre.jpg",
        type: "image",
        icon: "static/images/treasure-map.svg",
        content: [],
        media: "static/images/190.jpg",
        dialogId: 190
    },
    {
        title: "Fichier : cultissime.txt",
        dialogId: 180,
        icon: "static/images/open-folder.svg",
        type: "image",
        media: "static/images/180.jpg",
        // content: [
        //     "AVEC UNE CLEF, LA CRYPTE S'OUVRE",
        //     "Adepte de ce culte ou végétarien, en quête de soin, d'une même molécule ils ont besoin."
        // ]
    },
    {
        title: "Note : Tripoli",
        dialogId: 303,
        type: "image",
        icon: "static/images/folded-paper.svg",
        media: "static/images/303.jpg"
        // content: [
        //     "Trouve la vraie dénomination de cet affabulateur qui voulut dupliquer un humain",
        //     "Puis le surnom final de ce gourou qui ne jurait que par \"Zorba le bouddha\"",
        //     "Enfin, lie les prénoms de ces deux fondateurs qui voyaient le Messie dans une soucoupe",
        //     "À chacun, calcule son nombre intime."
        // ]
    },
    {
        title: "Note : M**** !",
        dialogId: 313,
        icon: "static/images/envelope.svg",
        type: "image",
        media: "static/images/313.jpg"
        // content: [
        //     "🌙",
        //     "Est-il aussi clair dans un miroir ?"
        // ]
    },
    {
        title: "Note : Sésame",
        icon: "static/images/tied-scroll.svg",
        dialogId: 308,
        type: "image",
        media: "static/images/308.jpg"
        // content: [
        //     "🐬",
        //     "P56L3M9",
        //     "P263L6M9",
        //     "P288L8M1",
        //     "P195L5M7",
        //     "P129L8M9",
        //     "P132L15M1",
        //     "P260L1M2",
        //     "P168L9M6",
        //     "P127L1M6",
        //     "P193L9M5",
        //     "P88L18M2"
        // ]
    },
    {
        title: "Papier à musique : Ut queant laxis",
        icon: "static/images/g-clef.svg",
        dialogId: 316,
        type: "image",
        media: "static/images/316.jpg",
        content: [
            "Sapin => सा",
            "Récrie => र",
            "Gare => गा",
            "Matin => म",
            "Pale => प",
            "Data => ध",
            "Nier => नि"
        ]
    },
]