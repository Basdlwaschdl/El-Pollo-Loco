class ThrowableObjects extends MoveObject {

    imgThrowBottle = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    offset = { top: 20, bottom: 20, left: 20, right: 20 };
    directionLeft;

    constructor(x, y, directionLeft) {
        super(), this.loadImage(this.imgThrowBottle[0]);
        this.directionLeft = directionLeft;
        this.speed = 7;
        this.width = 80;
        this.height = 100;
        this.x = x + 50;
        this.y = y + 200;
        this.loadArray(this.imgThrowBottle);
        this.throw();
        this.animateBottleRotate();
    }


    throw() {
        this.applyGravaty();
        this.speed_y = 30;
        setInterval(() => {
            if (!this.directionLeft) {
                this.x += this.speed;
            } else {
                this.x -= this.speed;
            }
        }, 10);
    }


    animateBottleRotate() {
        setInterval(() => {
            this.playAnimation(this.imgThrowBottle);
        }, 50);
    };
}








