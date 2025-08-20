const uiSoundFX: { [index: string]: string } = {
    msgReceived: "static/audios/msg-notif.mp3",
    msgSent: "static/audios/sent-notif.mp3",
    error: "static/audios/error.mp3",
    success: "static/audios/success.mp3",
    open: "static/audios/open.mp3",
    close: "static/audios/close.mp3",
    booting: "static/audios/booting.mp3"
}

const bgMusics: { [index: string]: string } = {
    main: "static/audios/main-bg-music.mp3",
    gameOne: "static/audios/game-one-bg-music.mp3"
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
