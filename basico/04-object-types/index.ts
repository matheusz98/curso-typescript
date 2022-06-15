// De tipo para Interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function productDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponível");
  }
}

const camisa: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true,
};

productDetails(camisa);
productDetails({ name: "Tenis", price: 19.99, isAvailable: false });

// -------------------------------------------------------------------------------------

// Propriedades opcionais em interfaces
interface Usuario {
  email: string;
  role?: string;
}

function showUserDetails(user: Usuario) {
  console.log(`O usuário tem o e-mail ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  }
}

const u1: Usuario = { email: "matheus@gmail.com", role: "Admin" };
const u2: Usuario = { email: "joao@gmail.com" };

showUserDetails(u1);
showUserDetails(u2);

// ------------------------------------------------------------------------------------------

// Readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

// ------------------------------------------------------------------------------------------------

// Index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);

// --------------------------------------------------------------------------------

// Herança de interfaces
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const matheus: Human = {
  name: "Matheus",
  age: 23,
};

console.log(matheus);

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);

console.log(goku.superpowers[0]);

// -------------------------------------------------------------------------------------

// Intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);
console.log(arnold.caliber);

// ----------------------------------------------------------------------

// ReadonlyArray
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// -----------------------------------------------------------------------------------

// Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
const myNumberArray2: fiveNumbers = [6, 7, 8, 9, 10];

console.log(myNumberArray);
console.log(myNumberArray2);

type nameAndPage = [string, number];

const anotherUser: nameAndPage = ["Matheus", 23];

console.log(anotherUser[0]);

anotherUser[0] = "Jão";

console.log(anotherUser[0]);

// -----------------------------------------------------------------------

// Tuplas com readonly
const tuplaNumeros = (numbers: readonly [number, number]) => {
  console.log(numbers[0]);
  console.log(numbers[1]);
};

tuplaNumeros([1, 2]);
