
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body');
const changeColorBtn = document.querySelector('button[data-start]');
const stopChangeColorBtn = document.querySelector('button[data-stop]');
let timerId = null;

changeColorBtn.addEventListener("click",() => {
    timerId = setInterval(() => { 
        bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
    console.log(timerId);
});
stopChangeColorBtn.addEventListener("click",() => {
    clearInterval(timerId);
});