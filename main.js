fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => {
    debugger;
    return res.json();
  })
  .then((data) => {
    const inputCurrency = prompt("Enter input Currency").toUpperCase();
    const outputCurrency = prompt("Enter output Currency").toUpperCase();
    const amount = +prompt("Enter amount");
    const { rates } = data;
    const inputRate = rates[inputCurrency];
    const outputRate = rates[outputCurrency];
    if (inputRate && outputRate && !isNaN(amount)) {
      const result = (amount * inputRate) / outputRate;
      console.log("🚀 ~ .then ~ result==>>", result.toFixed(2));
    } else {
      console.log("Please enter correct data");
    }
  });

const timerId = setTimeout(() => {
  console.log("timeout");
}, 1000);
// clearTimeout(timerId);

let counter = 0;
const intervalId = setInterval(() => {
  console.log("interval");
  counter++;
  if (counter > 5) {
    clearInterval(intervalId);
  }
}, 2000);

const num1 = 1;

console.log(countNumbers(num1, 5 + 5, 2));

const func = function (num1 = 2, num2 = 2) {
  return num1 * num2;
};
console.log(func());

function countNumbers(param1, param2, param3 = 0, param4 = 0) {
  const num = 2;
  return num + param1 + param2 + param3 + param4;
}

const foo = (arg1, arg2) => {
  return arg1 ** arg2;
};
console.log(foo(2, 3));

const printName = ({ firstName = "", lastName = "" } = {}) => {
  return `${firstName} ${lastName}`;
};

console.log(printName({ firstName: "Taras" }));

const arr = [1, 2, 3];

const callBack = (item) => {
  return item % 2 !== 0;
};

const odd = arr.filter(callBack);
console.log("🚀 ~ odd==>>", odd);

const filter = (callBack) => {
  const filteredArr = [];
  for (const item of arr) {
    const result = callBack(item);
    if (result) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
};

console.log(filter(callBack));

const a = +prompt("a");
const b = +prompt("b");
const c = +prompt("c");

const calculate = ({ a = 1, b = 1, c = 1 }) => {
  const d = b * b - 4 * a * c;
  const roots = { x1, x2 };
  if (d >= 0) {
    roots.x1 = (-b + Math.sqrt(d)) / (2 * a);
    roots.x2 = (-b - Math.sqrt(d)) / (2 * a);
  }

  return { x1, x2 };
};

const roots = calculate({ a, b, c });
console.log("🚀 ~ roots==>>", roots);

const rest = (...rest) => {
  console.log("🚀 ~ rest ~ rest==>>", rest);
};
