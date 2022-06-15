"use strict";
// Generics
const showData = (arg) => {
    return `O dado é: ${arg}`;
};
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));
// ----------------------------------------------------------------------
// Constraint em Generics
const showProductName = (obj) => {
    return `O nome do produto é: ${obj.name}`;
};
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
// -----------------------------------------------------------------------------------------------
// Type parameters
const getSomeKey = (obj, key) => {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
};
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
const showCharName = (obj, name) => {
    return `${obj[name]}`;
};
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "hasDriveLicense"));
// ---------------------------------------------------------------------------------------------------------------
// Typeof type operator
const userName = "Matheus";
const userName2 = "João";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};
const showKm = (km) => {
    console.log(`O véiculo tem a km de: ${km}`);
};
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
