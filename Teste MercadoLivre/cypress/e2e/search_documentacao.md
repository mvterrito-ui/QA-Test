# Documentação dos Testes - Funcionalidade de Busca

## Teste 1: Digitar no campo de busca
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O campo de busca está visível e habilitado  
**e:** O usuário digita "iPhone 15" no campo  
**então:** O campo deve conter o valor digitado  
**resultado obtido:** O elemento 'input.nav-search-input' possui valor 'iPhone 15'  
**Grau de importância:** Alto - Verifica a funcionalidade básica de entrada de texto na busca

## Teste 2: Campo de busca aceita texto e limpa
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O campo de busca está visível e habilitado  
**e:** O usuário digita "Notebook" e depois limpa o campo  
**então:** O campo deve aceitar o texto e poder ser limpo completamente  
**resultado obtido:** O campo aceita "Notebook" e fica vazio após clear()  
**Grau de importância:** Alto - Garante que o campo de busca permite edição e limpeza

## Teste 3: Campo de busca vazio nao redireciona
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O campo de busca está vazio  
**e:** O usuário clica no botão de busca  
**então:** A página não deve redirecionar ou mudar de URL  
**resultado obtido:** A URL permanece incluindo 'mercadolivre.com.br' após clique  
**Grau de importância:** Médio - Previne buscas vazias que poderiam causar erros

## Teste 4: Formulario de busca possui action correta
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O formulário de busca está configurado  
**e:** A ação do formulário está definida  
**então:** O formulário deve ter um action que inclui "search"  
**resultado obtido:** O elemento 'form.nav-search' possui atributo action incluindo 'search'  
**Grau de importância:** Alto - Verifica a configuração correta do formulário de busca

## Teste 5: Input de busca possui name as_word
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O campo de busca está configurado  
**e:** O name do input está definido  
**então:** O input deve ter name igual a "as_word"  
**resultado obtido:** O elemento 'input.nav-search-input' possui atributo name 'as_word'  
**Grau de importância:** Médio - Confirma a configuração correta do parâmetro de busca