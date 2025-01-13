# Coindex CLI

Interface de linha de comando escrita em Node.js para verificar preços de moedas.

> [!NOTE]
> Solicitações não autenticadas com chave de API serão armazenadas em cache por 1 minuto. Para mais informações, acesse: [awesomeapi.com.br](https://awesomeapi.com.br/)

## Estrutura do projeto

```
coindex-cli/
├─ bin/
│ └─ coindex.js
├─ src/
│ ├─ commands/
│ ├─ libs/
│ ├─ utils/
│     └─ data/
├─ LICENSE
├─ package-lock.json
├─ package.json
└─ README.md
```

- bin — é onde fica o arquivo principal da coindex CLI.
- src/commands — armazena os arquivos de comandos individuais.
- src/utils — é onde ficam as funções utilitárias que são usadas nos comandos, como formatação de dados.
- src/lib — aqui estão as funcionalidades principais da CLI, como a interação com APIs.

## Como usar?

No diretório raiz do projeto, execute o comando `node .` e, em seguida, instale globalmente com `npm i -g .`

## Comandos

```bash
## Uso básico
# Ver versão
coindex -V

# Ver lista completa de combinações
coindex -c

# Ver lista de nomes (código) das moedas
coindex -l

# Ver documentação de comandos
coindex [comando] -h

## Comandos
# Ver a a última ocorrência das moedas selecionadas
coindex last <currency_code>

# Ver o fechamento dos últimos dias
coindex daily <currency_code> <number_days>

# Ver cotações sequenciais de uma única moeda (intervalo de 1 minuto)
coindex sqm <currency_code> <amount>
```
