const key = "year";
const audi = {
  model: "q8",
  color: "white",
  maxSpeed: 240,
  key,
  // [1 + 1]: prompt(""),
  [key]: [],
  1: {
    a: "",
    b: "",
  },
  color: "black",
};
const bmw = {
  model: "x6",
  color: "black",
  maxSpeed: 200,
  1: true,
  "owner name": "Taras",
  [1 + 1]: "2",
  [key]: "2023",
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [8, 9];

console.log("audi.maxSpeed: ", audi.maxSpeed);
console.log("🚀 ~ audi[1];==>>", audi[1]);
console.log("bmw owner name:", bmw["owner name"]);
console.log("🚀 ~ audi[1];==>>", audi[1 + 0]);
console.log("🚀 ~ audi[1];==>>", audi[key]);

const obj = {
  car: {
    audi,
    bmw,
    "dealer shop": {
      name: "test",
      city: "Kyiv",
    },
  },
};

console.log("🚀 ~ obj.bmw[key]==>>", obj.car.bmw?.[key]);
console.log(
  '🚀 ~ obj.car["dealer shop"].city==>>',
  obj.car["dealer shop"].city
);
obj.car["dealer shop"].city = "Kharkiv";

const testObj = {
  a: 1,
  b: 2,
  c: 3,
  d: { da: 41 },
};

// delete testObj[prompt("Enter key")];

testObj.e = 5;

// not copy
const copy = testObj;

// ref
const a = {};
const b = { a };
a.b = b;

const spread1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const spread2 = {
  a: 11,
  e: 5,
  f: 6,
};

const totalSpread = { ...spread1, ...spread2 };
const dynamicKey = "f";
const {
  a: destructA,
  e,
  g = 7,
  [dynamicKey]: destructF,
  ...rest
} = totalSpread;
console.log("🚀 ~ e==>>", e);

const {
  d: { da },
} = testObj;

const testDestruct = { a: { b: { c: [1, 2, 3, 4] } } };
const {
  a: {
    b: {
      c: [elem1, elem2],
    },
  },
} = testDestruct;

// check if prop in obj
"model" in bmw;

for (let key in bmw) {
  console.log("in loop", bmw[key]);
}

// for of doesn't work with objects
for (let elem of arr) {
  console.log("of loop", elem);
}

const keys = Object.keys(bmw);
console.log("🚀 ~ keys==>>", keys);
const values = Object.values(bmw);
console.log("🚀 ~ values==>>", values);
const entries = Object.entries(bmw);
console.log("🚀 ~ entries==>>", entries);

const filter = entries.filter(([key, value]) => {
  return !value;
});
console.log("🚀 ~ filter ~ filter==>>", filter);

for (const [key, value] of entries) {
  console.log("🚀 ~ entry==>>", key, value);
}

// extend obj
Object.assign(bmw, spread2);

const jsonBmw = JSON.stringify(bmw);
const parsedBmw = JSON.parse(jsonBmw);

const symbol = Symbol("description");
const symbol2 = Symbol("description");
