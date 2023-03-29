class Clouds extends MoveObject {

    constructor(imgPath, y, x) {

        super().loadImage(imgPath);
        this.y = y;
        this.x = x;
        this.height = 400;
        this.width = 1200;
        this.speed = Math.random() * 2;
        this.animateObject();
    }
    animateObject() {
        setInterval(() => { this.x += this.speed; }, 50);
    }
};
