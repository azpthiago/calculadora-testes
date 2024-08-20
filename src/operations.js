export function performOperation(operation, num1, num2) {
  switch (operation) {
      case '1':
          return num1 + num2;
      case '2':
          return num1 - num2;
      case '3':
          return num1 * num2;
      case '4':
          return num2 === 0 ? 'Indefinido' : num1 / num2;
      case '5':
          return Math.pow(num1, num2);
      case '6':
          return num1 < 0 ? 'Indefinido' : Math.sqrt(num1);
      default:
          throw new Error('Operação inválida');
  }
}
