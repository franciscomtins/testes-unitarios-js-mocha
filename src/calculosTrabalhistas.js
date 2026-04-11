const BONUS_POR_SENIORIDADE = {
    junior: 50,
    pleno:  100,
    senior: 1000,
};

export function atualizarSalarioComBonus(salarioBruto, senioridade) {
    const bonus = BONUS_POR_SENIORIDADE[senioridade];

    if (bonus === undefined) {
        return 0;
    }

    return salarioBruto + bonus;
}