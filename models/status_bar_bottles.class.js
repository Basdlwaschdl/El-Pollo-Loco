class StatusBar_Bottles extends DrawableObject {

    imgStatusBar_Bottles = [
        'img/6_salsa_bottle/salsa_bottle.png'
    ];

    constructor() {
        super().loadImage(this.imgStatusBar_Bottles[0]);
        this.x = 330;
        this.y = 35;
        this.height = 60;
        this.width = 60;
        this.loadArray(this.imgStatusBar_Bottles);
    }


};

