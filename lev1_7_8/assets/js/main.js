//unshift() fügt neune Elemente zum Anfang eines Arreays hinzu

const deutscheGerichte =["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];

console.log(deutscheGerichte);

deutscheGerichte.unshift("Bremer Knipp", "Pinkel mit Grünkohl", " Linseneintopf");

console.log(deutscheGerichte);

//shift() entfernt das erste Element eines Arrays
const nichtGut = [];

nichtGut.push(deutscheGerichte.shift())
console.log(nichtGut);

nichtGut.push(deutscheGerichte.shift())
console.log(nichtGut);

nichtGut.push(deutscheGerichte.shift())
console.log(nichtGut);

console.log(deutscheGerichte);
