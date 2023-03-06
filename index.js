
// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

// 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

  let edad = Number(prompt("Ingrese su edad: "));
if (edad >= 18) {
console.log("Tiene la edad suficiente para conducir");
} else {
let añosFaltantes = 18 -  edad;
console.log(`Debe esperar ${añosFaltantes} años para conducir`);
}
//    ```sh
//    Ingrese su edad: 30
//    Tiene la edad suficiente para conducir.   


//    Ingrese su edad:15
//    Te faltan 3 años para conducir.


// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación,registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

let myAge = 25;
let yourAge = Number(prompt("Ingrese su edad:"));

if (myAge > yourAge) {
  console.log("Soy mayor que tú");
} else if (myAge < yourAge) {
    let faltan= yourAge - myAge;
  console.log(`Eres ${faltan} mayor que yo`);
} 
//    ```sh
//    Ingrese su edad: 30
//    Eres 5 años mayor que yo.
//    ```

// 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

//    - Usando if else
let a= 4
let b= 3
if (a>b) {
    console.log('4 es mayor que 3');
} else {
    
    console.log('3 es menor que 4');
}
//    - operador ternario.

let ac=(4>3);
ac
    ?console.log('4 es mayor que 3')
    :console.log('3 es menor que 4');

//    ```js
//    let a = 4;
//    let b = 3;
//    ```

//    ```sh
//      4 es mayor que 3
//    ```

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
let numero = 3;

if (numero % 2 === 0) {
  console.log(numero + " es par");
} else {
  console.log(numero + " no es par");
}


//    ```sh
//    Ingrese un número: 2
//    2 es un número par

//    Ingrese un número: 9
//    9 es un número impar
//    ```

// ### Ejercicios: Nivel 2

// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F
let puntaje = 75;
if (puntaje >= 80 && puntaje <= 100) {
  console.log("Calificación: A");
} else if (puntaje >= 70 && puntaje <= 89) {
  console.log("Calificación: B");
} else if (puntaje >= 60 && puntaje <= 69) {
  console.log("Calificación: C");
} else if (puntaje >= 50 && puntaje <= 59) {
  console.log("Calificación: D");
} else if (puntaje >= 0 && puntaje <= 49) {
  console.log("Calificación: F");
} else {
  console.log("Puntaje inválido");
}

// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano.
//    Si la entrada del usuario es :

//    - Septiembre, Octubre o Noviembre, la temporada es Otoño.
//    - Diciembre, Enero o Febrero, la temporada es Invierno.
//    - Marzo, Abril o Mayo, la temporada es Primavera
//    - Junio, Julio o Agosto, la temporada es Verano
let mes = "Octubre";
if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
  console.log("La temporada es Invierno");
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
  console.log("La temporada es Primavera");
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
  console.log("La temporada es Verano");
} else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
  console.log("La temporada es Otoño");
} else {
  console.log("El mes ingresado es inválido");
}

// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

// ```sh
//     ¿Qué día es hoy? Sábado
//     El sábado es fin de semana.

//     ¿Qué día es hoy? sábAdo
//     El sábado es fin de semana.

//     ¿Qué día es hoy? Viernes
//     El viernes es un día laborable.

//     ¿Qué día es hoy? ViErNes
//     El viernes es un día laborable.
// ```
let dia = "lunes";

if (dia === "sábado" || dia === "domingo") {
  console.log("El día es fin de semana");
} else {
  console.log("El día es laborable");
}

// ### Ejercicios: Nivel 3

// 1. Escribe un programa que diga el número de días en un mes.

// ```sh
//   Introduce un mes: Enero
//   Enero tiene 31 días.

//   Introduce un mes: ENERO
//   enero tiene 31 dias

//   Introduce un mes: Febrero
//   Febrero tiene 28 días.

//   Introduce un mes: FEbrero
//   Febrero tiene 28 días.
// ```
let mees = "Febrero";
let anio = 2021;
if (mes === "Enero" || mees === "Marzo" || mees === "Mayo" || mees === "Julio" || mees === "Agosto" || mees === "Octubre" || mees === "Diciembre") {
  console.log("31 días");
} else if (mees === "Abril" || mees === "Junio" || mees === "Septiembre" || mees === "Noviembre") {
  console.log("30 días");
} else if (mees === "Febrero") {
  if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
    console.log("29 días");
  } else {
    console.log("28 días");
  }
} else {
  console.log("Mes inválido");
}

// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
let mess = "Febrero";
let anioo = 2026;
if (mes === "Enero" || mess === "Marzo" || mess === "Mayo" || mess === "Julio" || mess === "Agosto" || mess === "Octubre" || mess === "Diciembre") {
  console.log("31 días");
} else if (mess === "Abril" || mess === "Junio" || mess === "Septiembre" || mess === "Noviembre") {
  console.log("30 días");
} else if (mess === "Febrero") {
  if ((anioo % 4 == 0 && anioo % 100 != 0) || anioo % 400 == 0) {
    console.log("29 días");
  } else {
    console.log("28 días");
  }
} else {
  console.log("Mes inválido");
}


