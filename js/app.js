//Boletín Evaluable 2 DOM

// Almacenando el elemento cuyo id es cardContainer en una constante llamada cardContainer
const cardContainer = document.getElementById('cardContainer');

// 1) Eliminar el primer elemento hijo desde el padre
if (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
}

// 2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass"
const redCard = cardContainer.querySelector('.cards.redClass');
if (redCard) {
    cardContainer.removeChild(redCard);
}

// 3) Crear un elemento h1 con vuestro nombre
const h1 = document.createElement('h1');
h1.textContent = 'Tu Nombre'; // Cambia 'Tu Nombre' por tu nombre real

// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la página del Vedruna
const link = document.createElement('a');
link.textContent = 'Vedruna';
link.href = 'https://www.vedruna.org/';

// 5) Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton"
const button = document.createElement('button');
button.id = 'botonJoker';
button.textContent = 'boton';

// 6) Crear un elemento div cuya clase sea "cards greenClass"
const greenCard = document.createElement('div');
greenCard.classList.add('cards', 'greenClass');

// 7) Añadir al elemento div creado anteriormente los h1, enlace y botón creados anteriormente
greenCard.appendChild(h1);
greenCard.appendChild(link);
greenCard.appendChild(button);

// 8) Añadir a cardContainer el div del apartado anterior
cardContainer.appendChild(greenCard);
