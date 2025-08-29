import { passwordGameLauncher } from "./games/passwordGame.js"
import { encryptedFileGameLauncher } from "./games/encryptedFileGame.js"
import { kitchenGameLauncher } from "./games/kitchenGame.js"
import { pianoGameLauncher } from "./games/pianoGame.js"
import { sesameGameLauncher } from "./games/sesameGame.js"
import { reconnectGameLauncher } from "./games/reconnectGame.js"
import { chestGameLauncher } from "./games/chestGame.js"
import { caveGameLauncher } from "./games/caveGame.js"

export const games: { [index: string]: () => DocumentFragment } = {
    passwordGame: passwordGameLauncher,
    encryptedFileGame: encryptedFileGameLauncher,
    kitchenGame: kitchenGameLauncher,
    pianoGame: pianoGameLauncher,
    sesameGame: sesameGameLauncher,
    reconnectGame: reconnectGameLauncher,
    chestGame: chestGameLauncher,
    caveGame: caveGameLauncher,
}

export type GameEvent = {
    nextMessageId: number
}