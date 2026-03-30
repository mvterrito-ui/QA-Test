# Documentação dos Testes - Carousel Principal

## Teste 1: Banner principal visivel
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O carousel principal está carregado  
**e:** Não há erros de carregamento na página  
**então:** O banner principal deve estar visível na tela  
**resultado obtido:** O elemento '.andes-carousel-snapped' primeiro está visível  
**Grau de importância:** Alto - Verifica a funcionalidade básica do carousel na homepage

## Teste 2: Imagem do banner carregada
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O carousel principal está carregado  
**e:** As imagens do carousel estão sendo carregadas  
**então:** A primeira imagem do banner deve existir e ter um atributo src válido  
**resultado obtido:** A imagem '.andes-carousel-snapped img' primeira existe e possui atributo src  
**Grau de importância:** Alto - Garante que as imagens do carousel são carregadas corretamente

## Teste 3: Carousel possui multiplas imagens
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O carousel principal está carregado  
**e:** O carousel contém imagens promocionais  
**então:** O carousel deve ter mais de uma imagem disponível  
**resultado obtido:** Existem mais de 1 imagem no carousel '.andes-carousel-snapped img'  
**Grau de importância:** Médio - Confirma que o carousel tem conteúdo variado para navegação

## Teste 4: Carousel possui botoes de navegacao
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** O carousel principal está carregado  
**e:** A navegação do carousel está habilitada  
**então:** O carousel deve ter botões de navegação disponíveis  
**resultado obtido:** Existem mais de 0 botões no carousel '.andes-carousel-snapped button'  
**Grau de importância:** Médio - Verifica a presença de controles de navegação do usuário