class Level {
    coin;
    clouds;
    backgrounds;
    enemys;
    bottle;
    level_end_x = 6500;

    constructor(backgrounds, clouds, enemys, coin, bottle) {
        this.enemys = enemys;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.coin = coin;
        this.bottle = bottle;
    }
};