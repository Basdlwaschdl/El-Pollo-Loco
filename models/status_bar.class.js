class StatusBar extends DrawableObject {

    imgStatusBar_health = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];


    constructor() {
        super().loadImage(this.imgStatusBar_health[5]);
        this.x = 30;
        this.y = 30;
        this.height = 60;
        this.width = 300;
        this.loadArray(this.imgStatusBar_health);
    }

    showHealthStatus(energy) {
        if (energy < 80) {
            this.loadImage(this.imgStatusBar_health[4]);
        }
        if (energy < 60) {
            this.loadImage(this.imgStatusBar_health[3]);
        }
        if (energy < 40) {
            this.loadImage(this.imgStatusBar_health[2]);
        }
        if (energy < 20) {
            this.loadImage(this.imgStatusBar_health[1]);
        }
        if (energy < 1) {
            this.loadImage(this.imgStatusBar_health[0]);
        }
    };
};