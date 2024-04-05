const div = document.getElementById("div");
console.dir(div);
const main = document.querySelector("main");
const button = main.querySelector("button");
console.log("🚀 ~ button==>>", button);

const buttonList = document.querySelectorAll("button");

for (const el of buttonList) {
  console.dir(el);
}

const htmlCollection = document.getElementsByTagName("button");
const createButton = () => {
  const newButton = document.createElement("button");
  const text = document.createTextNode("Click!!!");
  newButton.append(text);
  document.body.prepend(newButton);
};

const addColor = () => {
  const text = document.getElementById("text");
  text.classList.add("green");
};

const ul = document.createElement("ul");
main.append(ul);
const liFirst = document.createElement("li");
const liLast = document.createElement("li");
const pFirst = document.createElement("p");
const pLast = document.createElement("p");
liFirst.innerText = "First";
liLast.innerText = "Last";
pFirst.innerText = "P First";
pLast.innerText = "P Last";
ul.append(liLast);
ul.prepend(liFirst);
ul.before(pFirst);
ul.after(pLast);
ul.before(pLast);
const cloneDiv = div.cloneNode();
cloneDiv.id = "clone-div";
document.body.append(cloneDiv);

const cloneUl = ul.cloneNode(true);
document.body.append(cloneUl);

// div.replaceWith(cloneUl);

const clearCloneDiv = () => {
  cloneDiv.remove();
};

const reloadBtn = document.querySelector(".hidden");
button.addEventListener("click", () => {
  reloadBtn.classList.toggle("hidden");
});

const input = document.getElementById("input");
input.addEventListener("keydown", () => {
  console.log("keydown event");
});
input.addEventListener("keyup", () => {
  console.log("keyup event");
});
input.addEventListener("keypress", (event) => {
  console.log("keypress event", event.target.value);
});
input.addEventListener("focus", () => {
  console.log("focus");
});
input.addEventListener("blur", () => {
  console.log("blur");
});

const cells = [
  [1, 2],
  [3, 4],
];
const table = document.createElement("table");
table.style.border = "1px solid black";

cells.forEach((item) => {
  const tr = document.createElement("tr");
  item.forEach((cell) => {
    const td = document.createElement("td");
    td.innerText = cell;
    td.style.border = "1px solid black";
    tr.append(td);
  });
  table.append(tr);
});

main.append(table);
table.addEventListener("click", (e) => {
  console.log("🚀 ~ table.addEventListener ~ e==>>", e);
  if (e.target.nodeName === "TD") {
    alert(e.target.innerText);
  }
});

const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const averageAge = (arr) => {
  const sum = arr.reduce((acc, item) => {
    if (item.age > 17 && item.age < 55) {
      return acc + item.age;
    }
    return acc;
  }, 0);
};
averageAge(arr);
// 31.4
