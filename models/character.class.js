class Character extends MoveObject {

    world;
    energy = 100;
    intervall;
    hurtSound = new Audio('audio/hurt.mp3');
    offset = { top: 150, bottom: 10, left: 50, right: 50 };
    gameOver;
    x;
    winGame = false;

    imgIdle = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    imgHurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    imgDeath = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png'
    ];

    imgJump = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    imgWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-26.png');
        this.loadArray(this.imgWalking);
        this.loadArray(this.imgJump);
        this.loadArray(this.imgDeath);
        this.loadArray(this.imgHurt);
        this.loadArray(this.imgIdle);
        this.applyGravaty();
        this.animate();
        this.speed = 3;
        this.x = 100;
        this.y = 290
    };


    animate() {
        this.intervall = setInterval(() => this.animateCharacter(), 80);
        setInterval(() => this.moveCharacter(), 8);
    };


    moveCharacter() {
        if (!this.gameOver) {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight(this.speed);
                this.directionLeft = false;
            }
            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft(this.speed);
                this.directionLeft = true;
            }
            if (this.world.keyboard.jump && !this.objectOnGround()) {
                this.jump();
                this.currentImg = 0;
            }
            this.world.camera_x = - this.x + 150;
        }
    };


    animateCharacter() {
        if (!this.objectOnGround()) {
            this.playAnimation(this.imgIdle);
        }
        if (this.hurt) {
            this.hurtSound.play();
            this.characterIshurt();
        } else {
            this.jumpOrwalk();
        };
        if (this.energy < 1) {
            this.gameOver = true;
            this.characterIsDeathAnimation();
        }
    };


    characterWalk() {
        return !this.gameOver && this.x < this.world.level.level_end_x && this.world.keyboard.right || !this.gameOver && this.world.keyboard.left && this.x > 0
    };


    jumpOrwalk() {
        if (this.currentImg < 9 && this.objectOnGround()) {
            this.playAnimation(this.imgJump);
        } else if (this.characterWalk()) {
            this.playAnimation(this.imgWalking);
        }
    };


    winGameAnimation() {
        clearInterval(this.intervall);
        this.directionLeft = false;
        this.loadImage(this.imgJump[3]);
        this.jump();
        setTimeout(() => {
            setInterval(() => this.moveRight(5), 5);
            setInterval(() => this.playAnimation(this.imgWalking), 50);
        }, 1500);
        
    }
};
