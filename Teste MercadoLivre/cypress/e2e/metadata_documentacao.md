# Documentação dos Testes - Metadados da Página

## Teste 1: Titulo correto
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A página está completamente carregada  
**e:** O título da página está definido  
**então:** O título da página deve incluir "Mercado Livre"  
**resultado obtido:** O título da página contém "Mercado Livre"  
**Grau de importância:** Alto - Verifica a identificação correta da página nos navegadores

## Teste 2: Canonical URL
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A página está completamente carregada  
**e:** A URL canônica está configurada  
**então:** Deve haver um link canônico com href incluindo 'mercadolivre.com.br'  
**resultado obtido:** O elemento 'link[rel="canonical"]' possui href incluindo 'mercadolivre.com.br'  
**Grau de importância:** Médio - Garante a URL canônica para SEO

## Teste 3: Idioma da pagina e pt-BR
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A página está completamente carregada  
**e:** O idioma da página está definido  
**então:** O atributo lang do elemento html deve ser 'pt-BR'  
**resultado obtido:** O elemento 'html' possui atributo lang igual a 'pt-BR'  
**Grau de importância:** Médio - Confirma a configuração correta do idioma para português brasileiro

## Teste 4: Favicon presente
**Dado que:** O usuário acessa a página inicial do Mercado Livre  
**e:** A página está completamente carregada  
**e:** O favicon está configurado  
**então:** Deve haver pelo menos um link de ícone (favicon) presente  
**resultado obtido:** Existe pelo menos um elemento 'link[rel*="icon"]'  
**Grau de importância:** Baixo - Verifica a presença do ícone da página na aba do navegador