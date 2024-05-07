const animal = {
  sleep: false,
  eat() {
    console.log("eat");
  },
  run() {
    console.log("run");
  },
};

const dog = {
  __proto__: animal,
  name: "Bobik",
};
console.log("🚀 ~ dog==>>", dog);

console.log(Object.keys(dog));
for (let key in dog) {
  console.log("🚀 ~ key==>>", key);
}

const cat = Object.create(animal, {
  nightVision: {
    value: "Yes",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  color: {
    value: "grey",
    writable: false,
    enumerable: false,
  },
});

// Object.setPrototypeOf(cat, animal);
// cat.nightVision = true;
console.log("🚀 ~ cat==>>", cat);

const country = {
  country: "Ukraine",
};

const city = {
  city: "Kyiv",
  __proto__: country,
};

const street = {
  street: "Shevchenka",
  __proto__: city,
};

const house = {
  house: 42,
  __proto__: street,
};

const cityPlan = {
  houses: [1, 2, 3, 4, 5, 6, 7, 8],
  build(house) {
    this.houses = [...this.houses, house];
  },
};

const Kyiv = {
  name: "Kyiv",
  __proto__: cityPlan,
};

const Dnipro = {
  name: "Dnipro",
  __proto__: cityPlan,
};

function Constructor() {
  const num = 3;

  this.a = 1;
  this.b = 2;
  this.sum = () => {
    return this.a + this.b + num;
  };
  this.add = function () {
    return this.a + this.b + num;
  };
}

Constructor.prototype.city = Dnipro.name;
// Constructor.prototype = Dnipro;
// Constructor.prototype.constructor = Constructor;

const constructor = new Constructor();
console.log("🚀 ~ constructor==>>", constructor);

function Mayor(name) {
  this.name = name;
  this.hat = true;

  this.printName = function () {
    return this.name;
  };
}

function Kharkiv(name) {
  Mayor.call(this, name);
}
Kharkiv.prototype = Object.create(Mayor.prototype);
Kharkiv.prototype.constructor = Kharkiv;

const kharkiv = new Kharkiv("Taras");

function Lviv(name) {
  Mayor.call(this, name);
}

Lviv.prototype = Object.create(Mayor.prototype);
Lviv.prototype.constructor = Lviv;

const lviv = new Lviv("Julia");

console.log("🚀 ~ lviv==>>", lviv);

function Shape(color) {
  this.color = color;
}
Shape.prototype.getArea = function () {
  console.error("Abstract shape can't have area");
};

function Rectangular(color, a, b) {
  Shape.call(this, color);
  this.a = a;
  this.b = b;
}

Rectangular.prototype = Shape;
Rectangular.prototype.constructor = Rectangular;
Rectangular.prototype.getArea = function () {
  return this.a * this.b;
};

function Circle(color, radius) {
  Shape.call(this, color);
  this.radius = radius;
}
Circle.prototype = Shape;
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

const shape = new Shape("black");
const rectangular = new Rectangular("black", 4, 8);
console.log("🚀 ~ rectangular==>>", rectangular);

const circle = new Circle("red", 4);
console.log("🚀 ~ circle==>>", circle);

function ConstructorFunc() {
  // const this = {}
  this.arrow = () => {
    return this;
  };
  this.func = function () {
    return this;
  };
  // return this
}
const entity = new ConstructorFunc();
console.log("🚀 ~ entity==>>", entity);
// const arrow = entity.arrow;
// console.log(arrow());

// const func = entity.func;
// console.log(func());

function Car(brand) {
  this.brand = brand;
}
const car = new Car("BMW");
