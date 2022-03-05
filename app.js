


let boxes = document.querySelectorAll(".box");
let s = document.querySelector('.rgbspan');
let colors = generateRandomColor(6);
let pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
let playbtn = document.querySelector("#PlayAgain");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let boxCount = 6;
let statusText = document.querySelector(".status")
statusText.textContent = "Let's Play!!";


easyBtn.addEventListener("click", function() {

    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "Let's Play!!";

    boxCount = 3;
    this.style.background = "rgb(233, 119, 119)"
    this.style.color = "white"
    hardBtn.style.background = "white";
    hardBtn.style.color = "rgb(233, 119, 119)";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for (let i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function() {
    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "Let's Play!!";

    this.style.background = "rgb(233, 119, 119)"
    this.style.color = "white"
    easyBtn.style.background = "white";
    easyBtn.style.color = "rgb(233, 119, 119)";

    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    console.log(boxes.length)
    for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.background = colors[i];
            boxes[i].style.display = "block";
        

    }
});


playbtn.addEventListener("click", function() {
    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "Let's Play!!";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = pickedColor;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});

for (let i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function() {
        let selectedColor = this.style.background;
        console.log(selectedColor);
        console.log(pickedColor);
        if (selectedColor === pickedColor) {
            win();

        } else {
            loose(this);
        }
    });
}

function win() {
    for (let i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }
    document.querySelector("h1").style.background = pickedColor

    statusText.textContent = "You Won!!";
}


function loose(a) {
    console.log(a);
    a.style.background = "rgb(127,255,212)"
    statusText.textContent = "Try Again!!";
}


function generateRandomColor(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}