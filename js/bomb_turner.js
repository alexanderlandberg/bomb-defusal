let bombFlipped = false;
let cube = document.querySelector(".cube");
let stick = document.querySelector(".stick");

function flipBomb() {
    if (bombFlipped == false) {
        cube.style.transform =
            "translateZ(-100px) translateX(0px) rotateY(180deg)";
        bombFlipped = true;
    } else {
        cube.style.transform =
            "translateZ(-100px) translateX(0px) rotateY(0deg)";
        bombFlipped = false;
    }
}

function turnBomb(top, left) {
    if (!(isNaN(top) || isNaN(left))) {
        let rotY = left - 50;
        let rotX = -(top / 2) * 1.5 + 37.5;

        if (bombFlipped == true) {
            rotY = rotY + 180;
            rotX = -rotX;
        }

        let trans1;
        let trans2;

        if (top > 50) {
            trans1 = top * -0.7 - 200;
        } else {
            trans1 = top * -0.7 - 200;
        }

        if (left > 50) {
            trans2 = left * -2;
        } else {
            trans2 = -left * -2 - 150;
        }

        let transZ = trans1 + trans2;

        if (left == 50 && top == 50) {
            transZ = -100;
        }
        cube.style.transform = `translateZ(${transZ}px) translateX(0px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;

        let top2 = -top + 50;
        let left2 = left - 50;

        if (top2 < 0) {
            stick.style.transform = `rotateZ(${hello(-top2, left2)}deg)`;
        } else if (top2 > 0) {
            stick.style.transform = `rotateZ(${hello(-top2, -left2)}deg)`;
        }

        stick.style.height = yehaw(top2, left2) + "px";
    }
}

function yehaw(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    if (!(isNaN(x) || isNaN(y))) {
        if (x > y) {
            return x + 30;
        } else {
            return y + 30;
        }
    }
}

function hello(x, y) {
    if (!(isNaN(x) || isNaN(y))) {
        let d = Math.atan2(x, y) * (180 / Math.PI);
        if (d < 0) {
            d = 180 - d;
        }
        return Math.ceil(d) - 90;
    }
}

//Make the DIV element draggagle:
dragElement(document.querySelector("#bomb_turner .handle"));

function dragElement(elmnt) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        elmnt.style.transition = "";
        stick.style.transition = "";
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        let valTop = elmnt.offsetTop - pos2;
        let valLeft = elmnt.offsetLeft - pos1;
        let valTop2;
        let valLeft2;
        if (valTop >= -25 && valTop <= 125) {
            valTop2 = valTop;
        }
        if (valLeft >= -25 && valLeft <= 125) {
            valLeft2 = valLeft;
        }

        elmnt.style.top = valTop2 + "px";
        elmnt.style.left = valLeft2 + "px";

        turnBomb(valTop2, valLeft2);
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        turnBomb(50, 50);
        elmnt.style.transition = "top 0.3s ease-out, left 0.3s ease-out";
        stick.style.transition = "height 0.2s linear, width 0.2s linear";
        elmnt.style.top = "50px";
        elmnt.style.left = "50px";
    }
}