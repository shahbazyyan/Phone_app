const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const circle = document.getElementById("circle");

let rotate = circle.style.transform;

let rotateNum;

function clickUp () {
    upBtn.addEventListener("click", () => {
        rotateNum = rotate + "rotate(-90deg)";
        circle.style.transform = rotateNum;
        rotate = rotateNum;
        });
};

function clickDown () {
    downBtn.addEventListener("click", () => {
        rotateNum = rotate + "rotate(90deg)";
        circle.style.transform = rotateNum;
        rotate = rotateNum;
        });
};

clickUp();
clickDown();

