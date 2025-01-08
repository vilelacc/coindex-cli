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

* bin — é onde fica o arquivo principal da coindex CLI. 
* src/commands — armazena os arquivos de comandos individuais. 
* src/utils — é onde ficam as funções utilitárias que são usadas nos comandos, como formatação de dados.
* src/lib — Aqui estão as funcionalidades principais da CLI, como a interação com APIs.