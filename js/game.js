let canvas;
let gameRun = false;
let world;
let ctx;
let getBottleImg = 0;
let keyboard = new Keybord;
let music = true;
let jump_sound = new Audio('audio/jump.mp3');
let background_sound = new Audio('audio/bgrMusic.mp3');


function startGame() {
    startLevel();
    background_sound.pause();
    document.getElementById('startimg').style.display = 'none';
    document.getElementById('startimg').style.zIndex = '2';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard);
};


function endScreen(x) {
    document.getElementById('startimg').style.zIndex = '2';
    setTimeout(() => {
        clearAllIntervals();
        if (x == 'lost') {
            showLostScreen();
        } else {
            showWinScreen();
        }
        setTimeout(() => document.getElementById('startimg').style.zIndex = '4', 3500);
    }, 1500);
};


function showLostScreen() {
    document.getElementById('lostScreen').style.transform = 'scale(1)';
    setTimeout(() => {
        document.getElementById('startimg').style.display = '';
        document.getElementById('lostScreen').style.transform = 'scale(0)';
    }, 3000)
};


function showWinScreen() {
    document.getElementById('winScreen').style.transform = 'scale(1)';
    setTimeout(() => {
        document.getElementById('startimg').style.display = '';
        document.getElementById('winScreen').style.transform = 'scale(0)';
    }, 3000);
};


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++)  window.clearInterval(i);
};


function deleteClasses() {
    world = undefined;
};


async function init() {
    await loadAllImages();
};


function showInfo() {
    document.getElementById('infoBox').style.transform = 'scale(1)';
}


function closeInfoBox() {
    document.getElementById('infoBox').style.transform = 'scale(0)';
}


function muteMusic() {
    if (music) {
        document.getElementById('musicButton').innerHTML = `<img src="img/icons/mute.png">`;
        music = false
        background_sound.pause();
    } else {
        document.getElementById('musicButton').innerHTML = `<img src="img/icons/speaker.png">`;
        music = true;
        background_sound.play();
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



