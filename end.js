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
    get x() {
        return MainScreen.width/2-((MainScreen.width/10));
    },
    get y() {
        return MainScreen.height/2-((MainScreen.height/10));
    },
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
    background.src = "../images/background/medal.png";
}

function drawText() {
    var text = document.querySelector(".btn-text1");
    text.textAlign = 'center';
    text.style.top = `calc(${BTN.y - 100}px)`;
    text.style.left = `calc(${BTN.x * 0.5}px)`;
    text.style.right = `calc(${BTN.x + BTN.width*2}px)`;
    text.style.bottom = `calc(${BTN.y + BTN.height}px)`;
}

function draw() {
    let x = (MainScreen.width - background.width) / 2.15;
    let y = (MainScreen.height - background.height) / 2;
    canvasContext.fillStyle = MainScreen.color;
    canvasContext.fillRect(0, 0, MainScreen.width, MainScreen.height)
    canvasContext.drawImage(background, x, y);
    drawText();
}

window.addEventListener("resize", event => {
    setCanvasSize();
    draw();
});

window.addEventListener("click", e => {
    window.location.href = '../menu/menu.html'
});

draw();
allImages();
background.onload = draw;