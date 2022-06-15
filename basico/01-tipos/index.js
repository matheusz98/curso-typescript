"use strict";
// Arrays
let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);
const nums = [100, 200];
nums.push(300);
console.log(nums);
const nomes = ["Matheus", "Guilherme"];
nomes.push("Nathan");
console.log(nomes);
// let nomes: string[];
// nomes = ["Matheus", "Guilherme"];
// nomes.push("Nathan");
// console.log(nomes);
// -------------------------------------------------------------------------
// Parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(10, 10);
// --------------------------------------------------------------------------------
// Retorno de função
const greetings = (name) => {
    return `Greetings, ${name}!`;
};
console.log(greetings("Matheus"));
// --------------------------------------------------------------------------------
// Funções anônimas
setTimeout(function () {
    const sallary = 2500;
    console.log(sallary);
}, 2000);
// --------------------------------------------------------------------------------
// Tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObj = {
    nome: "Matheus",
    sobrenome: "Costa",
};
console.log(pessoaObj);
// -------------------------------------------------------------------------
// Props opcionais
const showNumbers = (a, b, c) => {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
};
showNumbers(1, 2, 3);
showNumbers(4, 5);
// -------------------------------------------------------------------------------
// Validando parâmetro opcional
const advancedGreeting = (firstName, lastName) => {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}! Tudo bão?`;
    }
    return `Olá, ${firstName}! Tudo bão?`;
};
console.log(advancedGreeting("Matheus", "Costa"));
console.log(advancedGreeting("Matheus"));
// --------------------------------------------------------------------------------------------
// Union types
const showBalance = (balance) => {
    console.log(`O saldo da conta é R$${balance}`);
};
showBalance(100);
showBalance("200");
const arr2 = [1, "teste", true];
console.log(arr2);
const showUserRole = (role) => {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
};
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
const showId = (id) => {
    console.log(`O ID é: ${id}`);
};
showId(1);
showId("10");
const showCoord = (obj) => {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
};
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoord(coordObj);
const somePerson = { name: "Matheus", age: 23 };
console.log(somePerson);
// -------------------------------------------------------------------------
// Literal types
let test;
test = "testando";
console.log(test);
const showDirection = (direction) => {
    console.log(`A direção é: ${direction}`);
};
showDirection("left");
showDirection("center");
// --------------------------------------------------------------------------
// Bigint
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// --------------------------------------------------------------------------
// Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
