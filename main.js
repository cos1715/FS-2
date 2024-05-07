class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  age = 0;

  getAge() {
    return this.age;
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(data) {
    const [name, lastName] = data.split(" ");
    this.name = name;
    this.lastName = lastName;
    return `${this.name} ${this.lastName}`;
  }

  getInfo = () => {
    return this;
  };
}

const user = new User("Taras", "S");
console.log("🚀 ~ user==>>", user);

function bar(func) {
  return func();
}

// console.log("🚀 ~ bar(user.getAge)==>>", bar(user.getAge));

console.log("🚀 ~ bar(user.getInfo)==>>", bar(user.getInfo));

function UserFunc(name) {
  this.age = 0;
  this.name = name;
  this.get = function () {
    return this.age + 1;
  };
  this.getInfo = () => {
    return this;
  };
}

UserFunc.prototype.getAge = function () {
  return this.age;
};

const userFunc = new UserFunc("Taras");

class Pet {
  constructor(petName, ownerName) {
    this.petName = petName;
    this.ownerName = ownerName;
  }

  getPetName = () => {
    return this.petName;
  };

  getOwnerName = () => {
    return this.ownerName;
  };

  get petInfo() {
    return `pet - ${this.petName}, owner - ${this.ownerName}`;
  }

  set petInfo(value) {
    const [petName, ownerName = ""] = value.split(" ");
    this.petName = petName;
    this.ownerName = ownerName;
    return `pet - ${this.petName}, owner - ${this.ownerName}`;
  }
}

const pet = new Pet("Kit", "Taras");
console.log("🚀 ~ pet==>>", pet);

class Dog {
  static animal = "dog";
  static getAnimal = () => {
    const age = this.age;
    const animal = Dog.animal;
    debugger;
    return this;
  };
  age = 0;
  getAge = () => {
    return this.age;
  };
  getInfo() {
    const animal = Dog.animal;
    const thisAnimal = this.animal;
    debugger;
  }
}

const dogObj = new Dog();
dogObj.age;

1 + 1;
"a" + "b";

class Shape {
  constructor(color) {
    this._color = color;
  }
  static value = "";
  parentValue = "";
  #secretColor = "blue";
  #setSecretColor(newColor) {
    this.#secretColor = newColor;
  }
  getColor = () => {
    return this._color;
  };
  setColor = (newColor) => {
    this._color = newColor;
    this.#setSecretColor(newColor);
  };
  getArea() {
    return "Abstract shape can't have area";
  }
}

class Rectangular extends Shape {
  constructor(color, a, b) {
    super(color);
    this.a = a;
    this.b = b;
  }

  getArea = () => {
    return this.a * this.b;
  };
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getArea() {
    const value = super.getArea();

    return Math.PI * Math.pow(this.radius, 2);
  }
}

const shape = new Shape("black");
const rectangular = new Rectangular("black", 4, 8);
console.log("🚀 ~ rectangular==>>", rectangular);

const circle = new Circle("red", 4);

class BankAccount {
  constructor(balance, accountHolder) {
    this.#balance = balance;
    this.#accountHolder = accountHolder;
  }
  #balance = 0;
  #accountHolder = "";

  getBalance() {
    return this.#balance;
  }

  setBalance(value) {
    if (typeof value === "number") {
      this.#balance = value;
    }
    return this;
  }

  getAccountHolder() {
    return this.#accountHolder;
  }

  setAccountHolder(value) {
    if (typeof value === "string") {
      this.#accountHolder = value;
    }
    return this;
  }
}

const bankAccount = new BankAccount(100, "T");

class Animal {
  constructor(name) {
    this.name = name;
  }
  getInfo() {
    return `name: ${this.name}`;
  }
}
class Mammal extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }
  run() {
    return `${this.name} is running`;
  }
  getInfo() {
    return `${super.getInfo()}, live: ${this.live}`;
  }
}
class Bird extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }
  fly() {
    return `${this.name} is flying`;
  }
  getInfo() {
    return `${super.getInfo()}, live: ${this.live}`;
  }
}

class Penguin extends Bird {
  constructor(name, live, species) {
    super(name, live);
    this.species = species;
  }
  fly() {
    return "penguins don't fly";
  }
  swim() {
    return "penguin is swimming";
  }
  getInfo() {
    return `${super.getInfo()}, species: ${this.species}`;
  }
}

const penguin = new Penguin("Jack", "Antarctica", "Imperial");
