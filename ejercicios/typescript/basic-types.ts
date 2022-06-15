// Boolean

let muted: boolean = true;
muted = false;
// muted="string" No podemos cambiarle el tipo de dato a una variable

// Números
let numerador = 42;
let denominador = 6;

// Typescript puede inferir el tipo de dato de una variable
let resultado = numerador / denominador;

// String
let nombre: string = "Richard";

// Arreglos

// Arrays de un solo tipo de datos
let people: string[];
people = ["Isabel", "Javier", "Maria"];
people.push("3");

// Arrays de varios tipos
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Keiber");
peopleAndNumbers.push(3);

// Enums

// Define una cantidad limitadas de valores que se le pueden
// asignar a una variable
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any permite definir el tipo de una variable a cualquier dato
let cosa: any = "Vaina";
cosa = { cosa: "Vaina" };
