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
        image: "Ivysaur.jpg",  // Alleen de bestandsnaam
        owned: false
    },
    {
        id: 3,
        name: "Venusaur",
        number: "003/165",
        image: "Venusaur.jpg",
        owned: false
    },
    {
        id: 4,
        name: "Charmander",
        number: "004/165",
        image: "Charmander.jpg",
        owned: false
    },
    {
        id: 5,
        name: "Charmeleon",
        number: "005/165",
        image: "Charmeleon.jpg",
        owned: false
    },
    {
        id: 6,
        name: "Charizard",
        number: "006/165",
        image: "Charizard.jpg",
        owned: false
    },
    {
        id: 7,
        name: "Squirtle",
        number: "007/165",
        image: "Squirtle.jpg",
        owned: false
    },
    {
        id: 8,
        name: "Wartortle",
        number: "008/165",
        image: "Wartortle.jpg",
        owned: false
    },
    {
        id: 9,
        name: "Blastoise",
        number: "009/165",
        image: "Blastoise.jpg",
        owned: false
    },
    {
        id: 10,
        name: "Caterpie",
        number: "010/165",
        image: "Caterpie.jpg",
        owned: false
    },
    {
        id: 11,
        name: "Metapod",
        number: "011/165",
        image: "Metapod.jpg",
        owned: false
    },
    {
        id: 12,
        name: "Butterfree",
        number: "012/165",
        image: "Butterfree.jpg",
        owned: false
    },
    {
        id: 13,
        name: "Weedle",
        number: "013/165",
        image: "Weedle.jpg",
        owned: false
    },
    {
        id: 14,
        name: "Kakuna",
        number: "014/165",
        image: "Kakuna.jpg",
        owned: false
    },
    {
        id: 15,
        name: "Beedrill",
        number: "015/165",
        image: "Beedrill.jpg",
        owned: false
    },
    {
        id: 16,
        name: "Pidgey",
        number: "016/165",
        image: "Pidgey.jpg",
        owned: false
    },
    {
        id: 17,
        name: "Pidgeotto",
        number: "017/165",
        image: "Pidgeotto.jpg",
        owned: false
    },
    {
        id: 18,
        name: "Pidgeot",
        number: "018/165",
        image: "Pidgeot.jpg",
        owned: false
    },
    {
        id: 19,
        name: "Rattata",
        number: "019/165",
        image: "Rattata.jpg",
        owned: false
    },
    {
        id: 20,
        name: "Raticate",
        number: "020/165",
        image: "Raticate.jpg",
        owned: false
    },
    {
        id: 21,
        name: "Spearow",
        number: "021/165",
        image: "Spearow.jpg",
        owned: false
    },
    {
        id: 22,
        name: "Fearow",
        number: "022/165",
        image: "Fearow.jpg",
        owned: false
    },
    {
        id: 23,
        name: "Ekans",
        number: "023/165",
        image: "Ekans.jpg",
        owned: false
    },
    {
        id: 24,
        name: "Arbok",
        number: "024/165",
        image: "Arbok.jpg",
        owned: false
    },
    {
        id: 25,
        name: "Pikachu",
        number: "025/165",
        image: "Pikachu.jpg",
        owned: false
    },
    {
        id: 26,
        name: "Raichu",
        number: "026/165",
        image: "Raichu.jpg",
        owned: false
    },
    {
        id: 27,
        name: "Sandshrew",
        number: "027/165",
        image: "Sandshrew.jpg",
        owned: false
    },
    {
        id: 28,
        name: "Sandslash",
        number: "028/165",
        image: "Sandslash.jpg",
        owned: false
    },
    {
        id: 29,
        name: "Nidoran♀",
        number: "029/165",
        image: "Nidoran_f.jpg",
        owned: false
    },
    {
        id: 30,
        name: "Nidorina",
        number: "030/165",
        image: "Nidorina.jpg",
        owned: false
    },
    {
        id: 31,
        name: "Nidoqueen",
        number: "031/165",
        image: "Nidoqueen.jpg",
        owned: false
    },
    {
        id: 32,
        name: "Nidoran♂",
        number: "032/165",
        image: "Nidoran_m.jpg",
        owned: false
    },
    {
        id: 33,
        name: "Nidorino",
        number: "033/165",
        image: "Nidorino.jpg",
        owned: false
    },
    {
        id: 34,
        name: "Nidoking",
        number: "034/165",
        image: "Nidoking.jpg",
        owned: false
    },
    {
        id: 35,
        name: "Clefairy",
        number: "035/165",
        image: "Clefairy.jpg",
        owned: false
    },
    {
        id: 36,
        name: "Clefable",
        number: "036/165",
        image: "Clefable.jpg",
        owned: false
    },
    {
        id: 37,
        name: "Vulpix",
        number: "037/165",
        image: "Vulpix.jpg",
        owned: false
    },
    {
        id: 38,
        name: "Ninetales",
        number: "038/165",
        image: "Ninetales.jpg",
        owned: false
    },
    {
        id: 39,
        name: "Jigglypuff",
        number: "039/165",
        image: "Jigglypuff.jpg",
        owned: false
    },
    {
        id: 40,
        name: "Wigglytuff",
        number: "040/165",
        image: "Wigglytuff.jpg",
        owned: false
    },
    {
        id: 41,
        name: "Zubat",
        number: "041/165",
        image: "Zubat.jpg",
        owned: false
    },
    {
        id: 42,
        name: "Golbat",
        number: "042/165",
        image: "Golbat.jpg",
        owned: false
    },
    {
        id: 43,
        name: "Oddish",
        number: "043/165",
        image: "Oddish.jpg",
        owned: false
    },
    {
        id: 44,
        name: "Gloom",
        number: "044/165",
        image: "Gloom.jpg",
        owned: false
    },
    {
        id: 45,
        name: "Vileplume",
        number: "045/165",
        image: "Vileplume.jpg",
        owned: false
    },
    {
        id: 46,
        name: "Paras",
        number: "046/165",
        image: "Paras.jpg",
        owned: false
    },
    {
        id: 47,
        name: "Parasect",
        number: "047/165",
        image: "Parasect.jpg",
        owned: false
    },
    {
        id: 48,
        name: "Venonat",
        number: "048/165",
        image: "Venonat.jpg",
        owned: false
    },
    {
        id: 49,
        name: "Venomoth",
        number: "049/165",
        image: "Venomoth.jpg",
        owned: false
    },
    {
        id: 50,
        name: "Diglett",
        number: "050/165",
        image: "Diglett.jpg",
        owned: false
    },
    {
        id: 51,
        name: "Dugtrio",
        number: "051/165",
        image: "Dugtrio.jpg",
        owned: false
    },
    {
        id: 52,
        name: "Meowth",
        number: "052/165",
        image: "Meowth.jpg",
        owned: false
    },
    {
        id: 53,
        name: "Persian",
        number: "053/165",
        image: "Persian.jpg",
        owned: false
    },
    {
        id: 54,
        name: "Psyduck",
        number: "054/165",
        image: "Psyduck.jpg",
        owned: false
    },
    {
        id: 55,
        name: "Golduck",
        number: "055/165",
        image: "Golduck.jpg",
        owned: false
    },
    {
        id: 56,
        name: "Mankey",
        number: "056/165",
        image: "Mankey.jpg",
        owned: false
    },
    {
        id: 57,
        name: "Primeape",
        number: "057/165",
        image: "Primeape.jpg",
        owned: false
    },
    {
        id: 58,
        name: "Growlithe",
        number: "058/165",
        image: "Growlithe.jpg",
        owned: false
    },
    {
        id: 59,
        name: "Arcanine",
        number: "059/165",
        image: "Arcanine.jpg",
        owned: false
    },
    {
        id: 60,
        name: "Poliwag",
        number: "060/165",
        image: "Poliwag.jpg",
        owned: false
    },
    {
        id: 61,
        name: "Poliwhirl",
        number: "061/165",
        image: "Poliwhirl.jpg",
        owned: false
    },
    {
        id: 62,
        name: "Poliwrath",
        number: "062/165",
        image: "Poliwrath.jpg",
        owned: false
    },
        {
        id: 63,
        name: "Abra",
        number: "063/165",
        image: "Abra.jpg",
        owned: false
    },
    {
        id: 64,
        name: "Kadabra",
        number: "064/165",
        image: "Kadabra.jpg",
        owned: false
    },
    {
        id: 65,
        name: "Alakazam",
        number: "065/165",
        image: "Alakazam.jpg",
        owned: false
    },
    {
        id: 66,
        name: "Machop",
        number: "066/165",
        image: "Machop.jpg",
        owned: false
    },
    {
        id: 67,
        name: "Machoke",
        number: "067/165",
        image: "Machoke.jpg",
        owned: false
    },
    {
        id: 68,
        name: "Machamp",
        number: "068/165",
        image: "Machamp.jpg",
        owned: false
    },
    {
        id: 69,
        name: "Bellsprout",
        number: "069/165",
        image: "Bellsprout.jpg",
        owned: false
    },
    {
        id: 70,
        name: "Weepinbell",
        number: "070/165",
        image: "Weepinbell.jpg",
        owned: false
    },
    {
        id: 71,
        name: "Victreebel",
        number: "071/165",
        image: "Victreebel.jpg",
        owned: false
    },
    {
        id: 72,
        name: "Tentacool",
        number: "072/165",
        image: "Tentacool.jpg",
        owned: false
    },
    {
        id: 73,
        name: "Tentacruel",
        number: "073/165",
        image: "Tentacruel.jpg",
        owned: false
    },
    {
        id: 74,
        name: "Geodude",
        number: "074/165",
        image: "Geodude.jpg",
        owned: false
    },
    {
        id: 75,
        name: "Graveler",
        number: "075/165",
        image: "Graveler.jpg",
        owned: false
    },
    {
        id: 76,
        name: "Golem",
        number: "076/165",
        image: "Golem.jpg",
        owned: false
    },
    {
        id: 77,
        name: "Ponyta",
        number: "077/165",
        image: "Ponyta.jpg",
        owned: false
    },
    {
        id: 78,
        name: "Rapidash",
        number: "078/165",
        image: "Rapidash.jpg",
        owned: false
    },
    {
        id: 79,
        name: "Slowpoke",
        number: "079/165",
        image: "Slowpoke.jpg",
        owned: false
    },
    {
        id: 80,
        name: "Slowbro",
        number: "080/165",
        image: "Slowbro.jpg",
        owned: false
    },
    {
        id: 81,
        name: "Magnemite",
        number: "081/165",
        image: "Magnemite.jpg",
        owned: false
    },
    {
        id: 82,
        name: "Magneton",
        number: "082/165",
        image: "Magneton.jpg",
        owned: false
    },
    {
        id: 83,
        name: "Farfetch'd",
        number: "083/165",
        image: "Farfetchd.jpg",
        owned: false
    },
    {
        id: 84,
        name: "Doduo",
        number: "084/165",
        image: "Doduo.jpg",
        owned: false
    },
    {
        id: 85,
        name: "Dodrio",
        number: "085/165",
        image: "Dodrio.jpg",
        owned: false
    },
    {
        id: 86,
        name: "Seel",
        number: "086/165",
        image: "Seel.jpg",
        owned: false
    },
    {
        id: 87,
        name: "Dewgong",
        number: "087/165",
        image: "Dewgong.jpg",
        owned: false
    },
    {
        id: 88,
        name: "Grimer",
        number: "088/165",
        image: "Grimer.jpg",
        owned: false
    },
    {
        id: 89,
        name: "Muk",
        number: "089/165",
        image: "Muk.jpg",
        owned: false
    },
    {
        id: 90,
        name: "Shellder",
        number: "090/165",
        image: "Shellder.jpg",
        owned: false
    },
    {
        id: 91,
        name: "Cloyster",
        number: "091/165",
        image: "Cloyster.jpg",
        owned: false
    },
    {
        id: 92,
        name: "Gastly",
        number: "092/165",
        image: "Gastly.jpg",
        owned: false
    },
    {
        id: 93,
        name: "Haunter",
        number: "093/165",
        image: "Haunter.jpg",
        owned: false
    },
    {
        id: 94,
        name: "Gengar",
        number: "094/165",
        image: "Gengar.jpg",
        owned: false
    },
    {
        id: 95,
        name: "Onix",
        number: "095/165",
        image: "Onix.jpg",
        owned: false
    },
    {
        id: 96,
        name: "Drowzee",
        number: "096/165",
        image: "Drowzee.jpg",
        owned: false
    },
    {
        id: 97,
        name: "Hypno",
        number: "097/165",
        image: "Hypno.jpg",
        owned: false
    },
    {
        id: 98,
        name: "Krabby",
        number: "098/165",
        image: "Krabby.jpg",
        owned: false
    },
    {
        id: 99,
        name: "Kingler",
        number: "099/165",
        image: "Kingler.jpg",
        owned: false
    },
    {
        id: 100,
        name: "Voltorb",
        number: "100/165",
        image: "Voltorb.jpg",
        owned: false
    },
    {
        id: 101,
        name: "Electrode",
        number: "101/165",
        image: "Electrode.jpg",
        owned: false
    },
    {
        id: 102,
        name: "Exeggcute",
        number: "102/165",
        image: "Exeggcute.jpg",
        owned: false
    },
    {
        id: 103,
        name: "Exeggutor",
        number: "103/165",
        image: "Exeggutor.jpg",
        owned: false
    },
     {
        id: 104,
        name: "Cubone",
        number: "104/165",
        image: "Cubone.jpg",
        owned: false
    },
    {
        id: 105,
        name: "Marowak",
        number: "105/165",
        image: "Marowak.jpg",
        owned: false
    },
    {
        id: 106,
        name: "Hitmonlee",
        number: "106/165",
        image: "Hitmonlee.jpg",
        owned: false
    },
    {
        id: 107,
        name: "Hitmonchan",
        number: "107/165",
        image: "Hitmonchan.jpg",
        owned: false
    },
    {
        id: 108,
        name: "Lickitung",
        number: "108/165",
        image: "Lickitung.jpg",
        owned: false
    },
    {
        id: 109,
        name: "Koffing",
        number: "109/165",
        image: "Koffing.jpg",
        owned: false
    },
    {
        id: 110,
        name: "Weezing",
        number: "110/165",
        image: "Weezing.jpg",
        owned: false
    },
    {
        id: 111,
        name: "Rhyhorn",
        number: "111/165",
        image: "Rhyhorn.jpg",
        owned: false
    },
    {
        id: 112,
        name: "Rhydon",
        number: "112/165",
        image: "Rhydon.jpg",
        owned: false
    },
    {
        id: 113,
        name: "Chansey",
        number: "113/165",
        image: "Chansey.jpg",
        owned: false
    },
    {
        id: 114,
        name: "Tangela",
        number: "114/165",
        image: "Tangela.jpg",
        owned: false
    },
    {
        id: 115,
        name: "Kangaskhan",
        number: "115/165",
        image: "Kangaskhan.jpg",
        owned: false
    },
    {
        id: 116,
        name: "Horsea",
        number: "116/165",
        image: "Horsea.jpg",
        owned: false
    },
    {
        id: 117,
        name: "Seadra",
        number: "117/165",
        image: "Seadra.jpg",
        owned: false
    },
    {
        id: 118,
        name: "Goldeen",
        number: "118/165",
        image: "Goldeen.jpg",
        owned: false
    },
    {
        id: 119,
        name: "Seaking",
        number: "119/165",
        image: "Seaking.jpg",
        owned: false
    },
    {
        id: 120,
        name: "Staryu",
        number: "120/165",
        image: "Staryu.jpg",
        owned: false
    },
    {
        id: 121,
        name: "Starmie",
        number: "121/165",
        image: "Starmie.jpg",
        owned: false
    },
    {
        id: 122,
        name: "Mr. Mime",
        number: "122/165",
        image: "Mr._Mime.jpg",
        owned: false
    },
    {
        id: 123,
        name: "Scyther",
        number: "123/165",
        image: "Scyther.jpg",
        owned: false
    },
    {
        id: 124,
        name: "Jynx",
        number: "124/165",
        image: "Jynx.jpg",
        owned: false
    },
    {
        id: 125,
        name: "Electabuzz",
        number: "125/165",
        image: "Electabuzz.jpg",
        owned: false
    },
    {
        id: 126,
        name: "Magmar",
        number: "126/165",
        image: "Magmar.jpg",
        owned: false
    },
    {
        id: 127,
        name: "Pinsir",
        number: "127/165",
        image: "Pinsir.jpg",
        owned: false
    },
    {
        id: 128,
        name: "Tauros",
        number: "128/165",
        image: "Tauros.jpg",
        owned: false
    },
    {
        id: 129,
        name: "Magikarp",
        number: "129/165",
        image: "Magikarp.jpg",
        owned: false
    },
    {
        id: 130,
        name: "Gyarados",
        number: "130/165",
        image: "Gyarados.jpg",
        owned: false
    },
    {
        id: 131,
        name: "Lapras",
        number: "131/165",
        image: "Lapras.jpg",
        owned: false
    },
    {
        id: 132,
        name: "Ditto",
        number: "132/165",
        image: "Ditto.jpg",
        owned: false
    },
    {
        id: 133,
        name: "Eevee",
        number: "133/165",
        image: "Eevee.jpg",
        owned: false
    },
    {
        id: 134,
        name: "Vaporeon",
        number: "134/165",
        image: "Vaporeon.jpg",
        owned: false
    },
    {
        id: 135,
        name: "Jolteon",
        number: "135/165",
        image: "Jolteon.jpg",
        owned: false
    },
    {
        id: 136,
        name: "Flareon",
        number: "136/165",
        image: "Flareon.jpg",
        owned: false
    },
    {
        id: 137,
        name: "Porygon",
        number: "137/165",
        image: "Porygon.jpg",
        owned: false
    },
    {
        id: 138,
        name: "Omanyte",
        number: "138/165",
        image: "Omanyte.jpg",
        owned: false
    },
    {
        id: 139,
        name: "Omastar",
        number: "139/165",
        image: "Omastar.jpg",
        owned: false
    },
    {
        id: 140,
        name: "Kabuto",
        number: "140/165",
        image: "Kabuto.jpg",
        owned: false
    },
    {
        id: 141,
        name: "Kabutops",
        number: "141/165",
        image: "Kabutops.jpg",
        owned: false
    },
    {
        id: 142,
        name: "Aerodactyl",
        number: "142/165",
        image: "Aerodactyl.jpg",
        owned: false
    },
    {
        id: 143,
        name: "Snorlax",
        number: "143/165",
        image: "Snorlax.jpg",
        owned: false
    },
    {
        id: 144,
        name: "Articuno",
        number: "144/165",
        image: "Articuno.jpg",
        owned: false
    },
    {
        id: 145,
        name: "Zapdos",
        number: "145/165",
        image: "Zapdos.jpg",
        owned: false
    },
    {
        id: 146,
        name: "Moltres",
        number: "146/165",
        image: "Moltres.jpg",
        owned: false
    },
{
        id: 147,
        name: "Dratini",
        number: "147/165",
        image: "Dratini.jpg",
        owned: false
    },
    {
        id: 148,
        name: "Dragonair",
        number: "148/165",
        image: "Dragonair.jpg",
        owned: false
    },
    {
        id: 149,
        name: "Dragonite",
        number: "149/165",
        image: "Dragonite.jpg",
        owned: false
    },
    {
        id: 150,
        name: "Mewtwo",
        number: "150/165",
        image: "Mewtwo.jpg",
        owned: false
    },
    {
        id: 151,
        name: "Mew",
        number: "151/165",
        image: "Mew.jpg",
        owned: false
    },
{
        id: 152,
        name: "Dome Fossil",
        number: "152/207",
        image: "dome_fossil.jpg",
        owned: false
    },
    {
        id: 153,
        name: "Helix Fossil",
        number: "153/207",
        image: "helix_fossil.jpg",
        owned: false
    // Voeg hier meer kaarten toe...
    },
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
// Laad collectie uit LocalStorage
    if (localStorage.getItem('pokemonCollection')) {
        const savedCards = JSON.parse(localStorage.getItem('pokemonCollection'));
        savedCards.forEach(savedCard => {
            const checkbox = document.querySelector(`input[data-id="${savedCard.id}"]`);
            if (checkbox) {
                checkbox.checked = savedCard.owned;
            }
        });
    }
});
   
