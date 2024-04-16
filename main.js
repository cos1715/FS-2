function foo() {
  console.log(arguments);
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

function bar() {
  foo(1, 2, 3, 4, 5, 6, 7, 8, 9);
  console.log("bar");
}

bar();

const bazz = function () {
  foo();
  console.log("bar");
};

const arrow = () => {
  return 1 + test;
};

const simpleReturn = () => 1 + 1;

const omitPrentices = (a = 2) => a + 1;

const returnObj = (a = 2) => ({ a, b: 2 });

const test = 1;

const ref = (arg) => {
  arg++;
};

let num = 1;
let numCopy = num;
num++;
console.log("🚀 ~ numCopy==>>", numCopy);
console.log("🚀 ~ num==>>", num);

ref(num);
console.log("🚀 ~ num==>>", num);

const obj = { a: 1 };
const ref2 = ({ a }) => {
  a++;
};

ref2(obj);
console.log("🚀 ~ obj==>>", obj);

const arr = [1, 2, 3];
const [index1, index2, index3] = arr;
const { a: newNameA = 2, ...rest } = obj;

const megaSum = (...rest) => {
  let sum = 0;
  rest.forEach((item) => (sum += item));
  return sum;
};

const result = megaSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("🚀 ~ result==>>", result);

(() => {
  console.log("self invoked function");
})();

setTimeout(() => {
  console.log("timeout");
}, 2000);

console.log("🚀 ~ this==>>", this);

const methodObj = {
  name: "Taras",
  age: 22,
  reName: function (newName) {
    const testArrowFunc = () => {
      console.log("🚀 ~ this ,reName ==>>", this);
      this.name = newName;
    };
    testArrowFunc();
  },
  showName() {
    console.log("🚀 ~ this ,showName ==>>", this);
  },
  setAge: (newAge) => {
    console.log("🚀 ~ this ,newAge ==>>", this);
  },
};

function thisFunc() {
  const testArrowFunc = () => {
    console.log("🚀 ~ this ,thisFunc ==>>", this);
  };
  testArrowFunc();
}

thisFunc();

const copy = methodObj.reName;
copy("");

const newObj = {
  sdas: 3432,
  asdas: 3432,
  reName(name) {
    methodObj.reName(name);
  },
};

newObj.reName("");
newObj.method = methodObj.reName;
newObj.method("");

const bindedCopy = copy.bind(obj);
bindedCopy("");
copy.call(newObj, "", 2, 3, 4, 5, 6, 7);
copy.apply(methodObj, ["", 2, 4, 5, 6, 7, 8, 9]);

const showObj = () => {
  console.log("showObj==>>", this);
};

showObj.call(newObj);

const dog = {
  _name: "",
  _owner: "Taras",
  get info() {
    return `owner's name ${this._owner}, dog's name ${this._name}`;
  },
  get name() {
    return this._name;
  },
  set name(arg) {
    this._name = arg;
  },
  set info(arg) {
    const [ownerName, dogName] = arg.split(" ");
    this._owner = ownerName;
    this._name = dogName;
  },
};
