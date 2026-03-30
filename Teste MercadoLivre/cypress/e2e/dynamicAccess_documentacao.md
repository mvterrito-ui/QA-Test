# Documentação dos Testes - Acesso Rápido (Dynamic Access)

## Teste 1: Secao de acesso rapido visivel
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A seção de acesso rápido está carregada  
**e:** Não há erros de carregamento na página  
**então:** A seção de acesso rápido deve estar visível na tela  
**resultado obtido:** O elemento '.dynamic-access' está visível  
**Grau de importância:** Alto - Verifica a presença da seção de acesso rápido na homepage

## Teste 2: Links de acesso rapido presentes
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A seção de acesso rápido está carregada  
**e:** Os links de acesso rápido estão configurados  
**então:** Deve haver pelo menos 3 links de acesso rápido disponíveis  
**resultado obtido:** Existem pelo menos 3 links em '.dynamic-access a'  
**Grau de importância:** Médio - Confirma a quantidade mínima de opções de acesso rápido

## Teste 3: Cards de acesso rapido com titulo
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A seção de acesso rápido está carregada  
**e:** Os cards de acesso rápido possuem títulos  
**então:** Deve haver pelo menos 1 título nos cards de acesso rápido  
**resultado obtido:** Existem pelo menos 1 elemento com classe contendo "title" em '.dynamic-access'  
**Grau de importância:** Médio - Verifica a presença de títulos nos cards de acesso rápido

## Teste 4: Todos os icones de acesso carregados
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A seção de acesso rápido está carregada  
**e:** Os ícones de acesso rápido estão sendo carregados  
**então:** Deve haver pelo menos 4 ícones de acesso carregados  
**resultado obtido:** Existem pelo menos 4 imagens em '.dynamic-access img'  
**Grau de importância:** Médio - Garante que os ícones visuais do acesso rápido são exibidos