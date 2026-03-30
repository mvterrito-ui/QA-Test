# Test Amazon

Este é um projeto de testes automatizados end-to-end (E2E) para o site Amazon Itália, utilizando o framework Cypress. O objetivo é validar funcionalidades da página inicial, como navegação, busca e elementos de interface.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   cd test-amazon
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Uso

### Abrir o Cypress Test Runner

Para abrir a interface gráfica do Cypress e executar os testes interativamente:
```
npm run cy:open
```

### Executar os testes em modo headless

Para executar todos os testes em segundo plano (modo headless):
```
npm run cy:run
```

## Estrutura do Projeto

```
test-amazon/
├── cypress/
│   ├── e2e/                      # Arquivos de teste E2E
│   ├── fixtures/
│   │   └── example.json          # Dados de exemplo para testes
│   └── support/
│       ├── commands.js           # Comandos customizados do Cypress
│       └── e2e.js                # Configurações de suporte para E2E
├── cypress.config.js            # Configuração do Cypress
├── package.json                 # Dependências e scripts do projeto
└── README.md                    # Este arquivo
```

## Testes Incluídos

Os testes serão criados com base no HTML fornecido da homepage da Amazon Itália, cobrindo funcionalidades como:

- Header e navegação
- Funcionalidade de busca
- Elementos estruturais
- E outros componentes identificados no HTML

## Contribuição

Para contribuir com este projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença ISC.