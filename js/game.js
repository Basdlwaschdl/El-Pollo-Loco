let canvas;
let gameRun = false;
let world;
let ctx;
let getBottleImg = 0;
let keyboard = new Keybord;
let music = false;
let fullScreen = false;
let jump_sound = new Audio('audio/jump.mp3');
let background_sound = new Audio('audio/bgrMusic.mp3');


function startGame() {
    startLevel();
    background_sound.pause();
    document.getElementById('startimg').style.display = 'none';
    document.getElementById('mobileButtons').style.zIndex = '4';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard);
};


function endScreen(x) {
    document.getElementById('mobileButtons').style.zIndex = '1';
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
    if (!music) {
        document.getElementById('musicButton').innerHTML = `<img src="img/icons/speaker.png">`;
        music = true
        background_sound.play();
    } else {
        document.getElementById('musicButton').innerHTML = `<img src="img/icons/mute.png">`;
        music = false;
        background_sound.pause();
    }
};


function showFullScreen() {
    let screen = document.getElementById("fullScreen");
    let e = document.getElementById("mainBox");
    if (!fullScreen) {
        setFullscreen(e, screen);
    } else {
        removeFullscreen();
    }
};


function setFullscreen(e, screen) {
    fullScreen = true;
    addClasslist();
    screen.innerHTML = `<img src="img/icons/exitfullScreen.png">`;
    if (e.requestFullscreen) {
        e.requestFullscreen();
    }
};


function removeFullscreen() {
    screen.innerHTML = `<img src="img/icons/full-screen.png">`;
    fullScreen = false;
    removeClasslist();
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
};


function addClasslist() {
    document.getElementById('canvas').classList.add('canvas_full');
    document.getElementById('startimg').classList.add('canvas_full');
};


function removeClasslist() {
    document.getElementById('canvas').classList.remove('canvas_full');
    document.getElementById('startimg').classList.remove('canvas_full');
};





