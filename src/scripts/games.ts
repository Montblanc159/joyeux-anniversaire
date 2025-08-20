import { passwordGameLauncher } from "./games/passwordGame.js"
import { encryptedFileGameLauncher } from "./games/encryptedFileGame.js"
import { kitchenGameLauncher } from "./games/kitchenGame.js"
import { pianoGameLauncher } from "./games/pianoGame.js"

export const games: { [index: string]: () => DocumentFragment } = {
    passwordGame: passwordGameLauncher,
    encryptedFileGame: encryptedFileGameLauncher,
    kitchenGame: kitchenGameLauncher,
    pianoGame: pianoGameLauncher,
}

export type GameEvent = {
    nextMessageId: number
}