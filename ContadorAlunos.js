let numeroDeAlunos = 10;

for (contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)
    
    if (contador === 0) {
        console.log("O numero atual é ZERO");
    } else if (contador % 2 == 0) {
        console.log("O numero " + contador + " é PAR")
    } else {
        console.log("O numero " + contador + " é IMPAR")
    }
}


let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano"];

    for (const aluno of listaDeAlunos) {
        console.log(aluno);    
    }
    listaDeAlunos.forEach(element => {
        console.log(element)
    });

// Laço condicional - WHILE
let numeroDeAlunos = 10;
let contador = 0;

while (contador <= numeroDeAlunos) {
    if (contador === 0) {
        console.log("O numero atual é ZERO")
    } else if (contador % 2 != 0) {
        console.log("O numero " + contador + " é IMPAR")
    } else {
        console.log("O numero " + contador + " é PAR")
    }
    contador++;
}

let numeroDeAlunos = 10;
let contador = 1;

do {
    if (contador === 0) {
        console.log("O numero atual é ZERO")
    } else if (contador % 2 != 0) {
        console.log("O numero " + contador + " é IMPAR")
    } else {
        console.log("O numero " + contador + " é PAR")
    }
    contador++;

} while (contador <= numeroDeAlunos);

//OPERADORES LÓGICOS - TABELA VERDADE

// AND (E)(&&)
//true && true -> true
//true && false -> false
//false && true -> false
//false && false -> false

//OR (OU)(||)
//true || true -> true
//true || false -> true
//false || true -> true
//false || false -> false

//NOT (NÂO)(!)
//!false -> true
//!true -> false