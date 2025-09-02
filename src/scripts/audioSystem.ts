const uiSoundFX = Object.freeze({
    msgReceived: "static/audios/msg-notif.mp3",
    msgSent: "static/audios/sent-notif.mp3",
    error: "static/audios/error.mp3",
    success: "static/audios/success.mp3",
    open: "static/audios/open.mp3",
    close: "static/audios/close.mp3",
    booting: "static/audios/booting.mp3"
});

const bgMusics = Object.freeze(
    {
        main: "static/audios/main-bg-music.mp3",
        caveGame: "static/audios/cave-game.mp3",
        chestGame: "static/audios/chest-game.mp3",
        encryptedFileGame: "static/audios/encrypted-file-game.mp3",
        endGame: "static/audios/end-game.mp3",
        kitchenGame: "static/audios/kitchen-game.mp3",
        passwordGame: "static/audios/password-game.mp3",
        pianoGame: "static/audios/piano-game.mp3",
        reconnectGame: "static/audios/reconnect-game.mp3",
        sesameGame: "static/audios/sesame-game.mp3",
    }
)

export function audioReaction(eventName: keyof typeof uiSoundFX) {
    const audio = new Audio(uiSoundFX[eventName]);
    audio.play();

    audio.addEventListener("ended", () => {
        audio.remove();
    })
}

export function playGameMusic(src?: keyof typeof bgMusics, volume?: number) {
    if (src) {
        bgAudio.src = bgMusics[src];
    }

    if (volume) {
        bgAudio.volume = volume;
    }

    bgAudio.play();
}

export function pauseGameMusic() {
    bgAudio.pause()
}

const bgAudio = new Audio();
bgAudio.loop = true;

export { bgAudio }

playGameMusic("main");
