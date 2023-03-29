class Bottle extends MoveObject {

    offset = { top: 0, bottom: 0, left: 30, right: 30 };
    imgBottle = [
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    imgBottle_splash = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];
    x;
    y;
    hit;

    constructor(x, y, hit) {
        super().loadImage(this.imgBottle[0]);
        this.x = x;
        this.y = y;
        this.hit = hit;
        this.height = 100;
        this.width = 80;
        this.loadArray(this.imgBottle_splash);
        this.animate();     
    };


    animate() {
        if (this.hit) {
            setInterval(() => {
                this.playAnimation(this.imgBottle_splash);
            }, 100);
        };
    };
};