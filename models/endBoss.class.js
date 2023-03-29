class EndBoss extends MoveObject {


    offset = { top: 80, bottom: 20, left: 50, right: 50 };
    energy = 100;
    hurt = false;
    intervall;
    attack = false;
    attackDistance;
    endBossHurt_sound = new Audio('audio/ensBossHurt.mp3');

    imgDead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    imgAttack = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    imgAlert = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    imgHurt = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    imgWalk = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    constructor() {
        super().loadImage(this.imgAlert[0]);
        this.loadArray(this.imgAlert);
        this.loadArray(this.imgHurt);
        this.loadArray(this.imgDead);
        this.loadArray(this.imgWalk);
        this.loadArray(this.imgAttack);
        this.applyGravaty();
        this.showAnimation();
        this.speed = 27;
        this.x = 6500;
        this.y = 290;
        this.width = 400;
    };


    showAnimation() {
        this.intervall = setInterval(() => {
            this.endBossHurt();
            this.endbossAlert();
            this.endBossDead();
            this.battleAnimation()
        }, 100);
    };


    endbossAlert() {
        if (!this.hurt && !this.attack)
            this.playAnimation(this.imgAlert);
    };


    endBossHurt() {
        if (this.hurt) {
            this.endBossHurt_sound.play();
            this.playAnimation(this.imgHurt);
            setTimeout(() => {
                this.hurt = false
            }, 1000);
        }
    };


    endBossDead() {
        if (this.energy < 1) {
            this.playAnimation(this.imgDead);
            setTimeout(() => {
                this.loadImage(this.imgDead[2])
                clearInterval(this.intervall)
            }, 500);
            clearInterval(this.intervall);
            world.gameWin();
        }
    };


    battleAnimation() {
        this.attackDistance = this.x - this.world.character.x;
        if (this.characterInSight()) {
            this.attackCharacter();
        }
        if (this.hurt) {
            this.moveRight(this.speed)
        }
        else if (this.attackDistance < 500 && this.energy > 0 && !this.hurt) {
            this.playAnimation(this.imgAttack)
        }
        if (this.world.character.energy < 1) {
            this.speed = 0;
            this.playAnimation(this.imgAttack)
        }
    };


    attackCharacter() {
        this.attack = true;
        this.playAnimation(this.imgWalk)
        this.moveLeft(this.speed);
    };


    characterInSight() {
        return this.attackDistance < 800 && this.energy > 0 && !this.hurt;
    };
};
