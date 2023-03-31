class StatusBar_EndBoss extends DrawableObject {

    imgStatusbar_EndBoss = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    icon = 'img/7_statusbars/3_icons/icon_health_endboss.png';

    constructor() {
        super().loadImage(this.imgStatusbar_EndBoss[5]);
        this.x = 950;
        this.y = 30;
        this.height = 60;
        this.width = 300;
        this.loadArray(this.imgStatusbar_EndBoss);
    }

    showHealthStatus(energy) {
        if (energy < 80) {
            this.loadImage(this.imgStatusbar_EndBoss[4]);
        }
        if (energy < 60) {
            this.loadImage(this.imgStatusbar_EndBoss[3]);
        }
        if (energy < 40) {
            this.loadImage(this.imgStatusbar_EndBoss[2]);
        }
        if (energy < 20) {
            this.loadImage(this.imgStatusbar_EndBoss[1]);
        }
        if (energy < 1) {
            this.loadImage(this.imgStatusbar_EndBoss[0]);
        }
    };

}