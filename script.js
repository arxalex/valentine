const text = document.getElementById('text');
const mail = document.getElementById('mail');
const button = document.getElementById('button');
const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('text');

function setMailText() {
    console.log(paramValue);
    if(paramValue != null) {
        text.textContent = paramValue
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.opacity = Math.random();
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 10000); // Remove the heart after 5 seconds
}

setMailText();
setInterval(createHeart, 500); // Create a heart every second

function openMessage(){
    mail.style.transform = `rotateY(0deg)`;
    setTimeout(() => {
        text.style.opacity = "1"
    }, 1000);
    button.remove();
}