let canvas;
let world;
let ctx;
let keyboard = new Keybord;
jump_sound = new Audio('audio/jump.mp3');




    



function startGame() {
    startLevel();
    document.getElementById('startGame').style.display = 'none';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(canvas, keyboard);
}


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


document.addEventListener("keydown", (event) => {
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
        jump_sound.play();
    }
});
