# calctrab

Projeto para prática de **testes unitários com JavaScript e Mocha**.

O projeto implementa funções de cálculos trabalhistas e cobre cada cenário com testes automatizados, servindo como base de estudo para escrita e organização de testes com o framework Mocha.

## Funcionalidades

- `atualizarSalarioComBonus(salarioBruto, senioridade)` — retorna o salário acrescido de um bônus fixo por nível de senioridade (junior, pleno ou senior). Retorna `0` para senioridades não reconhecidas.

## Estrutura

```
calctrab/
├── src/
│   └── calculosTrabalhistas.js   # funções de negócio
└── test/
    └── calculosTrabalhistas.test.js  # testes unitários
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
