let level1;
function startLevel() {

    level1 = new Level(
        [
            new Background('img/5_background/layers/air.png', -1279, 0),
            new Background('img/5_background/layers/3_third_layer/2.png', -1279, 0),
            new Background('img/5_background/layers/2_second_layer/2.png', -1279, 0),
            new Background('img/5_background/layers/1_first_layer/2.png', -1279, 0),

            new Background('img/5_background/layers/air.png', 0, 0),
            new Background('img/5_background/layers/3_third_layer/1.png', 0, 0),
            new Background('img/5_background/layers/2_second_layer/1.png', 0, 0),
            new Background('img/5_background/layers/1_first_layer/1.png', 0, 0),

            new Background('img/5_background/layers/air.png', 1279, 0),
            new Background('img/5_background/layers/3_third_layer/2.png', 1279, 0),
            new Background('img/5_background/layers/2_second_layer/2.png', 1279, 0),
            new Background('img/5_background/layers/1_first_layer/2.png', 1279, 0),

            new Background('img/5_background/layers/air.png', 2558, 0),
            new Background('img/5_background/layers/3_third_layer/1.png', 2558, 0),
            new Background('img/5_background/layers/2_second_layer/1.png', 2558, 0),
            new Background('img/5_background/layers/1_first_layer/1.png', 2558, 0),

            new Background('img/5_background/layers/air.png', 1279 * 3, 0),
            new Background('img/5_background/layers/3_third_layer/2.png', 1279 * 3, 0),
            new Background('img/5_background/layers/2_second_layer/2.png', 1279 * 3, 0),
            new Background('img/5_background/layers/1_first_layer/2.png', 1279 * 3, 0),

            new Background('img/5_background/layers/air.png', 1279 * 4, 0),
            new Background('img/5_background/layers/3_third_layer/1.png', 1279 * 4, 0),
            new Background('img/5_background/layers/2_second_layer/1.png', 1279 * 4, 0),
            new Background('img/5_background/layers/1_first_layer/1.png', 1279 * 4, 0),

            new Background('img/5_background/layers/air.png', 1279 * 5, 0),
            new Background('img/5_background/layers/3_third_layer/2.png', 1279 * 5, 0),
            new Background('img/5_background/layers/2_second_layer/2.png', 1279 * 5, 0),
            new Background('img/5_background/layers/1_first_layer/2.png', 1279 * 5, 0)

        ],
        [
            new Clouds('img/5_background/layers/4_clouds/1.png', 100, -1200),
            new Clouds('img/5_background/layers/4_clouds/2.png', 10, -1240),
            new Clouds('img/5_background/layers/4_clouds/1.png', 100, 40),
            new Clouds('img/5_background/layers/4_clouds/2.png', 10, 50),
            new Clouds('img/5_background/layers/4_clouds/1.png', 100, 1240),
            new Clouds('img/5_background/layers/4_clouds/2.png', 50, 1200)
        ],
        [
            new Chicken(580, 1100),
            new Chicken(580, 1700),
            new Chicken(580, 2300),
            new Chicken(580, 3000),
            new Chicken(580, 3600),
            new Chicken(580, 4200),
            new Chicken(580, 4800),
            new Chicken(580, 5400),
            new Chicken(580, 6000),
            new Chicken(580, 6600),
            new Chicken(580, 7200),
            new Chicken(580, 7800),
            new Chicken(580, 8400),
            new Chicken(580, 9000),
            new Chicken(580, 9400),
            new Chicken(580, 9800),
            new SmallChicken(600, 1000),
            new SmallChicken(600, 1500),
            new SmallChicken(600, 2000),
            new SmallChicken(600, 2500),
            new SmallChicken(600, 3000),
            new SmallChicken(600, 3500),
            new SmallChicken(600, 4000),
            new SmallChicken(600, 4500),
            new SmallChicken(600, 5000),
            new SmallChicken(600, 5500),
            new SmallChicken(600, 6000),
            new SmallChicken(600, 6500),
            new SmallChicken(600, 7000),
            new SmallChicken(600, 7500),
            new SmallChicken(600, 8000),
            new SmallChicken(600, 8500)
        ],
        [
            new Coin(300),
            new Coin(400),
            new Coin(500),
            new Coin(1300),
            new Coin(1400),
            new Coin(2200),
            new Coin(2300),
            new Coin(2400),
            new Coin(3200),
            new Coin(3300),
            new Coin(3900),
            new Coin(4000),
            new Coin(4100),
            new Coin(4900),
            new Coin(5100),
            new Coin(5800),
        ],
        [
            new Bottle(200, 585),
            new Bottle(250, 585),
            new Bottle(300, 585),
            new Bottle(800, 585),
            new Bottle(820, 585),
            new Bottle(1000, 585),
            new Bottle(1200, 585),
            new Bottle(1550, 585),
            new Bottle(1590, 585),
            new Bottle(2000, 585),
            new Bottle(2050, 585),
            new Bottle(2200, 585),
            new Bottle(2500, 585),
            new Bottle(2850, 585),
            new Bottle(3200, 585),
            new Bottle(3300, 585),
            new Bottle(3400, 585),
            new Bottle(3750, 585),
            new Bottle(4000, 585),
            new Bottle(4100, 585),
            new Bottle(4500, 585),
            new Bottle(4650, 585),
            new Bottle(5000, 585),
            new Bottle(5150, 585),
            new Bottle(5400, 585),
            new Bottle(5500, 585),
            new Bottle(5800, 585)
        ]
    );
};