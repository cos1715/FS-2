// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => {
//   console.log(3);
// });

// Promise.resolve().then(() => {
//   console.log(4);
// });

// Promise.resolve().then(() => {
//   setTimeout(() => console.log(5), 0);
// });

// setTimeout(() => console.log(6), 0);

// console.log(7);

// 1 7 3 4 2 6 5

// console.log(1);

// Promise.resolve()
//   .then(() => {
//     console.log(2);
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log(3);
//   });

// console.log(4);

// 1 4 2 3

// console.log(1);

// const foo = async () => {
//   console.log(2);

//   setTimeout(() => {
//     console.log(3);
//   }, 0);

//   await new Promise((resolve) => {
//     resolve();
//   });

//   console.log(4);
// };

// foo();

// console.log(5);

// 1 2 5 4 3

// console.log(1);

// const bazz = async () => {
//   console.log(2);

//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(3);
//     }, 0);
//     resolve();
//   });

//   console.log(4);
// };

// bazz();

// console.log(5);

// 1 2 5 4 3

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

const promise = Promise.resolve();
for (let i = 0; i < 3; i++) {
  promise
    .then(() => {
      setTimeout(() => {
        console.log(4);
        setTimeout(() => console.log(5), 0);

        Promise.resolve().then(() => {
          console.log(6);
        });

        promise.then(() => {
          console.log(7);
        });
      }, 0);
    })
    .then(() => {
      console.log(8);
    });
}
console.log(9);

// 1 9 8 2 3 4 6 7 5
