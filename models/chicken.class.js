class Chicken extends MoveObject {

    imgWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    imgDeath = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
    offset = { top: 20, bottom: 20, left: 10, right: 10 };
    chickenHit = false;


    constructor(y, x, hit) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.chickenHit = hit
        this.y = y
        this.x = x 
        this.height = 100;
        this.width = 100;
        this.speed = 3 + Math.random() * 1
        this.loadArray(this.imgWalking)
        this.animate();
        this.animateObject();
    }


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
}
