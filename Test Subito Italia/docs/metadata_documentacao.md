# Documentação dos Testes - Metadata

## Teste 1: Dado que o usuário acessa a página inicial
Quando verifica o título da página
Então deve incluir "Subito"
Resultado obtido: Título contém "Subito".
Grau de importancia: Alto

## Teste 2: Dado que o usuário acessa a página inicial
Quando verifica a URL canônica
Então deve incluir subito.it
Resultado obtido: Link canonical com href correto.
Grau de importancia: Alto

## Teste 3: Dado que o usuário acessa a página inicial
Quando verifica o idioma
Então deve ser italiano
Resultado obtido: Atributo lang="it".
Grau de importancia: Alto

## Teste 4: Dado que o usuário acessa a página inicial
Quando verifica o favicon
Então deve existir
Resultado obtido: Link rel="icon" presente.
Grau de importancia: Médio