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
        title: "Fichier n°1",
        dialogId: 180,
        type: "text",
        content: [
            "Ut queant laxis",
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
        title: "Fichier n°2",
        dialogId: 190,
        type: "text",
        content: ["foo"]
    }
]