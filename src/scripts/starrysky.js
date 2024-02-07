Array.prototype.mySample = function() {
    return this[Math.floor(Math.random() * this.length)];
}

function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function starCreator(background) {
    const star = document.createElement('div');
    const classes = ['star', 'small', 'medium', 'large'];
    star.classList.add(classes.mySample());
    star.style.left = `${Math.floor(Math.random() * background.clientWidth)}px`;
    star.style.top = `${Math.floor(Math.random() * background.clientHeight)}px`;
    background.appendChild(star);
}

const numStars = 300;
const backgroundContainer = document.getElementById('bg');

for (let i = 0; i < numStars; i++) {
    starCreator(backgroundContainer);
}