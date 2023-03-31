class Coin extends MoveObject {
    imgCoin = [
        'img/Gold/Gold_21.png',
        'img/Gold/Gold_22.png',
        'img/Gold/Gold_23.png',
        'img/Gold/Gold_24.png',
        'img/Gold/Gold_25.png',
        'img/Gold/Gold_26.png',
        'img/Gold/Gold_27.png',
        'img/Gold/Gold_28.png',
        'img/Gold/Gold_29.png',
        'img/Gold/Gold_30.png'
    ];

    constructor(x) {
        super().loadImage(this.imgCoin[0]);
        this.loadArray(this.imgCoin)
        this.x = x;
        this.y = 300;
        this.width = 50;
        this.height = 50;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imgCoin);
        }, 100);
    };
}