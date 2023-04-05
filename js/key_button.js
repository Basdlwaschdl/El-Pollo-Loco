
function bindMobileButtons() {

    document.getElementById('mobileRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.right = true;
    })
    document.getElementById('mobileRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.right = false;
    })
    document.getElementById('mobileLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.left = true;
    })
    document.getElementById('mobileLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.left = false;
    })
    document.getElementById('mobileJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.jump = true;
    })
    document.getElementById('mobileJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.jump = false;
    })
    document.getElementById('mobileThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.shoot = true;
    })
    document.getElementById('mobileThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.shoot = false;
    })
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

