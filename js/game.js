let canvas;
let gameRun = false;
let world;
let ctx;
let getBottleImg = 0;
let keyboard = new Keybord;
let music = true;
let jump_sound = new Audio('audio/jump.mp3');


function endScreen(x) {
    setTimeout(() => {
        clearAllIntervals();
        deleteClasses();
        if (x == 'lost') {
            showLostScreen();
        } else {
            showWinScreen();
        }
    }, 1500);
}


function showLostScreen() {
    document.getElementById('lostScreen').style.transform = 'scale(1)';
    setTimeout(() => {
        document.getElementById('startGame').style.display = '';
        document.getElementById('lostScreen').style.transform = 'scale(0)';
    }, 3000);
};


function showWinScreen() {
    document.getElementById('winScreen').style.transform = 'scale(1)';
    setTimeout(() => {
        document.getElementById('startGame').style.display = '';
        document.getElementById('winScreen').style.transform = 'scale(0)';
    }, 3000);
};


function startGame() {
    startLevel();
    document.getElementById('startGame').style.display = 'none';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard);
};


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++)  window.clearInterval(i);
};


function deleteClasses() {
    world = undefined;
};


function muteMusic() {
    if ( music ) {
    document.getElementById('musicButton').innerHTML = `<img src="img/icons/mute.png">`;
    music = false
    } else {
        document.getElementById('musicButton').innerHTML = `<img src="img/icons/speaker.png">`;
        music = true;
    }
};


document.addEventListener("keypress", (event) => {
    if (event.key == 'd') {
        keyboard.right = true;
    }
    if (event.key == 'a') {
        keyboard.left = true;
    }
    if (event.key === ' ') {
        keyboard.shoot = true;
    }

    if (event.key == 'w') {
        keyboard.jump = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key == 'd') {
        keyboard.right = false;
    }
    if (event.key == 'a') {
        keyboard.left = false;
    }
    if (event.key == ' ') {
        keyboard.shoot = false;
    }
    if (event.key == 'w') {
        keyboard.jump = false;
    }
});



