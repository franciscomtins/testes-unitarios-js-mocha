import { atualizarSalarioComBonus } from '../src/calculosTrabalhistas.js';
import assert from 'node:assert';

describe('atualizarSalarioComBonus', function() {

    const casos = [
        { senioridade: 'junior', salario: 1000, esperado: 1050 },
        { senioridade: 'junior', salario: 2000, esperado: 2050 },
        { senioridade: 'pleno',  salario: 1000, esperado: 1100 },
        { senioridade: 'pleno',  salario: 3000, esperado: 3100 },
        { senioridade: 'senior', salario: 1000, esperado: 2000 },
        { senioridade: 'senior', salario: 5000, esperado: 6000 },
    ];

    casos.forEach(function({ senioridade, salario, esperado }) {
        it(`deve retornar ${esperado} para funcionário ${senioridade} com salário de ${salario}`, function() {
            assert.strictEqual(atualizarSalarioComBonus(salario, senioridade), esperado);
        });
    });

    it('deve retornar 0 para senioridade não reconhecida', function() {
        assert.strictEqual(atualizarSalarioComBonus(1000, 'estagiario'), 0);
    });
});