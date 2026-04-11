export function calculoDiasDeFeriasVendidos(salario, diasFeriasVendidos) {
    if (salario <= 0 || diasFeriasVendidos <= 0 || diasFeriasVendidos > 30) {
        return 0;
    }

    const valorPorDia = salario / 30;
    return Math.round(valorPorDia * diasFeriasVendidos * 100) / 100;
}