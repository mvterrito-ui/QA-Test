# Documentação dos Testes - Header e Navegação

## Teste 1: Logo visivel e clicavel
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O header da página está carregado  
**e:** O logo do Mercado Livre está configurado  
**então:** O logo deve estar visível e ter um link válido para o site  
**resultado obtido:** O elemento 'a.nav-logo' está visível, possui href e inclui 'mercadolivre.com.br'  
**Grau de importância:** Alto - Verifica a presença e funcionalidade do logo principal

## Teste 2: Campo de busca visivel
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O header da página está carregado  
**e:** O campo de busca está habilitado  
**então:** O campo de busca deve estar visível e ter um placeholder  
**resultado obtido:** O elemento 'input.nav-search-input' está visível e possui atributo placeholder  
**Grau de importância:** Alto - Garante a disponibilidade da funcionalidade de busca

## Teste 3: Botao de busca visivel
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O header da página está carregado  
**e:** O botão de busca está configurado  
**então:** O botão de busca deve estar visível na tela  
**resultado obtido:** O elemento 'button.nav-search-btn' está visível  
**Grau de importância:** Alto - Verifica a presença do botão para executar buscas

## Teste 4: Link Crie a sua conta
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O header da página está carregado  
**e:** O link de criação de conta está disponível  
**então:** O link "Crie a sua conta" deve estar visível  
**resultado obtido:** O link com texto "Crie a sua conta" está visível  
**Grau de importância:** Médio - Confirma a opção de registro de novos usuários

## Teste 5: Link Entre
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O header da página está carregado  
**e:** O link de login está disponível  
**então:** O link "Entre" deve estar visível  
**resultado obtido:** O link com texto "Entre" está visível  
**Grau de importância:** Médio - Confirma a opção de login para usuários existentes

## Teste 6: Link Compras
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O header da página está carregado  
**e:** O link para compras está disponível  
**então:** O link "Compras" deve estar visível  
**resultado obtido:** O link com texto "Compras" está visível  
**Grau de importância:** Médio - Verifica o acesso à seção de compras do usuário

## Teste 7: Icone do carrinho visivel
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O header da página está carregado  
**e:** O ícone do carrinho está configurado  
**então:** O ícone do carrinho deve estar visível  
**resultado obtido:** O elemento 'a.nav-cart' está visível  
**Grau de importância:** Médio - Confirma a presença do carrinho de compras no header