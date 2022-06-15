"use strict";
// Funções sem retorno (void)
const withoutReturn = () => {
    console.log("Esta função não tem tetorno!");
};
withoutReturn();
// -------------------------------------------------------------------------------
// Callback como argumento
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, username) {
    console.log("Preparando a função!");
    const greet = f(username);
    console.log(greet);
}
preGreeting(greeting, "Matheus");
// ------------------------------------------------------------------
// Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([true, false]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "Developer" });
console.log(newObject);
// -------------------------------------------------------------------------------
// Constraint em generic function
const biggestNumber = (a, b) => {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
};
console.log(biggestNumber(5, 3));
// ----------------------------------------------------------------------------------
// Especificar tipo de argumento
const mergeArray = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
// ---------------------------------------------------------------------------------------------
// Parâmetros opcionais
const modernGreeting = (name, greet) => {
    if (greet) {
        return `Olá ${greet} ${name}! Tudo bem?`;
    }
    return `Olá ${name}! Tudo bem?`;
};
console.log(modernGreeting("Matheus"));
console.log(modernGreeting("Matheus", "Dev"));
// -----------------------------------------------------------------------------------------------------------
// Parâmetro default
const somaDefault = (n, m = 10) => {
    return n + m;
};
console.log(somaDefault(10));
console.log(somaDefault(10, 20));
// --------------------------------------------------------------------------------------------------------------------------------
// Tipo unknown
const doSomething = (x) => {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(x);
    }
};
doSomething([1, 2, 3]);
doSomething(5);
// -------------------------------------------------------------------------------------------------------------
// Tipo never (melhor usado para retornar erros)
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Erro!");
// ---------------------------------------------------------------------------------------------
// Rest operator com TS
const sumAll = (...n) => {
    return n.reduce((number, sum) => sum + number);
};
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 100, 200));
// -----------------------------------------------------------------------------------------------------
// Destructuring em parâmetros (Destructuring com TS)
const showProductDetails = ({ name, price, }) => {
    return `O nome do produto é ${name} e ele custa R$${price}`;
};
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
