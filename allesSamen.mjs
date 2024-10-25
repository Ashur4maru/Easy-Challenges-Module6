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

for(let i = 0; i < namen.length;i++){
    console.log(namen[i] + ', je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB!!!')

}