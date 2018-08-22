var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;

function executeGame() {
    drawGameBoard(0, 0, 700, 300, 0);
}

function showCoords(event, dispalyElement) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById(dispalyElement).innerHTML = coords;
}

function drawGameBoard(x, y, width, height, score) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "BLACK";
        ctx.fillRect(x, y, width, height);
        ctx.clearRect(x + 15, y + 15, width - 30, height - 30);
        ctx.font = '48px serif';
        ctx.fillText("poäng: " + score, width - 220, 50);
    } else {
        alert("Error: No canvas found to draw the game board on!!!")
    }
}

function addKeyEvenListener() {

    document.addEventListener("keydown", function(e) {
        if (e.which === KEY_LEFT) {
            alert("left key down");
        }
        if (e.which === KEY_UP) {
            alert("left key down");
        }
        if (e.which === KEY_RIGHT) {
            alert("left key down");
        }
        if (e.which === KEY_DOWN) {
            alert("left key down");
        }
    });
}

function addMouseEventListener(displayDomElement) {
    document.addEventListener("click", function(e) {
        showCoords(e, displayDomElement);
    });
}
