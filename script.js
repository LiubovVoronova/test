"use strict"

const progressBarContainer = document.querySelector('.progress__container');
let progressBarWidth = Math.ceil(innerWidth / 3);
progressBarContainer.style.width = progressBarWidth + 'px';


const progressBarFiller = document.querySelector('.progress__container--fill');
let progressPercentText = document.querySelector('.progress__container__text');
let currentPercent = 0;


// функция, которая принимает в качестве аргумента проценты
function fillingLoop(newPercent) {
    if (currentPercent <= 100 && newPercent > currentPercent) {
        setTimeout(function () {
            currentPercent++;
            progressBarFiller.style.width = currentPercent + '%';
            progressPercentText.textContent = `${currentPercent}%`;
            if (currentPercent <= newPercent) {
                fillingLoop(newPercent);
            }
        }, 20);
    }
}

//TEST
const progressBarButton = document.getElementById('btn');
progressBarButton.addEventListener('click', function () {
    updateProgressBar();
    setInterval(updateProgressBar, 2000);
});

function getNextPercent() {
    let nextPercent = currentPercent + Math.floor(Math.random() * Math.floor(100));
    return nextPercent <= 100 ? nextPercent : 100;
}
function updateProgressBar() {
    fillingLoop(getNextPercent());
}




