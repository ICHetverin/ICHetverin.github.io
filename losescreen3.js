var MainScreen = {
    color: '#333333',
    get width() {
        return window.innerWidth;
    },
    get height() {
        return window.innerHeight;
    },
}

var TxtWindow = {
    colorbackground: '#777777',
    color: 'black',
    get width() {
        return MainScreen.width * 0.8;
    },
    get height() {
        return MainScreen.height * 0.8;
    },
    get x() {
        return MainScreen.width * 0.1;
    },
    get y() {
        return MainScreen.height * 0.1;
    },
    delta: 30,
    scroll: 0,
}

var canvas = document.getElementById('canvas');
setCanvasSize();
var canvasContext = canvas.getContext('2d');
var text = document.querySelector(".text");
text.style.top = `calc(10% + ${TxtWindow.delta*1.5}px)`;
text.style.left = `calc(10% + ${TxtWindow.delta*1.5}px)`;
text.style.right = `calc(10% + ${TxtWindow.delta*1.5}px)`;
text.style.bottom = `calc(10% + ${TxtWindow.delta*1.5}px)`;

function setCanvasSize() {
    canvas.width = MainScreen.width;
    canvas.height = MainScreen.height;
}

function drawTxtwindow() {
    canvasContext.clearRect(TxtWindow.x, TxtWindow.y, TxtWindow.width, TxtWindow.height);
    canvasContext.fillStyle = TxtWindow.colorbackground;
    canvasContext.fillRect(TxtWindow.x, TxtWindow.y, TxtWindow.width, TxtWindow.height)
    canvasContext.fillStyle = TxtWindow.color;
    canvasContext.fillRect(TxtWindow.x+TxtWindow.delta, TxtWindow.y+TxtWindow.delta, TxtWindow.width-(TxtWindow.delta*2), TxtWindow.height-(TxtWindow.delta*2));
    canvasContext.beginPath();
    canvasContext.rect(TxtWindow.x+TxtWindow.delta, TxtWindow.y+TxtWindow.delta, TxtWindow.width-(TxtWindow.delta*2), TxtWindow.height-(TxtWindow.delta*2));
    canvasContext.closePath();
    canvasContext.clip();
}

function draw() {
    canvasContext.fillStyle = MainScreen.color;
    canvasContext.fillRect(0, 0, MainScreen.width, MainScreen.height);
    drawTxtwindow();
}

draw()

window.addEventListener("resize", event => {
    setCanvasSize();
    draw();
});

window.addEventListener('wheel', event => {
    TxtWindow.scroll += event.deltaY/3
    if (TxtWindow.scroll > 0) {
        TxtWindow.scroll = 0;
    } 
    drawTxtwindow();
});

window.addEventListener("click", e => {
    window.location.href = 'level3.html';
});



