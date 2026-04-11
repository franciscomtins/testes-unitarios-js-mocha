export function calculoDiasDeFeriasVendidos(salario, diasFeriasVendidos) {
    if (salario <= 0 || diasFeriasVendidos <= 0 || diasFeriasVendidos > 30) {
        return 0;
    }

    const valorPorDia = salario / 30;
    return Math.round(valorPorDia * diasFeriasVendidos * 100) / 100;
}


export function calculoDiasDeFeriasVendidosV2(salario, diasFeriasVendidos) {
    if (salario <= 0) {
        return 0;
    }

    if (diasFeriasVendidos <= 0 || diasFeriasVendidos > 30) {
        throw new Error('Dias devem estar entre 1 e 30.')
       
    }

    const valorPorDia = salario / 30;
    return Math.round(valorPorDia * diasFeriasVendidos * 100) / 100;
}