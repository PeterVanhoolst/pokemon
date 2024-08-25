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
           {
        id: 3,
        name: "Venusaur",
        number: "003/165",
        image: "venusaur.jpg",
        owned: false
    },
    {
        id: 4,
        name: "Charmander",
        number: "004/165",
        image: "charmander.jpg",
        owned: false
    },
    {
        id: 5,
        name: "Charmeleon",
        number: "005/165",
        image: "charmeleon.jpg",
        owned: false
    },
    {
        id: 6,
        name: "Charizard",
        number: "006/165",
        image: "charizard.jpg",
        owned: false
    },
    {
        id: 7,
        name: "Squirtle",
        number: "007/165",
        image: "squirtle.jpg",
        owned: false
    },
    {
        id: 8,
        name: "Wartortle",
        number: "008/165",
        image: "wartortle.jpg",
        owned: false
    },
    {
        id: 9,
        name: "Blastoise",
        number: "009/165",
        image: "blastoise.jpg",
        owned: false
    },
    {
        id: 10,
        name: "Caterpie",
        number: "010/165",
        image: "caterpie.jpg",
        owned: false
    },
    {
        id: 11,
        name: "Metapod",
        number: "011/165",
        image: "metapod.jpg",
        owned: false
    },
    {
        id: 12,
        name: "Butterfree",
        number: "012/165",
        image: "butterfree.jpg",
        owned: false
    },
    {
        id: 13,
        name: "Weedle",
        number: "013/165",
        image: "weedle.jpg",
        owned: false
    },
    {
        id: 14,
        name: "Kakuna",
        number: "014/165",
        image: "kakuna.jpg",
        owned: false
    },
    {
        id: 15,
        name: "Beedrill",
        number: "015/165",
        image: "beedrill.jpg",
        owned: false
    },
    {
        id: 16,
        name: "Pidgey",
        number: "016/165",
        image: "pidgey.jpg",
        owned: false
    },
    {
        id: 17,
        name: "Pidgeotto",
        number: "017/165",
        image: "pidgeotto.jpg",
        owned: false
    },
    {
        id: 18,
        name: "Pidgeot",
        number: "018/165",
        image: "pidgeot.jpg",
        owned: false
    },
    {
        id: 19,
        name: "Rattata",
        number: "019/165",
        image: "rattata.jpg",
        owned: false
    },
    {
        id: 20,
        name: "Raticate",
        number: "020/165",
        image: "raticate.jpg",
        owned: false
    },
    {
        id: 21,
        name: "Spearow",
        number: "021/165",
        image: "spearow.jpg",
        owned: false
    },
    {
        id: 22,
        name: "Fearow",
        number: "022/165",
        image: "fearow.jpg",
        owned: false
    },
    {
        id: 23,
        name: "Ekans",
        number: "023/165",
        image: "ekans.jpg",
        owned: false
    },
    {
        id: 24,
        name: "Arbok",
        number: "024/165",
        image: "arbok.jpg",
        owned: false
    },
    {
        id: 25,
        name: "Pikachu",
        number: "025/165",
        image: "pikachu.jpg",
        owned: false
    },
    {
        id: 26,
        name: "Raichu",
        number: "026/165",
        image: "raichu.jpg",
        owned: false
    },
    {
        id: 27,
        name: "Sandshrew",
        number: "027/165",
        image: "sandshrew.jpg",
        owned: false
    },
    {
        id: 28,
        name: "Sandslash",
        number: "028/165",
        image: "sandslash.jpg",
        owned: false
    },
    {
        id: 29,
        name: "Nidoran♀",
        number: "029/165",
        image: "nidoran_f.jpg",
        owned: false
    },
    {
        id: 30,
        name: "Nidorina",
        number: "030/165",
        image: "nidorina.jpg",
        owned: false
    },
    {
        id: 31,
        name: "Nidoqueen",
        number: "031/165",
        image: "nidoqueen.jpg",
        owned: false
    },
    {
        id: 32,
        name: "Nidoran♂",
        number: "032/165",
        image: "nidoran_m.jpg",
        owned: false
    },
    {
        id: 33,
        name: "Nidorino",
        number: "033/165",
        image: "nidorino.jpg",
        owned: false
    },
    {
        id: 34,
        name: "Nidoking",
        number: "034/165",
        image: "nidoking.jpg",
        owned: false
    },
    {
        id: 35,
        name: "Clefairy",
        number: "035/165",
        image: "clefairy.jpg",
        owned: false
    },
    {
        id: 36,
        name: "Clefable",
        number: "036/165",
        image: "clefable.jpg",
        owned: false
    },
    {
        id: 37,
        name: "Vulpix",
        number: "037/165",
        image: "vulpix.jpg",
        owned: false
    },
    {
        id: 38,
        name: "Ninetales",
        number: "038/165",
        image: "ninetales.jpg",
        owned: false
    },
    {
        id: 39,
        name: "Jigglypuff",
        number: "039/165",
        image: "jigglypuff.jpg",
        owned: false
    },
    {
        id: 40,
        name: "Wigglytuff",
        number: "040/165",
        image: "wigglytuff.jpg",
        owned: false
    },
    {
        id: 41,
        name: "Zubat",
        number: "041/165",
        image: "zubat.jpg",
        owned: false
    },
    {
        id: 42,
        name: "Golbat",
        number: "042/165",
        image: "golbat.jpg",
        owned: false
    },
    {
        id: 43,
        name: "Oddish",
        number: "043/165",
        image: "oddish.jpg",
        owned: false
    },
    {
        id: 44,
        name: "Gloom",
        number: "044/165",
        image: "gloom.jpg",
        owned: false
    },
    {
        id: 45,
        name: "Vileplume",
        number: "045/165",
        image: "vileplume.jpg",
        owned: false
    },
    {
        id: 46,
        name: "Paras",
        number: "046/165",
        image: "paras.jpg",
        owned: false
    },
    {
        id: 47,
        name: "Parasect",
        number: "047/165",
        image: "parasect.jpg",
        owned: false
    },
    {
        id: 48,
        name: "Venonat",
        number: "048/165",
        image: "venonat.jpg",
        owned: false
    },
    {
        id: 49,
        name: "Venomoth",
        number: "049/165",
        image: "venomoth.jpg",
        owned: false
    },
    {
        id: 50,
        name: "Diglett",
        number: "050/165",
        image: "diglett.jpg",
        owned: false
    },
    {
        id: 51,
        name: "Dugtrio",
        number: "051/165",
        image: "dugtrio.jpg",
        owned: false
    },
    {
        id: 52,
        name: "Meowth",
        number: "052/165",
        image: "meowth.jpg",
        owned: false
    },
    {
        id: 53,
        name: "Persian",
        number: "053/165",
        image: "persian.jpg",
        owned: false
    },
    {
        id: 54,
        name: "Psyduck",
        number: "054/165",
        image: "psyduck.jpg",
        owned: false
    },
    {
        id: 55,
        name: "Golduck",
        number: "055/165",
        image: "golduck.jpg",
        owned: false
    },
    {
        id: 56,
        name: "Mankey",
        number: "056/165",
        image: "mankey.jpg",
        owned: false
    },
    {
        id: 57,
        name: "Primeape",
        number: "057/165",
        image: "primeape.jpg",
        owned: false
    },
    {
        id: 58,
        name: "Growlithe",
        number: "058/165",
        image: "growlithe.jpg",
        owned: false
    },
    {
        id: 59,
        name: "Arcanine",
        number: "059/165",
        image: "arcanine.jpg",
        owned: false
    },
    {
        id: 60,
        name: "Poliwag",
        number: "060/165",
        image: "poliwag.jpg",
        owned: false
    },
    {
        id: 61,
        name: "Poliwhirl",
        number: "061/165",
        image: "poliwhirl.jpg",
        owned: false
    },
    {
        id: 62,
        name: "Poliwrath",
        number: "062/165",
        image: "poliwrath.jpg",
        owned: false
    },
        {
        id: 63,
        name: "Abra",
        number: "063/165",
        image: "abra.jpg",
        owned: false
    },
    {
        id: 64,
        name: "Kadabra",
        number: "064/165",
        image: "kadabra.jpg",
        owned: false
    },
    {
        id: 65,
        name: "Alakazam",
        number: "065/165",
        image: "alakazam.jpg",
        owned: false
    },
    {
        id: 66,
        name: "Machop",
        number: "066/165",
        image: "machop.jpg",
        owned: false
    },
    {
        id: 67,
        name: "Machoke",
        number: "067/165",
        image: "machoke.jpg",
        owned: false
    },
    {
        id: 68,
        name: "Machamp",
        number: "068/165",
        image: "machamp.jpg",
        owned: false
    },
    {
        id: 69,
        name: "Bellsprout",
        number: "069/165",
        image: "bellsprout.jpg",
        owned: false
    },
    {
        id: 70,
        name: "Weepinbell",
        number: "070/165",
        image: "weepinbell.jpg",
        owned: false
    },
    {
        id: 71,
        name: "Victreebel",
        number: "071/165",
        image: "victreebel.jpg",
        owned: false
    },
    {
        id: 72,
        name: "Tentacool",
        number: "072/165",
        image: "tentacool.jpg",
        owned: false
    },
    {
        id: 73,
        name: "Tentacruel",
        number: "073/165",
        image: "tentacruel.jpg",
        owned: false
    },
    {
        id: 74,
        name: "Geodude",
        number: "074/165",
        image: "geodude.jpg",
        owned: false
    },
    {
        id: 75,
        name: "Graveler",
        number: "075/165",
        image: "graveler.jpg",
        owned: false
    },
    {
        id: 76,
        name: "Golem",
        number: "076/165",
        image: "golem.jpg",
        owned: false
    },
    {
        id: 77,
        name: "Ponyta",
        number: "077/165",
        image: "ponyta.jpg",
        owned: false
    },
    {
        id: 78,
        name: "Rapidash",
        number: "078/165",
        image: "rapidash.jpg",
        owned: false
    },
    {
        id: 79,
        name: "Slowpoke",
        number: "079/165",
        image: "slowpoke.jpg",
        owned: false
    },
    {
        id: 80,
        name: "Slowbro",
        number: "080/165",
        image: "slowbro.jpg",
        owned: false
    },
    {
        id: 81,
        name: "Magnemite",
        number: "081/165",
        image: "magnemite.jpg",
        owned: false
    },
    {
        id: 82,
        name: "Magneton",
        number: "082/165",
        image: "magneton.jpg",
        owned: false
    },
    {
        id: 83,
        name: "Farfetch'd",
        number: "083/165",
        image: "farfetchd.jpg",
        owned: false
    },
    {
        id: 84,
        name: "Doduo",
        number: "084/165",
        image: "doduo.jpg",
        owned: false
    },
    {
        id: 85,
        name: "Dodrio",
        number: "085/165",
        image: "dodrio.jpg",
        owned: false
    },
    {
        id: 86,
        name: "Seel",
        number: "086/165",
        image: "seel.jpg",
        owned: false
    },
    {
        id: 87,
        name: "Dewgong",
        number: "087/165",
        image: "dewgong.jpg",
        owned: false
    },
    {
        id: 88,
        name: "Grimer",
        number: "088/165",
        image: "grimer.jpg",
        owned: false
    },
    {
        id: 89,
        name: "Muk",
        number: "089/165",
        image: "muk.jpg",
        owned: false
    },
    {
        id: 90,
        name: "Shellder",
        number: "090/165",
        image: "shellder.jpg",
        owned: false
    },
    {
        id: 91,
        name: "Cloyster",
        number: "091/165",
        image: "cloyster.jpg",
        owned: false
    },
    {
        id: 92,
        name: "Gastly",
        number: "092/165",
        image: "gastly.jpg",
        owned: false
    },
    {
        id: 93,
        name: "Haunter",
        number: "093/165",
        image: "haunter.jpg",
        owned: false
    },
    {
        id: 94,
        name: "Gengar",
        number: "094/165",
        image: "gengar.jpg",
        owned: false
    },
    {
        id: 95,
        name: "Onix",
        number: "095/165",
        image: "onix.jpg",
        owned: false
    },
    {
        id: 96,
        name: "Drowzee",
        number: "096/165",
        image: "drowzee.jpg",
        owned: false
    },
    {
        id: 97,
        name: "Hypno",
        number: "097/165",
        image: "hypno.jpg",
        owned: false
    },
    {
        id: 98,
        name: "Krabby",
        number: "098/165",
        image: "krabby.jpg",
        owned: false
    },
    {
        id: 99,
        name: "Kingler",
        number: "099/165",
        image: "kingler.jpg",
        owned: false
    },
    {
        id: 100,
        name: "Voltorb",
        number: "100/165",
        image: "voltorb.jpg",
        owned: false
    },
    {
        id: 101,
        name: "Electrode",
        number: "101/165",
        image: "electrode.jpg",
        owned: false
    },
    {
        id: 102,
        name: "Exeggcute",
        number: "102/165",
        image: "exeggcute.jpg",
        owned: false
    },
    {
        id: 103,
        name: "Exeggutor",
        number: "103/165",
        image: "exeggutor.jpg",
        owned: false
    },
     {
        id: 104,
        name: "Cubone",
        number: "104/165",
        image: "cubone.jpg",
        owned: false
    },
    {
        id: 105,
        name: "Marowak",
        number: "105/165",
        image: "marowak.jpg",
        owned: false
    },
    {
        id: 106,
        name: "Hitmonlee",
        number: "106/165",
        image: "hitmonlee.jpg",
        owned: false
    }
    {
        id: 107,
        name: "Hitmonchan",
        number: "107/165",
        image: "hitmonchan.jpg",
        owned: false
    },
    {
        id: 108,
        name: "Lickitung",
        number: "108/165",
        image: "lickitung.jpg",
        owned: false
    },
    {
        id: 109,
        name: "Koffing",
        number: "109/165",
        image: "koffing.jpg",
        owned: false
    },
    {
        id: 110,
        name: "Weezing",
        number: "110/165",
        image: "weezing.jpg",
        owned: false
    },
    {
        id: 111,
        name: "Rhyhorn",
        number: "111/165",
        image: "rhyhorn.jpg",
        owned: false
    },
    {
        id: 112,
        name: "Rhydon",
        number: "112/165",
        image: "rhydon.jpg",
        owned: false
    },
        id: 113,
        name: "Chansey",
        number: "113/165",
        image: "chansey.jpg",
        owned: false
    },
    {
        id: 114,
        name: "Tangela",
        number: "114/165",
        image: "tangela.jpg",
        owned: false
    },
    {
        id: 115,
        name: "Tangrowth",
        number: "115/165",
        image: "tangrowth.jpg",
        owned: false
    },
    {
        id: 116,
        name: "Kangaskhan",
        number: "116/165",
        image: "kangaskhan.jpg",
        owned: false
    },
    {
        id: 117,
        name: "Horsea",
        number: "117/165",
        image: "horsea.jpg",
        owned: false
    },
    {
        id: 118,
        name: "Seadra",
        number: "118/165",
        image: "seadra.jpg",
        owned: false
    },
    {
        id: 119,
        name: "Goldeen",
        number: "119/165",
        image: "goldeen.jpg",
        owned: false
    },
    {
        id: 120,
        name: "Seaking",
        number: "120/165",
        image: "seaking.jpg",
        owned: false
    },
    {
        id: 121,
        name: "Staryu",
        number: "121/165",
        image: "staryu.jpg",
        owned: false
    },
    {
        id: 122,
        name: "Starmie",
        number: "122/165",
        image: "starmie.jpg",
        owned: false
    },
    {
        id: 123,
        name: "Mr. Mime",
        number: "123/165",
        image: "mr_mime.jpg",
        owned: false
    },
    {
        id: 124,
        name: "Scyther",
        number: "124/165",
        image: "scyther.jpg",
        owned: false
    },
    {
        id: 125,
        name: "Jynx",
        number: "125/165",
        image: "jynx.jpg",
        owned: false
    },
    {
        id: 126,
        name: "Electabuzz",
        number: "126/165",
        image: "electabuzz.jpg",
        owned: false
    },
{
        id: 115,
        name: "Kangaskhan",
        number: "115/165",
        image: "kangaskhan.jpg",
        owned: false
    },
    {
        id: 116,
        name: "Horsea",
        number: "116/165",
        image: "horsea.jpg",
        owned: false
    },
    {
        id: 117,
        name: "Seadra",
        number: "117/165",
        image: "seadra.jpg",
        owned: false
    },
    {
        id: 118,
        name: "Goldeen",
        number: "118/165",
        image: "goldeen.jpg",
        owned: false
    },
    {
        id: 119,
        name: "Seaking",
        number: "119/165",
        image: "seaking.jpg",
        owned: false
    },
    {
        id: 120,
        name: "Staryu",
        number: "120/165",
        image: "staryu.jpg",
        owned: false
    },
    {
        id: 121,
        name: "Starmie",
        number: "121/165",
        image: "starmie.jpg",
        owned: false
    },
    {
        id: 122,
        name: "Mr. Mime",
        number: "122/165",
        image: "mr_mime.jpg",
        owned: false
    },
    {
        id: 123,
        name: "Scyther",
        number: "123/165",
        image: "scyther.jpg",
        owned: false
    },
    {
        id: 124,
        name: "Jynx",
        number: "124/165",
        image: "jynx.jpg",
        owned: false
    },
    {
        id: 125,
        name: "Electabuzz",
        number: "125/165",
        image: "electabuzz.jpg",
        owned: false
    },
    {
        id: 126,
        name: "Magmar",
        number: "126/165",
        image: "magmar.jpg",
        owned: false
    },
    {
        id: 127,
        name: "Pinsir",
        number: "127/165",
        image: "pinsir.jpg",
        owned: false
    },
    {
        id: 128,
        name: "Tauros",
        number: "128/165",
        image: "tauros.jpg",
        owned: false
    },
    {
        id: 129,
        name: "Magikarp",
        number: "129/165",
        image: "magikarp.jpg",
        owned: false
    },
    {
        id: 130,
        name: "Gyarados",
        number: "130/165",
        image: "gyarados.jpg",
        owned: false
    },
    {
        id: 131,
        name: "Lapras",
        number: "131/165",
        image: "lapras.jpg",
        owned: false
    },
    {
        id: 132,
        name: "Ditto",
        number: "132/165",
        image: "ditto.jpg",
        owned: false
    },
    {
        id: 133,
        name: "Eevee",
        number: "133/165",
        image: "eevee.jpg",
        owned: false
    },
    {
        id: 134,
        name: "Vaporeon",
        number: "134/165",
        image: "vaporeon.jpg",
        owned: false
    },
    {
        id: 135,
        name: "Jolteon",
        number: "135/165",
        image: "jolteon.jpg",
        owned: false
    },
    {
        id: 136,
        name: "Flareon",
        number: "136/165",
        image: "flareon.jpg",
        owned: false
    },
    {
        id: 137,
        name: "Porygon",
        number: "137/165",
        image: "porygon.jpg",
        owned: false
    },
    {
        id: 138,
        name: "Omanyte",
        number: "138/165",
        image: "omanyte.jpg",
        owned: false
    },
    {
        id: 139,
        name: "Omastar",
        number: "139/165",
        image: "omastar.jpg",
        owned: false
    },
    {
        id: 140,
        name: "Kabuto",
        number: "140/165",
        image: "kabuto.jpg",
        owned: false
    },
    {
        id: 141,
        name: "Kabutops",
        number: "141/165",
        image: "kabutops.jpg",
        owned: false
    },
    {
        id: 142,
        name: "Aerodactyl",
        number: "142/165",
        image: "aerodactyl.jpg",
        owned: false
    },
    {
        id: 143,
        name: "Snorlax",
        number: "143/165",
        image: "snorlax.jpg",
        owned: false
    },
    {
        id: 144,
        name: "Articuno",
        number: "144/165",
        image: "articuno.jpg",
        owned: false
    },
    {
        id: 145,
        name: "Zapdos",
        number: "145/165",
        image: "zapdos.jpg",
        owned: false
    },
    {
        id: 146,
        name: "Moltres",
        number: "146/165",
        image: "moltres.jpg",
        owned: false
    },
{
        id: 147,
        name: "Dratini",
        number: "147/165",
        image: "dratini.jpg",
        owned: false
    },
    {
        id: 148,
        name: "Dragonair",
        number: "148/165",
        image: "dragonair.jpg",
        owned: false
    },
    {
        id: 149,
        name: "Dragonite",
        number: "149/165",
        image: "dragonite.jpg",
        owned: false
    },
    {
        id: 150,
        name: "Mewtwo",
        number: "150/165",
        image: "mewtwo.jpg",
        owned: false
    },
    {
        id: 151,
        name: "Mew",
        number: "151/165",
        image: "mew.jpg",
        owned: false
    }
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
   
