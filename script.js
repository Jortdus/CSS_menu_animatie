
const button = document.getElementById("button");
var div = document.querySelectorAll(".div");

var slide = () => {
    div[0].classList.toggle('div--slide');
    div[1].classList.toggle('div--slide');
    div[2].classList.toggle('div--slide');
}

button.addEventListener('click', slide);