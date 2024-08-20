export function validateNumber(input) {
  const number = parseFloat(input);
  if (isNaN(number)) {
      return false;
  }
  return number;
}

export function chooseOperation(rl) {
  return new Promise((resolve) => {
      rl.question(
          `Escolha a operação: \n[1. Soma]\n[2. Subtração]\n[3. Multiplicação]\n[4. Divisão]\n[5. Potenciação]\n[6. Raiz Quadrada]\n[7. Sair]\n[Escolha uma opção (1-7)]: `,
          (op) => {
              if (!['1', '2', '3', '4', '5', '6', '7'].includes(op)) {
                  console.log('Erro: Operação inválida. Por favor, escolha uma opção entre 1 e 7.');
                  resolve(chooseOperation(rl));
              } else {
                  resolve(op);
              }
          }
      );
  });
}

export function getNumber(rl, promptText) {
  return new Promise((resolve) => {
      rl.question(promptText, (input) => {
          const number = validateNumber(input);
          if (number !== false) {
              resolve(number);
          } else {
              resolve(getNumber(rl, promptText));
          }
      });
  });
}
