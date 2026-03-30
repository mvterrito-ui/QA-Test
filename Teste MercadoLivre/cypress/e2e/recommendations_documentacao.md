# Documentação dos Testes - Seção de Recomendações

## Teste 1: Secao de recomendacoes existe
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A seção de recomendações está carregada  
**e:** Não há erros de carregamento na página  
**então:** Deve haver uma seção de recomendações ou carousel visível  
**resultado obtido:** Existe pelo menos um elemento 'section.discovery' ou '.andes-carousel-snapped'  
**Grau de importância:** Alto - Verifica a presença da seção de recomendações na homepage

## Teste 2: Produtos recomendados com imagem
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A seção de recomendações está carregada  
**e:** Os produtos recomendados possuem imagens  
**então:** Deve haver pelo menos uma imagem nos produtos recomendados  
**resultado obtido:** Existem mais de 0 imagens em '.andes-carousel-snapped img'  
**Grau de importância:** Médio - Garante que os produtos recomendados têm imagens visuais