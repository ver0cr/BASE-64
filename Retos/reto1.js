/* 
¿Cómo hacemos para imprimir los números pares del 1 al 100?: 
Modificamos la condición para que el bucle corra mientras number sea <= 100. 
*/
console.log("----------RETO 1----------")
// SOLUCIÓN 1
console.log("SOLUCIÓN 1");
let numero = 2;
while (numero <= 100) {
    console.log(numero);
    numero += 2;
}

// SOLUCIÓN 2
console.log("SOLUCIÓN 2");
let numero1 = 1;
while (numero1 <= 100) {
    if (numero1 % 2 == 0) {
        console.log(numero1);
    }
    numero1++;
}

console.log("----------RETO 2----------")
//SOLUCIÓN 1
console.log("SOLUCIÓN 1");
let numero2 = 1;
while (numero2 <= 12) {
    console.log(numero2);
    numero2 += 2;
}

//SOLUCIÓN 2
console.log("SOLUCIÓN 2");
let numero3 = 1;
while (numero3 <= 12) {
    if (numero3 % 2 != 0) {
        console.log(numero3);
    }
    numero3++;
}




// DO WHILE
console.log("DO WHILE");
let i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);

console.log("¿Qué pasa si no se cumple la condición?");
i = 6;
do {
    i++;
    console.log(i);
} while (i < 5);

// FUNCIÓN PROMPT-La viñeta
var edad = parseInt(prompt("Ingrese su edad: "));
console.log(typeof edad);
if (edad < 18) {
    alert("Lo sentimos, no puede ingresar.");
} else {
    alert("Bienvenide, disfrute de este evento.");
}

// DO-WHILE Y REGEX-Regex son los codigos
console.log("Validación de expresiones regulares utilizando estructuras do-while.");
// const patron = /hola/;
// const patron = /^hola/;
const patron = /^hola$/;

var texto = "";
do {
    texto = prompt("Texto: ");
    console.log(patron.test(texto));
} while (!patron.test(texto));

console.log("Texto ingresado correctamente.");


