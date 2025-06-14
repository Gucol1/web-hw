let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            alert('Пасхалка активирована🥚!');
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});