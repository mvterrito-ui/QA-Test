# Documentazione dei Test - Ricerca

## Test 1: Dato che l'utente accede alla pagina iniziale
Quando verifica la presenza del campo di ricerca
Allora il campo deve esistere
Risultato ottenuto: Input con placeholder "Cosa cerchi?" visibile.
Grado di importanza: Alto

## Test 2: Dato che l'utente accede alla pagina iniziale
Quando digita nel campo di ricerca
Allora il valore deve essere inserito
Risultato ottenuto: Campo accetta digitazione e mantiene valore "auto".
Grado di importanza: Alto

## Test 3: Dato che l'utente accede alla pagina iniziale
Quando pulisce il campo di ricerca
Allora il campo deve essere vuoto
Risultato ottenuto: Campo pulito dopo clear().
Grado di importanza: Medio

## Test 4: Dato che l'utente accede alla pagina iniziale
Quando invia ricerca vuota
Allora deve prevenire o rimanere nella pagina
Risultato ottenuto: URL rimane nella home dopo submit.
Grado di importanza: Medio

## Test 5: Dato che l'utente accede alla pagina iniziale
Quando verifica il modulo di ricerca
Allora il modulo deve esistere
Risultato ottenuto: Elemento form presente.
Grado di importanza: Alto