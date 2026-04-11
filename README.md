# CalculosTrabalhista

Projeto para prática de **testes unitários com JavaScript e Mocha**.

O projeto implementa funções de cálculos trabalhistas e cobre cada cenário com testes automatizados, servindo como base de estudo para escrita e organização de testes com o framework Mocha.

## Funcionalidades

- `atualizarSalarioComBonus(salarioBruto, senioridade)` — retorna o salário acrescido de um bônus fixo por nível de senioridade (junior, pleno ou senior). Retorna `0` para senioridades não reconhecidas.

- `calculoDiasDeFeriasVendidos(salario, diasFeriasVendidos)` — calcula o valor a ser pago por dias de férias vendidos. O valor por dia é calculado dividindo o salário por 30. Retorna `0` para salário ou dias inválidos (≤ 0) ou para dias superiores a 30.

## Estrutura

```
calctrab/
├── src/
│   ├── calculosTrabalhistas.js          # funções de negócio
│   └── calculoDiasDeFeriasVendidos.js   # cálculo de férias vendidas
└── test/
    ├── calculosTrabalhistas.test.js          # testes unitários
    └── calculoDiasDeFeriasVendidos.test.js   # testes de férias vendidas
```

## Dependências

| Pacote  | Versão   | Descrição                                  |
|---------|----------|--------------------------------------------|
| [mocha](https://mochajs.org/) | ^11.7.5  | Framework de testes para Node.js           |

> O módulo `node:assert` utilizado nos testes é nativo do Node.js — não requer instalação.

## Como executar os testes

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes com o Mocha:

```bash
npx mocha
```

## Requisitos

- Node.js (recomendado: versão LTS mais recente)
- npm
