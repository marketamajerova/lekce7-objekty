// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: 'volvo',
    barva: 'bila',
    rokVyroby: 2020,
    spz: '1B2 3456'
};
console.log(auto);
// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)

auto.majitel = {};
auto.majitel.jmeno = 'Marketa';
auto.majitel.prijimani = 'Majerova';
// Přepiš značku na Škoda

auto.znacka = 'Skoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
console.log(auto);

let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijimani;
let znacka = auto.znacka;
let spz = auto.spz;

console.log(majitelka);