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
        content: [],
        media: "https://placehold.co/350x350",
        dialogId: 190
    },
    {
        title: "Fichier : cultissime.txt",
        dialogId: 180,
        type: "text",
        content: [
            "AVEC UNE CLEF, LA CRYPTE S'OUVRE",
            "Adepte de ce culte ou végétarien, en quête de soin, d'une même molécule ils ont besoin."
        ]
    },
    {
        title: "Note : Tripoli",
        dialogId: 303,
        type: "text",
        content: [
            "Trouve la vrai dénomination de cet affabulateur qui voulut dupliquer un humain",
            "Puis le surnom final de ce gourou qui ne jurait que par \"Zorba le bouddha\"",
            "Enfin, lie les prénoms de ces deux fondateurs qui voyaient le messie dans une soucoupe",
            "À chacun, calcul leur nombre intime."
        ]
    },
    {
        title: "Note : M**** !",
        dialogId: 313,
        type: "text",
        content: [
            "Est-il aussi clair dans un miroir ?"
        ]
    },
    {
        title: "Note : Correspondance",
        dialogId: 308,
        type: "text",
        content: []
    },
    {
        title: "Papier à musique : Ut queant laxis",
        dialogId: 316,
        type: "text",
        content: [
            "Sapin => स",
            "Refus => र",
            "Gare => ग",
            "Matin => म",
            "Pale => प",
            "Data => ध",
            "Nier => नि"
        ]
    },
]