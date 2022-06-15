// Campos em classes
class Userr {
  name!: string;
  age!: number;
}

const matheuss = new Userr();

matheuss.name = "Matheus";
matheuss.age = 23;

console.log(matheuss);

// ----------------------------------------------------------------------

// Constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("Jão", 22);

console.log(joao);

// ----------------------------------------------------------------------

// Propriedades readonly
class Car {
  name;
  readonly wheeeeeels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusquinha = new Car("Fusca");

console.log(fusquinha);
console.log(fusquinha.wheeeeeels);

// ----------------------------------------------------------------------

// Herança e super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("trator");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);

// ------------------------------------------------------------------------------------------------

// Métodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey stranger!");
  }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy);

jimmy.greeting();

// ------------------------------------------------------------------------------------------------

// O this em classes
class Truckk {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`
    );
  }
}

const volvo = new Truckk("Volvo", 400);

volvo.showDetails();

// ------------------------------------------------------------------------------------------------

// Getters
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return this.name + " " + this.surname;
  }
}

const matheusCosta = new Person("Matheus", "Costa");

console.log(matheusCosta.name);

console.log(matheusCosta.fullName);

// ------------------------------------------------------------------------------------------------

// Setters
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;

    console.log("X inserido com sucesso");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }

    this.y = y;

    console.log("Y inserido com sucesso");
  }
}

const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 20;

console.log(myCoords);

// --------------------------------------------------------------------------------

// Herdando interfaces

interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new blogPost("Hello World!");

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título é: ${this.title}`;
  }
}

// ----------------------------------------------------------------

// Override de métodos
class Base {
  someMethod() {
    console.log("alguma coisa");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("outra coisa");
  }
}

const myObject = new Nova();

myObject.someMethod();

// -------------------------------------------------------------

// Public
class Cc {
  x = 10;
}

const cInstance = new Cc();

console.log(cInstance.x);

// ------------------------------------------------------------------------------------------------

// Protected
class E {
  protected x = 20;

  protected protectedMethod() {
    console.log("Este método é protegido");
  }
}

class F extends E {
  showX() {
    console.log("X: " + this.x);
  }

  showProtectedMethod() {
    this.protectedMethod();
  }
}

const fInstance = new F();

fInstance.showX();

fInstance.showProtectedMethod();

// ------------------------------------------------------------------------------------------------

// Private
class PrivateClass {
  private name = "Private";

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log("Método privado");
  }

  showPrivateMethod() {
    this.privateMethod();
  }
}

const pObj = new PrivateClass();

console.log(pObj.showName());

pObj.showPrivateMethod();

// ------------------------------------------------------------------------------------------------

// Static members
class StaticMembers {
  static prop = "Teste static";

  static staticMethod() {
    console.log("Este é um método estático");
  }
}

console.log(StaticMembers.prop);

StaticMembers.staticMethod();

// --------------------------------------------------------------------------------------------------------------------

// Generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("caixa", "surpresa");

console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);

const secondItem = new Item(12, true);

console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

// ------------------------------------------------------------------------------------------------

// Parameter properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Qtd total: ${this.qty}`;
  }

  get showPrice() {
    return `Qtd total: ${this.price}`;
  }
}

const newShirt = new ParameterProperties("camisa", 5, 19.99);

console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

// ------------------------------------------------------------------------------------------------

// Class expressions
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Jones");

console.log(pessoa);

// ----------------------------------------------------------------------

// Classe abstrata
abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é ${this.name}`);
  }
}

const newAbstractObject = new AbstractExample("Josias");

newAbstractObject.showName();
