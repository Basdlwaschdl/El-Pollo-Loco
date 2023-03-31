class MoveObject extends DrawableObject {

    speed;
    acceleration = 2;
    speed_y;
    speed_x;
    hurt = false;
    directionLeft = false;
    offset = { top: 0, bottom: 0, left: 0, right: 0 };
    index;

    
    isColliding(object) {
        return this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom;
    };


    objectHit() {
        if (this.energy > 0) {
            this.energy -= 2;
        }
    };


    objectHurt() {
        if (!this.gameOver) {
            return this.hurt = true;
        }
    };


    applyGravaty() {
        setInterval(() => {
            if (this.objectOnGround() || this.speed_y > 0) {
                this.y -= this.speed_y;
                this.speed_y -= this.acceleration;
            }
        }, 30);
    };


    objectOnGround() {
        if (this instanceof ThrowableObjects) {
            return true;
        }
        if (this instanceof SmallChicken) {
            return this.y < 590;
        } else {
            return this.y < 280;
        }
    };


    moveLeft(speed) {
        this.x -= speed;
    };


    moveRight(speed) {
        this.x += speed;
    };


    playAnimation(img) {
        let i = this.currentImg % img.length;
        let path = img[i];
        this.img = this.imgCache[path];
        this.currentImg++;
    };


    characterIshurt() {
        this.speed = 2;
        this.playAnimation(this.imgHurt);
        setTimeout(() => {
            this.hurt = false;
            this.speed = 3;
        }, 1000);
    };


    jump() {
        this.speed_y = 25;
    };


    jumpFromEnemy() {
        this.jumpEnemy = true;
        setTimeout(() => this.jumpEnemy = false, 1000);
        this.speed_y = 21;
    };


    gameLost() {
        this.jump();
        new Audio('audio/game_over.wav').play();
        setTimeout(() => {
            setInterval(() => {
                this.y -= this.speed_y;
                this.speed_y -= this.acceleration;
            }, 30);
            endScreen('lost');
        }, 800);
    };
};


