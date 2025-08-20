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
        title: "Papier à musique",
        dialogId: 999,
        type: "text",
        content: [
            "UT QUEANT LAXIS",
            "Sapin => स",
            "Refus => र",
            "Gare => ग",
            "Matin => म",
            "Pale => प",
            "Data => ध",
            "Nier => नि"
        ]
    },
    {
        title: "Fichier n°1 - énigme",
        dialogId: 180,
        type: "text",
        content: [
            "AVEC UNE CLEF, LA CRYPTE S'OUVRE",
            "Adepte de ce culte ou végétarien, en quête de soin, d'une même molécule ils ont besoin."
        ]
    },
    {
        title: "Fichier n°2 - plan",
        type: "image",
        content: [],
        media: "https://placehold.co/350x350",
        dialogId: 190
    }
]