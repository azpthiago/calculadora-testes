import { performOperation } from '../src/operations';
import { validateNumber } from '../src/utils';

describe('validateNumber', () => {
    test('retorna o número para uma entrada válida', () => {
        expect(validateNumber('42')).toBe(42);
    });

    test('retorna falso para uma entrada inválida', () => {
        expect(validateNumber('abc')).toBe(false);
        expect(validateNumber('')).toBe(false);
    });
});

describe('performOperation', () => {
    test('realiza soma corretamente', () => {
        expect(performOperation('1', 5, 3)).toBe(8);
    });

    test('realiza subtração corretamente', () => {
        expect(performOperation('2', 5, 3)).toBe(2);
    });

    test('realiza multiplicação corretamente', () => {
        expect(performOperation('3', 5, 3)).toBe(15);
    });

    test('realiza divisão corretamente', () => {
        expect(performOperation('4', 6, 3)).toBe(2);
    });

    test('retorna "Indefinido" para divisão por zero', () => {
        expect(performOperation('4', 6, 0)).toBe('Indefinido');
    });

    test('realiza potenciação corretamente', () => {
        expect(performOperation('5', 2, 3)).toBe(8);
    });

    test('realiza raiz quadrada corretamente', () => {
        expect(performOperation('6', 9)).toBe(3);
    });

    test('retorna "Indefinido" para raiz quadrada de número negativo', () => {
        expect(performOperation('6', -9)).toBe('Indefinido');
    });

    test('lança erro para operação inválida', () => {
        expect(() => performOperation('8', 5, 3)).toThrow('Operação inválida');
    });
});
