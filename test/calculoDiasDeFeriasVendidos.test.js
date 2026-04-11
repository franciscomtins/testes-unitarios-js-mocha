import { calculoDiasDeFeriasVendidos, calculoDiasDeFeriasVendidosV2 } from '../src/calculoDiasDeFeriasVendidos.js';
import assert from 'node:assert';

describe('calculoDiasDeFeriasVendidos', function() {

    describe('cálculo correto do valor a receber', function() {
        const casos = [
            { salario: 3000, dias: 30, esperado: 3000.00 },
            { salario: 3000, dias: 10, esperado: 1000.00 },
            { salario: 3000, dias:  5, esperado:  500.00 },
            { salario: 3000, dias:  1, esperado:  100.00 },
            { salario: 1500, dias: 10, esperado:  500.00 },
            { salario: 1500, dias:  5, esperado:  250.00 },
        ];

        casos.forEach(function({ salario, dias, esperado }) {
            it(`deve retornar ${esperado} para salário ${salario} e ${dias} dias vendidos`, function() {
                assert.strictEqual(calculoDiasDeFeriasVendidos(salario, dias), esperado);
            });
        });

        it('deve arredondar corretamente para 2 casas decimais', function() {
            // 3001 / 30 * 10 = 1000.3333... → 1000.33
            assert.strictEqual(calculoDiasDeFeriasVendidos(3001, 10), 1000.33);
        });
    });

    describe('entradas de salário inválidas', function() {
        it('deve retornar 0 para salário zero', function() {
            assert.strictEqual(calculoDiasDeFeriasVendidos(0, 5), 0);
        });

        it('deve retornar 0 para salário negativo', function() {
            assert.strictEqual(calculoDiasDeFeriasVendidos(-1000, 5), 0);
        });
    });

    describe('entradas de dias inválidas', function() {
        it('deve retornar 0 para 0 dias vendidos', function() {
            assert.strictEqual(calculoDiasDeFeriasVendidos(3000, 0), 0);
        });

        it('deve retornar 0 para dias negativos', function() {
            assert.strictEqual(calculoDiasDeFeriasVendidos(3000, -1), 0);
        });

        it('deve retornar 0 para mais de 30 dias vendidos', function() {
            assert.strictEqual(calculoDiasDeFeriasVendidos(3000, 31), 0);
        });
    });

    describe('entradas de dias inválidas com erro tratado', function() {
        it('deve retornar erro tratato para 0 dias vendidos', function() {
            const salarioMensal = 3000;
            const diasAvender = 0;

            assert.throws(
                function() { calculoDiasDeFeriasVendidosV2(salarioMensal, diasAvender); },
                { message: 'Dias devem estar entre 1 e 30.' }
            );
        });

        it('deve retornar erro tratato para 31 dias vendidos', function() {
            const salarioMensal = 3000;
            const diasAvender = 31;

            assert.throws(
                function() { calculoDiasDeFeriasVendidosV2(salarioMensal, diasAvender); },
                { message: 'Dias devem estar entre 1 e 30.' }
            );
        });
    });
    
});
