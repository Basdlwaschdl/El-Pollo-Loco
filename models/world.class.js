class World {

    bottleAmount = [];
    coinAmount = [];
    throwAbleojects = [];
    deadEnemys = [];
    brokenBottles = [];
    deadSmallchickens = [];
    level = level1;
    character = new Character;
    endBoss = new EndBoss;
    statusBar = new StatusBar;
    statusBar_bottles = new StatusBar_Bottles;
    statusBar_coins = new StatusBar_Coins;
    chicken = new Chicken;
    throwAbleoject = new ThrowableObjects;
    bottle = new Bottle;
    ctx;
    intervall;
    throwDelay = false;
    canvas;
    keyboard;
    camera_x = 0;
    camera_y = 0;
    gameOver = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkEvents();
    };


    setWorld() {
        this.character.world = this;
        this.endBoss.world = this;
    };


    checkEvents() {
        this.intervall = setInterval(() => {
            this.checkCollisionEnemy();
            this.checkCollisionBottle();
            this.checkCollisionCoin();
            this.checkCollisionThrowBottle();
            this.checkCollisionThrowBottle_Endboss();
            this.throw();
        }, 50);
    };


    checkCollisionCoin() {
        this.collectItem(this.level.coin, this.coinAmount);
    };


    checkCollisionBottle() {
        this.collectItem(this.level.bottle, this.bottleAmount);
    };


    collectItem(object, amount) {
        object.forEach((collectable) => {
            if (this.character.isColliding(collectable)) {
                let i = object.indexOf(collectable);
                object.splice(i, 1);
                amount.push(1);
                this.playAudio(collectable);
            }
        });
    };


    playAudio(object) {
        if (object instanceof SmallChicken) {
            new Audio('audio/smallChickendeath.mp3').play();
        }
        if (object instanceof Chicken) {
            new Audio('audio/chicken death.mp3').play();
        }
        if (object instanceof Coin) {
            new Audio('audio/smw_coin.wav').play();
        }
        if (object instanceof Bottle) {
            new Audio('audio/bottle.mp3').play();
        }
    };


    checkCollisionThrowBottle() {
        this.throwAbleojects.forEach((bottle) => {
            this.level.enemys.forEach((enemy) => {
                if (bottle.isColliding(enemy)) {
                    let i = this.throwAbleojects.indexOf(bottle);
                    this.throwAbleojects.splice(i, 1);
                    this.deadEnemy(enemy);
                    this.splashBottle(bottle);
                }
            })
        });
    };


    checkCollisionThrowBottle_Endboss() {
        this.throwAbleojects.forEach((bottle) => {
            if (bottle.isColliding(this.endBoss)) {
                this.splashBottle(bottle);
                this.hitEndboss(bottle);
            }
        });
    }


    hitEndboss(bottle) {
        this.endBoss.energy -= 15;
        let i = this.throwAbleojects.indexOf(bottle);
        this.throwAbleojects.splice(i, 1);
        this.endBoss.hurt = true;
    };


    splashBottle(bottle) {
        new Audio('audio/brokenBottle.mp3').play();
        let brokenBottle = new Bottle(bottle.x, bottle.y, true);
        this.brokenBottles.push(brokenBottle);
        setTimeout(() => {
            let i = this.brokenBottles.indexOf(brokenBottle);
            this.brokenBottles.splice(i, 1);
        }, 700);
    };


    checkCollisionEnemy() {
        this.hurt = false;
        this.level.enemys.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.y < 280 && this.character.speed_y <= 0 && this.character.energy > 0) {
                this.character.jump();
                this.deadEnemy(enemy);
                this.playAudio(enemy);
            }
            else if (this.character.isColliding(enemy) || this.character.isColliding(this.endBoss)) {
                this.character.objectHit();
                this.character.objectHurt();
                this.statusBar.showHealthStatus(this.character.energy);
            };
        });
    };


    deadEnemy(enemy) {
        let i = this.level.enemys.indexOf(enemy);
        this.level.enemys.splice(i, 1);
        if (enemy instanceof SmallChicken) {
            this.showDeadenemy(SmallChicken, enemy, this.deadSmallchickens);
        } else {
            this.showDeadenemy(Chicken, enemy, this.deadEnemys);
        };
    };


    showDeadenemy(object, enemy, array) {
        let deadEnemy = new object(enemy.y, enemy.x, true)
        array.push(deadEnemy);
        setTimeout(() => {
            let i = array.indexOf(deadEnemy);
            array.splice(i, 1);
        }, 2000);
    };


    throw() {
        if (this.keyboard.shoot && this.bottleAmount.length > 0 && !this.throwDelay) {
            let bottle = new ThrowableObjects(this.character.x, this.character.y, this.character.directionLeft)
            this.bottleAmount.splice(0, 1)
            this.throwAbleojects.push(bottle);
            this.throwDelay = true;
            new Audio('audio/throw.mp3').play();
            setTimeout(() => {
                this.throwDelay = false;
            }, 300);
        };
    };


    gameWin() {
        clearInterval(this.intervall);
        this.character.gameOver = true;
        new Audio('audio/yee-haw.mp3').play();
        setTimeout(() => {
            this.character.winGameAnimation();
        }, 500);
    };


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //erase canvas contant
        this.ctx.translate(this.camera_x, this.camera_y);
        this.drawBackground();
        this.drawStuff();
        this.addObjectToCanvas(this.character);
        this.drawEnemys();
        this.ctx.translate(-this.camera_x, this.camera_y);
        this.drawStatusBars();
        this.ctx.translate(this.camera_x, this.camera_y);
        this.ctx.translate(- this.camera_x, this.camera_y);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    };


    drawStatusBars() {
        this.addObjectToCanvas(this.statusBar);
        this.addObjectToCanvas(this.statusBar_bottles);
        this.addObjectToCanvas(this.statusBar_coins);
        this.ctx.font = "30px Roboto";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(this.bottleAmount.length, 380, 80);
        this.ctx.fillText(this.coinAmount.length, 470, 80);
    };


    drawEnemys() {
        this.addArrayToCanvas(this.deadEnemys);
        this.addArrayToCanvas(this.deadSmallchickens);
        this.addObjectToCanvas(this.endBoss);
        this.addArrayToCanvas(this.level.enemys);
    };


    drawBackground() {
        this.addArrayToCanvas(this.level.backgrounds);
        this.addArrayToCanvas(this.level.clouds);
    }


    drawStuff() {
        this.addArrayToCanvas(this.level.coin);
        this.addArrayToCanvas(this.level.bottle);
        this.addArrayToCanvas(this.throwAbleojects);
        this.addArrayToCanvas(this.brokenBottles);
    }


    addArrayToCanvas(objects) {
        objects.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        })
    };


    addObjectToCanvas(object) {
        if (object.directionLeft) {
            this.flipImage(object);
        }
        object.draw(this.ctx);
        if (object.directionLeft) {
            this.flipImageBack(object);
        }
    };


    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    };


    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }
};