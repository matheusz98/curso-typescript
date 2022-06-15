"use strict";
function productDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const camisa = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
productDetails(camisa);
productDetails({ name: "Tenis", price: 19.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "matheus@gmail.com", role: "Admin" };
const u2 = { email: "joao@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: "Matheus",
    age: 23,
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[0]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
// ----------------------------------------------------------------------
// ReadonlyArray
let myArray = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const myNumberArray2 = [6, 7, 8, 9, 10];
console.log(myNumberArray);
console.log(myNumberArray2);
const anotherUser = ["Matheus", 23];
console.log(anotherUser[0]);
anotherUser[0] = "Jão";
console.log(anotherUser[0]);
// -----------------------------------------------------------------------
// Tuplas com readonly
const tuplaNumeros = (numbers) => {
    console.log(numbers[0]);
    console.log(numbers[1]);
};
tuplaNumeros([1, 2]);
