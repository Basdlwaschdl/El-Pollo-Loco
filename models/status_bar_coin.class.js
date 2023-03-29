class StatusBar_Coins extends DrawableObject {

    imgStatusBar_Coin = [
        'img/Gold/Gold_21.png'
    ];

    constructor() {
        super().loadImage(this.imgStatusBar_Coin[0]);
        this.x = 420;
        this.y = 50;
        this.height = 40;
        this.width = 40;
    };
};