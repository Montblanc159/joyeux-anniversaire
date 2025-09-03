import { type GameEvent } from "../games.js";
import { audioReaction, pauseGameMusic, playGameMusic } from "../audioSystem.js";
import "phaser";

const gameSoundFXMapping = Object.freeze({
    walk: "static/audios/walk.ogg",
    jump: "static/audios/jump.ogg"
});

function audioFX(eventName: keyof typeof gameSoundFXMapping, loop?: boolean, vol?: number) {
    const audio = new Audio(gameSoundFXMapping[eventName])
    audio.loop = !!loop;

    if (vol) {
        audio.volume = vol;
    }

    return audio;
}

const gameSoundFx = Object.freeze({
    walk: audioFX("walk", true, 0.7),
    jump: audioFX("jump")
});


class CaveGame extends Phaser.Scene {
    player?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    levelMap?: Phaser.Tilemaps.Tilemap;



    constructor() {
        super();
    }

    preload() {
        this.load.image('tileset', 'static/images/tileset.png');
        this.load.tilemapTiledJSON("map", "static/images/map.json");
        this.load.spritesheet('dude',
            'static/images/character.png',
            { frameWidth: 48, frameHeight: 48 }
        );

    }

    create() {
        this.levelMap = this.add.tilemap("map");

        const tileset = this.levelMap.addTilesetImage(
            "tileset",
            "tileset"
        );

        if (tileset) {
            this.levelMap.createLayer(
                "bg",
                tileset
            );

            const mg = this.levelMap.createLayer(
                "mg",
                tileset
            );

            this.player = this.physics.add.sprite(20, 920, 'dude');

            this.player.body.setSize(24, 32, true)

            this.player.setBounce(0.05);
            this.player.setCollideWorldBounds(true);



            if (mg) {
                mg.setCollisionByProperty({ collision: true });
                this.physics.add.collider(this.player, mg);
            }

            this.levelMap.createLayer(
                "fg",
                tileset
            );

            // redimentionnement du monde avec les dimensions calculées via tiled
            this.physics.world.setBounds(0, 0, 416, 960);
            //  ajout du champs de la caméra de taille identique à celle du monde
            this.cameras.main.setBounds(0, 0, 416, 960);
            // ancrage de la caméra sur le joueur
            this.cameras.main.startFollow(this.player);

            const winZone = this.levelMap?.findObject("markers", (obj) => { return obj.name === "winZone"; });

            console.log(winZone);


            if (winZone) {
                const winOverlap = this.add.zone(
                    winZone.x!,
                    winZone.y!,
                    winZone.width!,
                    winZone.height!,
                )

                winOverlap.setOrigin(0, 0)

                this.physics.add.existing(winOverlap, true);

                this.physics.add.overlap(this.player, winOverlap, (player, overlap) => {
                    overlap.destroy();
                    gameWon();
                });
            }

        }

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 16, end: 23 }),
            frameRate: 24,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 4 }),
            frameRate: 1,
            repeat: -1,
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 24, end: 31 }),
            frameRate: 24,
            repeat: -1
        });

    }

    update() {
        const cursors = this.input.keyboard?.createCursorKeys();

        if (cursors?.left.isDown) {
            this.player?.setVelocityX(-160);

            gameSoundFx["walk"].play();

            this.player?.anims.play('left', true);
        }
        else if (cursors?.right.isDown) {
            this.player?.setVelocityX(160);

            gameSoundFx["walk"].play();

            this.player?.anims.play('right', true);
        }
        else {
            this.player?.setVelocityX(0);

            gameSoundFx["walk"].pause();

            this.player?.anims.play('turn');
        }

        let x = -160

        if (cursors?.space.isDown && this.player?.body.blocked.down) {
            gameSoundFx["jump"].play();

            this.player?.setVelocityY(x);
        }


        if (cursors?.space.isDown && !this.player?.body.blocked.down && (this.player?.body.blocked.left || this.player?.body.blocked.right)) {
            gameSoundFx["jump"].play();

            this.player?.setVelocityY(x);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    scene: CaveGame,
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500, x: 0 }
        }
    },
    pixelArt: true,
    scale: {
        // mode: Phaser.Scale.FIT,
        zoom: 2
    },
};

const winGameEvent: GameEvent = { nextMessageId: 433 };
// const quitGameEvent: GameEvent = { nextMessageId: 309 };

const baseName = "cave-game"
const main = document.getElementsByTagName("main")[0];
const fragment = document.createDocumentFragment();

export function caveGameLauncher(): DocumentFragment {
    const div = fragment.appendChild(document.createElement("div"))
    const p = div.appendChild(document.createElement("p"));

    // audioReaction("booting");

    p.textContent = "Ouverture de la carte...";
    div.className = "chat__messages__game";

    initGame(fragment);

    return fragment;
}

function initGame(eventElement: DocumentFragment) {
    playGameMusic("caveGame", 0.4);

    const fragment = document.createDocumentFragment();
    const loading = loadingText();
    const section = fragment.appendChild(document.createElement("section"));
    section.appendChild(loading);

    section.className = baseName;
    section.id = "game";

    main.appendChild(fragment);

    setTimeout(() => {
        loading.remove();

        new Phaser.Game(config);

        main.appendChild(fragment);

    }, 2000);
}

function loadingText() {
    const p = document.createElement("p");
    p.textContent = "Ouverture de la carte...";
    p.className = baseName + "__loading";

    return p
}

function gameWon() {
    audioReaction("success");

    const section = document.getElementsByClassName(baseName)[0];

    let winText = section.appendChild(document.createElement("p"));

    winText.className = baseName + "__winner";
    winText.textContent = "LIBERTÉ";

    setTimeout(() => {
        fragment.dispatchEvent(new CustomEvent("won", { detail: winGameEvent }));
    }, 3000)
}