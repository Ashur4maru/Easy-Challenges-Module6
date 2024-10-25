import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let namen = [];
let naam = '';

while(true){      

    naam = await userInput.question('Geef een naam in: ');
    if (naam.toUpperCase() === 'S') {
        break; 
      }
    namen.push(naam);
    
    

}

console.log(namen);

