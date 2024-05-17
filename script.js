document.getElementById('rojo').addEventListener('click', function() {
    this.textContent = 'Adiós';
});

document.querySelector('h1').style.color = 'orange';

const h1Clickable = document.createElement('h1');
h1Clickable.textContent = '¡Haz clic en mí!';
h1Clickable.style.cursor = 'pointer';
h1Clickable.addEventListener('click', () => {
    h1Clickable.style.color = 'brown';
});
document.body.appendChild(h1Clickable);
