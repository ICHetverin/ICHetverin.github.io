var MainScreen = {
    color: 'black', 
    get width() {
        return window.innerWidth;
    },
    get height() {
        return window.innerHeight;
    },
}

var MENU = {
    color1: '#1F1F1F',
    color2: '#353535',
    get width() {
        return MainScreen.width
    },
    get height() {
        return MainScreen.height/3
    },
    get y() {
        return MainScreen.height * (2/3);
    },    
    delta: 20,
    width1: MainScreen.width * (1.5/7),
}

var TxtWindow = {
    get top() {
        return MENU.y + MENU.delta*1.5;
    },
    get bottom() {
        return MENU.delta * 1.5;
    },
    get left() {
        return MENU.delta * 1.5;
    },
    get right() {
        return (MENU.width1 * 1.5) + MENU.delta;
    },
    scroll: 0,
}

var BTN1 = {
    text: 'продолжить',
    get width() {
        return (MENU.width1 * 1.5) - (2.5 * MENU.delta)
    },
    get height() {
        return MENU.height - MENU.delta * 3
    },
    get x() {
        return MENU.width - (MENU.width1 * 1.5) + MENU.delta*1.5
    },
    get y() {
        return MENU.y + MENU.delta*1.5
    },
}

var background = new Image();
var imgKut = new Image();

var canvas = document.getElementById('canvas');
setCanvasSize();
var canvasContext = canvas.getContext('2d');

function drawText() {
    var text = document.querySelector(".text");
    text.style.top = `calc(${TxtWindow.top}px)`;
    text.style.left = `calc(${TxtWindow.left}px)`;
    text.style.right = `calc(${TxtWindow.right}px)`;
    text.style.bottom = `calc(${TxtWindow.bottom}px)`;
}

drawText();

function setCanvasSize() {
    canvas.width = MainScreen.width;
    canvas.height = MainScreen.height;
}

function allImages() {
    background.src = "../images/background/phili.png";
    imgKut.src = "../images/models/kut2.png";
}

function drawBtn() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(BTN1.x, BTN1.y, BTN1.width, BTN1.height);
    canvasContext.font = '60px serif';
    canvasContext.fillStyle = 'white';
    canvasContext.textAlign='center';
    canvasContext.fillText(BTN1.text, BTN1.x + BTN1.width/2, BTN1.y+MENU.delta/2 + BTN1.height/2);
}

function drawMenu() {
    canvasContext.clearRect(TxtWindow.x, TxtWindow.y, TxtWindow.width, TxtWindow.height);
    
    canvasContext.fillStyle = MENU.color1; // big black
    canvasContext.fillRect(0, MENU.y, MENU.width, MENU.height);

    canvasContext.fillStyle = MENU.color2; // big grey
    canvasContext.fillRect(MENU.delta, MENU.y + MENU.delta, MENU.width - (MENU.delta * 2), MENU.height-(MENU.delta * 2))
    
    canvasContext.fillStyle = MENU.color2; // left smaller grey
    canvasContext.fillRect(MENU.delta, MENU.y + MENU.delta, MENU.width1 - (MENU.delta * 2), MENU.height - (MENU.delta * 2))
    
    canvasContext.fillStyle = MENU.color1; // right small black
    canvasContext.fillRect(MENU.width - (MENU.width1 * 1.5), MENU.y, MENU.width, MENU.height);

    canvasContext.fillStyle = MENU.color2; // right smaller grey
    canvasContext.fillRect(MENU.width - (MENU.width1 * 1.5) + MENU.delta, MENU.y + MENU.delta, (MENU.width1 * 1.5) - (1.5 * MENU.delta), MENU.height - (2 * MENU.delta));
    
}

// function drawRightCharacter() {
//     let x = (MainScreen.width - imgNap.width*1.5);
//     let y = (MainScreen.height - imgNap.height)/1000;
//     canvasContext.drawImage(imgNap, x, y)
// }

function drawLeftCharacter() {
    let x = (MainScreen.width - imgKut.width) / 500;
    let y = (MainScreen.height - imgKut.height) / 2;
    canvasContext.drawImage(imgKut, x, y);
}

function draw() {
    let x = (MainScreen.width - background.width)/2;
    let y = (MainScreen.height - background.height)/1.5;
    canvasContext.drawImage(background, x, y);
    drawLeftCharacter();
    // drawRightCharacter();
    drawMenu();
    drawBtn();
}

draw()
allImages();
background.onload = draw;
imgKut.onload = draw;
drawLeftCharacter();

window.addEventListener("resize", event => {
    setCanvasSize();
    draw();
    drawText();
    drawBtn();
    console.log(BTN1.width)
    console.log(BTN1.height)
});

window.addEventListener('wheel', event => {
    TxtWindow.scroll += event.deltaY/3
    if (TxtWindow.scroll > 0) {
        TxtWindow.scroll = 0;
    } 
    draw()
});

window.addEventListener("click", e => {
    let x = e.clientX;
    let y = e.clientY;
    if (
        BTN1.x < x && x < BTN1.x + BTN1.width
        && BTN1.y < y && y < BTN1.y + BTN1.height
    ) {
        window.location.href = 'losescreen2.html'
    }
});

