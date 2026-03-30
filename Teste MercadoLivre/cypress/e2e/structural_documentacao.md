# Documentação dos Testes - Elementos Estruturais

## Teste 1: Header fixo no topo
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A página está completamente carregada  
**e:** O header está configurado para ficar fixo  
**então:** O header deve estar visível no topo da página  
**resultado obtido:** O elemento '.nav-header' está visível  
**Grau de importância:** Alto - Verifica a presença e visibilidade do header principal

## Teste 2: Footer presente
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A página está completamente carregada  
**e:** O footer está configurado  
**então:** O footer deve existir na página  
**resultado obtido:** O elemento '.nav-footer' existe  
**Grau de importância:** Médio - Confirma a presença do footer na estrutura da página

## Teste 3: Pagina carrega completamente
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A página está sendo carregada  
**e:** Todos os recursos estão disponíveis  
**então:** O estado do documento deve ser "complete"  
**resultado obtido:** O readyState do documento é igual a 'complete'  
**Grau de importância:** Alto - Garante que a página carrega completamente sem erros