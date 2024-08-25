// Voorbeeld kaarten data
const cards = [
    {
        id: 1,
        name: "Bulbasaur",
        number: "001/165",
        image: "bulbasaur.jpg",  // Alleen de bestandsnaam
        owned: false
    },
    {
        id: 2,
        name: "Ivysaur",
        number: "002/165",
        image: "ivysaur.jpg",  // Alleen de bestandsnaam
        owned: false
    },
    {
        id: 3,
        name: "Charmander",
        number: "003/165",
        image: "charmander.jpg",  // Alleen de bestandsnaam
        owned: false
    }
    // Voeg hier meer kaarten toe...
];

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container');
    
    // Render kaarten
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Dynamisch het pad naar de afbeelding samenstellen
        const imagePath = `images/${card.image}`;  // Dit maakt gebruik van het lokale pad naar de images map

        cardElement.innerHTML = `
            <img src="${imagePath}" alt="${card.name} kaart">
            <h3>${card.name}</h3>
            <p>Kaart Nummer: ${card.number}</p>
            <label>
                <input type="checkbox" ${card.owned ? 'checked' : ''} data-id="${card.id}">
                In mijn collectie
            </label>
        `;
        
        cardsContainer.appendChild(cardElement);
    });

    // Event listener voor checkboxes
    cardsContainer.addEventListener('change', function(event) {
        if (event.target.matches('input[type="checkbox"]')) {
            const cardId = event.target.getAttribute('data-id');
            const card = cards.find(c => c.id == cardId);
            card.owned = event.target.checked;

            // Hier kun je de status opslaan in lokale opslag (LocalStorage)
            localStorage.setItem('pokemonCollection', JSON.stringify(cards));
        }
    });

   
