// Arrays
let numbers: number[] = [1, 2, 3];

numbers.push(4, 5);

console.log(numbers);

const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

const nomes: string[] = ["Matheus", "Guilherme"];

nomes.push("Nathan");

console.log(nomes);

// let nomes: string[];

// nomes = ["Matheus", "Guilherme"];

// nomes.push("Nathan");

// console.log(nomes);

// -------------------------------------------------------------------------

// Parâmetros tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(10, 10);

// --------------------------------------------------------------------------------

// Retorno de função
const greetings = (name: string) => {
  return `Greetings, ${name}!`;
};

console.log(greetings("Matheus"));

// --------------------------------------------------------------------------------

// Funções anônimas
setTimeout(function () {
  const sallary: number = 2500;

  console.log(sallary);
}, 2000);

// --------------------------------------------------------------------------------

// Tipos de objeto
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

const pessoaObj: { nome: string; sobrenome: string } = {
  nome: "Matheus",
  sobrenome: "Costa",
};

console.log(pessoaObj);

// -------------------------------------------------------------------------

// Props opcionais
const showNumbers = (a: number, b: number, c?: number) => {
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
const advancedGreeting = (firstName: string, lastName?: string) => {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}! Tudo bão?`;
  }

  return `Olá, ${firstName}! Tudo bão?`;
};

console.log(advancedGreeting("Matheus", "Costa"));
console.log(advancedGreeting("Matheus"));

// --------------------------------------------------------------------------------------------

// Union types
const showBalance = (balance: string | number) => {
  console.log(`O saldo da conta é R$${balance}`);
};

showBalance(100);
showBalance("200");

const arr2: Array<number | string | boolean> = [1, "teste", true];

console.log(arr2);

const showUserRole = (role: boolean | string) => {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }

  return `A função do usuário é: ${role}`;
};

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// --------------------------------------------------------------------------------

// Type alias
type ID = string | number;

const showId = (id: ID) => {
  console.log(`O ID é: ${id}`);
};

showId(1);
showId("10");

// -------------------------------------------------------------------------------------

// Interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

const showCoord = (obj: Point) => {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
};

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoord(coordObj);

// ----------------------------------------------------------------

// Interface x Type alias
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Matheus", age: 23 };

console.log(somePerson);

type personType = {
  name: string;
};

// -------------------------------------------------------------------------

// Literal types
let test: "testando";

test = "testando";

console.log(test);

const showDirection = (direction: "left" | "right" | "center") => {
  console.log(`A direção é: ${direction}`);
};

showDirection("left");
showDirection("center");

// --------------------------------------------------------------------------

// Bigint
let n: bigint;

n = 1000n;

console.log(n);

console.log(typeof n);

console.log(n + 100n);

// --------------------------------------------------------------------------

// Symbol
let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
