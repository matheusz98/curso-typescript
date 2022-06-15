// Generics
const showData = <T>(arg: T): string => {
  return `O dado é: ${arg}`;
};

console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));

// ----------------------------------------------------------------------

// Constraint em Generics
const showProductName = <T extends { name: string }>(obj: T) => {
  return `O nome do produto é: ${obj.name}`;
};

const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));

// ---------------------------------------------------------------------------------

// Generics com Interface
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Carro = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Carro = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = {
  name: "Caneta BIC",
  wheels: false,
  engine: false,
  color: "Azul",
};

console.log(myCar);
console.log(myPen);

// -----------------------------------------------------------------------------------------------

// Type parameters
const getSomeKey = <T, K extends keyof T>(obj: T, key: K) => {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
};

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram"));

// ---------------------------------------------------------------------------------------------------------------

// Keyof type operator
type CharacterTwo = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
};

type C = keyof CharacterTwo;

const showCharName = (obj: CharacterTwo, name: C) => {
  return `${obj[name]}`;
};

const myChar: CharacterTwo = {
  name: "Matheus",
  age: 30,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "hasDriveLicense"));

// ---------------------------------------------------------------------------------------------------------------

// Typeof type operator
const userName: string = "Matheus";
const userName2: typeof userName = "João";
type x = typeof userName;
const userName4: x = "Joaquim";

// ---------------------------------------------------------------------------------------------------------------

// Indexed access types
type Truck = {
  km: number;
  kg: number;
  description: string;
};

type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga",
};

const showKm = (km: Km) => {
  console.log(`O véiculo tem a km de: ${km}`);
};

showKm(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
};

showKm(newCar.km);

// ---------------------------------------------------------------------

// Conditional types
interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;

type myTypeB = Teste extends { showName(): string } ? string : boolean;

// --------------------------------------------------------------------------------------------------------------------------------

// Template literals type
type testA = "text";

type CustomType = `some ${testA}`;

const testing: CustomType = "some text";

type a1 = "Testando";
type a2 = "Union";
type a3 = `${a1}` | `${a2}`;
