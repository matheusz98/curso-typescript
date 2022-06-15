"use strict";
// typeof Type Guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar soma!");
    }
}
sum("5", "5");
sum(10, 10);
sum("20", 30);
// ----------------------------------------------------------------------------------------------------------------
// Checando se um valor existe
const operations = (arr, operation) => {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
};
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");
// -------------------------------------------------------------------
// Instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const John = new User("john");
const Paul = new SuperUser("paul");
console.log(John);
console.log(Paul);
const userGreeting = (user) => {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}! Deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}!`);
    }
};
userGreeting(John);
userGreeting(Paul);
// ---------------------------------------------------------------------------
// Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
const showDogDetails = (dog) => {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD");
    }
};
showDogDetails(turca);
showDogDetails(bob);
