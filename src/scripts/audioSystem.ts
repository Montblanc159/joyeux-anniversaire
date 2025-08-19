const uiSoundFX: { [index: string]: string } = {
    msgReceived: "static/msg-notif.mp3",
    msgSent: "static/sent-notif.mp3",
    error: "static/error.mp3",
    success: "static/success.mp3",
    open: "static/open.mp3",
    close: "static/close.mp3",
    booting: "static/booting.mp3"
}

const bgMusics: { [index: string]: string } = {
    main: "static/main-bg-music.mp3",
    gameOne: "static/game-one-bg-music.mp3"
}

export function audioReaction(eventName: string) {
    const audio = new Audio(uiSoundFX[eventName]);
    audio.play();

    audio.addEventListener("ended", () => {
        audio.remove();
    })
}

export function playGameMusic(src?: string) {
    if (src) {
        bgAudio.src = bgMusics[src];
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
