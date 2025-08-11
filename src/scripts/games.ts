import { passwordGameLauncher } from "./games/passwordGame.js"
import { encryptedFileGameLauncher } from "./games/encryptedFileGame.js"

export const games: { [index: string]: () => DocumentFragment } = {
    passwordGame: passwordGameLauncher,
    encryptedFileGame: encryptedFileGameLauncher,
}

export type GameEvent = {
    nextMessageId: number
}