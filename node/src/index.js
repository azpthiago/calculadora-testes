import readline from 'readline';
import { performOperation } from './operations.js';
import { validateNumber, chooseOperation, getNumber } from './utils.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function calculator() {
    console.clear();
    let operation;
    while (operation !== '7') {
        operation = await chooseOperation(rl);
        let num1, num2;

        if (operation === '7') {
            console.log('Saindo...');
            break;
        }

        if (operation !== '6') {
            num1 = await getNumber(rl, 'Digite o primeiro número: ');
            num2 = await getNumber(rl, 'Digite o segundo número: ');
        } else {
            num1 = await getNumber(rl, 'Digite o número para a raiz quadrada: ');
        }

        const result = performOperation(operation, num1, num2);
        console.log(`O resultado é: ${result}`);
    }
    rl.close();
}

calculator();
