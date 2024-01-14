var MainScreen = {
    color: 'black', 
    get width() {
        return window.innerWidth;
    },
    get height() {
        return window.innerHeight;
    },
}

var BTN = {
    color1: 'black',
    color2: '#353535',
    get width() {
        return MainScreen.width / 5;
    },
    get height() {
        return MainScreen.height / 5;
    },
    text: 'START',
    get x() {
        return MainScreen.width/2-((MainScreen.width/10));
    },
    get y() {
        return MainScreen.height/2-((MainScreen.height/10));
    },
    delta: 10,
}

var background = new Image()

var canvas = document.getElementById('canvas');
setCanvasSize();
var canvasContext = canvas.getContext('2d');

function setCanvasSize() {
    canvas.width = MainScreen.width;
    canvas.height = MainScreen.height;
}

function allImages() {
    background.src = "../images/background/menu.jpg";
}

function drawText() {
    console.log(BTN.height)
    var text = document.querySelector(".btn-text");
    text.textAlign = 'center';
    text.style.top = `calc(${BTN.y + BTN.height/6}px)`;
    text.style.left = `calc(${BTN.x + 15}px)`;
    text.style.right = `calc(${BTN.x + BTN.width}px)`;
    text.style.bottom = `calc(${BTN.y + BTN.height}px)`;
}

function drawBtn() {
    canvasContext.fillStyle = BTN.color1;
    canvasContext.fillRect(BTN.x - 30, BTN.y - 30, BTN.width + 60, BTN.height + 60);
    canvasContext.fillStyle = BTN.color2;
    canvasContext.fillRect(BTN.x, BTN.y, BTN.width, BTN.height);
    canvasContext.fillStyle = 'white';
    canvasContext.font = '100px serif';
    canvasContext.textAlign = 'center';
}

function draw() {
    let x = (MainScreen.width - background.width)/2;
    let y = (MainScreen.height - background.height) / 2;
    canvasContext.drawImage(background, x, y);
    drawBtn();
    drawText();
}

window.addEventListener("resize", event => {
    setCanvasSize();
    draw();
    BTN.y += BTN.delta;
    drawText();
    console.log(1234567)
});

window.addEventListener("click", e => {
    let x = e.clientX;
    let y = e.clientY;
    if (
        BTN.x < x && x < BTN.x + BTN.width
        && BTN.y < y && y < BTN.y + BTN.height
    ) {
        window.location.href = '../prolog/prolog.html'
    }
});

// window.addEventListener('keydown', e => ){
// }


allImages();
background.onload = draw;