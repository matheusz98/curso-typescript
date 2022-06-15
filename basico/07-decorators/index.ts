// Primeiro decorator
function myDecorator() {
  console.log("Iniciando decorator");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class myClasss {
  @myDecorator()
  testing() {
    console.log("terminando execução do método");
  }
}

const myObjs = new myClasss();

myObjs.testing();

// ---------------------------------------------------------------------------------------

// Múltiplos decorators
function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou a.");
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou b.");
  };
}

class MultipleDecorators {
  @a()
  @b()
  testing() {
    console.log("Terminando execução");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

// ------------------------------------------------------------------------------------------------

// Class decorator
function classDec(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name === "Useer") {
    console.log("Criando usuário!");
  }
}

@classDec
class Useer {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const matheusss = new Useer("Matheus");

console.log(matheusss);

// ------------------------------------------------------------------------------------------------

// Decorator de método
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machines {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    return `O nome da máquina é: ${this.name}`;
  }
}

const tratorr = new Machines("Trator");

console.log(tratorr.showName());

// ---------------------------------------------------------------------------------------

// Acessor decorator
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }

  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander);

// ------------------------------------------------------------------------------------------------

// Property decorator
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class Id {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItems = new Id("1");

console.log(newItems);

// ----------------------------------------------------------------------------------------------------------------

// Exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

class Penn {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const newPen = new Penn(55);

console.log(newBook);
console.log(newPen);

console.log(newBook.createdAt);

// ----------------------------------------------------------------

// Exemplo real com method decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);

newPost.post("Meu segundo post!", newPost.alreadyPosted);

// ------------------------------------------------------------------------------------------------

// Exemplo real com property decorator
function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos`);
        return;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin("pedroadmin123");
