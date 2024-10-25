let puntenLijst = [5, 9, 7, 8, 10, 4];

let totaal = 0;

for(let i = 0; i < puntenLijst.length; i++){
    totaal += puntenLijst[i];
}

console.log(totaal/puntenLijst.length + ' is de gemiddelde. ');
