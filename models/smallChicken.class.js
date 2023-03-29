class SmallChicken extends MoveObject {

    imgWalking = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    imgDeath = 'img/3_enemies_chicken/chicken_small/2_dead/dead.png';
    offset = { top: 10, bottom: 10, left: 10, right: 10 };
    chickenHit = false;
    x;
    y;
    randomNumber;

    constructor(y, x, hit) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = x;
        this.y = y;
        this.chickenHit = hit;
        this.width = 80;
        this.height = 80;
        this.speed = 1 + Math.random() * 1.5
        this.randomNumber = Math.random() * 2500;
        this.loadArray(this.imgWalking);
        this.applyGravaty();
        this.animate();
        this.animateObject();
        this.randomJump();
    };




    animate() {
        if (this.chickenHit) {
            this.loadImage(this.imgDeath);
        } else {
            setInterval(() => {
                this.playAnimation(this.imgWalking);
            }, 100);
        }
    };


    animateObject() {
        if (!this.chickenHit) {
            setInterval(() => {
                this.moveLeft(this.speed);
            }, 20);
        }
    };


    randomJump() {
        setInterval(() => {
            if (!this.objectOnGround() && !this.chickenHit) {
                this.jump();
            }
        }, this.randomNumber);

    };

};