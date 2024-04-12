let index = 0;
while (index <= 10) {
  if (index % 2 !== 0) {
    console.log(index);
  }
  index++;
}
console.log("=======");

let doWhileIndex = 1;
do {
  if (doWhileIndex % 2 === 0) {
    console.log(doWhileIndex);
  }
  doWhileIndex++;
} while (doWhileIndex <= 10);

console.log("=======");

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("=======");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("=======");

{
  let i = 0;
  while (true) {
    if (i === 10) {
      break;
    }
    console.log("infinite while", i);
    i++;
  }
}

console.log("=======");

{
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}

console.log("=======");

{
  for (const num in arr) {
    // doesn't work
    if (num === 5) {
      continue;
    }
    console.log(num);
  }
}
