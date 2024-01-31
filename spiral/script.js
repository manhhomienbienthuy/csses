const words = 'spiral text animation';
const ANIMATION_DURATION = 4000;

const characters = words.split('').forEach((char, i) => {
    const createDiv = (offset) => {
        const div = document.createElement('div');
        div.innerText = char;
        div.classList.add('character');
        div.style.animationDelay = `${i * (ANIMATION_DURATION / 16) - offset}ms`;
        return div;
    };

    document.getElementById('spiral1').append(createDiv(0));
    document.getElementById('spiral2').append(createDiv(-1 * (ANIMATION_DURATION / 2)));
})
