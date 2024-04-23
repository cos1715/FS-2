const map = new Map();

map.set("test", { a: 1 });
console.log("🚀 ~ map==>>", map);
console.log("🚀 ~ map.get()==>>", map.get("test"));
map.has("test");
map.set({ a: 1 }, "asd");
map.delete("test");
map.size;
map.clear();

const set = new Set([1, 2, 2, 2, 3, 4, 5, "", "", "aaa"]);

set.add({ a: 1 });
// everything else is the same

const foo = () => {
  const set = {};
};

foo();

const firstName = "A";
const lastName = "B";

function bazz() {
  function bar() {
    return firstName + " " + lastName;
  }
  console.log(bar());
}

bazz();

const makeCounter = () => {
  let count = 0;

  return () => {
    return ++count;
  };
};

const counter = makeCounter();
const counter2 = makeCounter();

counter();
counter();
console.log(counter());

console.log(counter2());

let clocker = (params) => {
  let name = [...params];

  return function innerFunc(arg) {
    name.push(arg);
    return name;
  };
};

const clock = clocker(["A", "B", "C"]);
clocker = null;

clock("Taras");

let fun = null;
{
  const name = "taras";
  fun = () => {
    return `Hello ${name}`;
  };
}

fun();

const closure = () => {
  let num = 0;
  return (n) => (num += n);
};

const plus = closure();
plus(5);

const sum = (a) => {
  return (b) => {
    return a + b;
  };
};

const result = sum(5)(2);

const onClick = (id) => (e) => {
  console.log(id, e);
};

document.body.addEventListener("click", onClick("id"));

const decorator = (func) => {
  return (arg) => {
    const value = func(arg);
    return `Hello ${value}`;
  };
};

const toUpper = (name) => name.toUpperCase();
decorator(toUpper)("taras");

const obj = {
  a: 1,
  method() {
    return this.a + 1;
  },
};

obj.method();
const copy = obj.method;
copy();

function methodDecorator(func) {
  const value = "sum is:";
  return function () {
    const result = func.call(this);
    return value + " " + result;
  };
}

const add = methodDecorator(obj.method);

obj.method = add;
console.log(obj.method());

for (var i = 1; i <= 5; i++) {
  const logFunc = (j) => () => {
    console.log(j);
  };
  setTimeout(logFunc(i), i * 1000);
}

const recursion = (to) => {
  console.log("recursion", to);
  if (to === 1) {
    return to;
  }
  return recursion(to - 1);
};

recursion(5);
