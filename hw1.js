// 1)
// function validateINN() {
//     const inn = document.getElementById("inn").value.trim();
//     const pattern = /^(\d{10}|\d{12})$/;
//     if (pattern.test(inn)) {
//         document.getElementById("result").innerHTML = "INN is valid";
//     } else {
//         document.getElementById("result").innerHTML = "INN is invalid";
//     }
// }

// 2)

let box = document.querySelector(".box");
let container = document.querySelector(".container");

let position = 0;
let direction = 1;
let maxPosition = container.offsetWidth - box.offsetWidth;

function moveBox() {
    position += direction;
    box.style.left = `${position}px`;

    if (position >= maxPosition || position <= 0) {
        direction *= -1;
    }

    requestAnimationFrame(moveBox);
}

moveBox();
