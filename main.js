// const samoVar = setTimeout(() => {
//   console.log("timeout");
// }, 0);
// // clearTimeout(samoVar);
// console.log("🚀 ~ samoVar==>>", samoVar);

// let i = 0;
// const intervalId = setInterval(() => {
//   if (i === 5) {
//     clearInterval(intervalId);
//   }
//   i++;
//   console.log(i);
// }, 1000);

// const element = document.getElementById("time");

// // const timeId = setInterval(() => {
// //   const date = new Date();
// //   const hours = `${date.getHours()}`.padStart(2, "0");
// //   const minutes = `${date.getMinutes()}`.padStart(2, "0");
// //   const seconds = `${date.getSeconds()}`.padStart(2, "0");

// //   if (minutes === "25") {
// //     clearInterval(timeId);
// //   }

// //   element.innerText = `${hours}:${minutes}:${seconds}`;
// // }, 1000);

// // setTimeout / setInterval === macro task
// // promise === micro task

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve(2);
// //   }, 1000);
// //   console.log("pending");
// //   // reject("because");
// // });

// // promise
// //   .then(
// //     (data) => {
// //       console.log("🚀 ~ promise.then ~ data==>>", data);

// //       return 2 + 2;
// //     },
// //     (err) => {
// //       console.log("🚀 ~ err==>>", err);
// //     }
// //   )
// //   .finally(() => {
// //     console.log("finally 1");
// //   })
// //   .catch((err) => {
// //     console.log("🚀 ~ catch err==>>", err);
// //     throw "new error";
// //     // return "dfdsfsdfsdfs";
// //   })
// //   .finally(() => {
// //     console.log("finally 2");
// //   })
// //   .then((res) => {
// //     console.log("🚀 ~ .then ~ res==>>", res);
// //     return new Promise((resolve, reject) => {
// //       reject("inner errors");
// //     });
// //   })
// //   .catch((err) => {
// //     console.log("err", err);
// //   })
// //   .catch((err2) => {
// //     console.log("🚀 ~ .catch ~ err2==>>", err2);
// //     return 2;
// //   });

// // console.log("🚀 ~ promise ~ promise==>>", promise);

// new Promise((resolve, reject) => {
//   reject(1);
// })
//   .catch((data) => {
//     console.log("catch rejected", data);
//     throw new Error("Error");
//   })
//   .then(
//     () => {},
//     (data) => {
//       console.log("then rejected", data);
//       throw new Error("Error then");
//     }
//   )
//   .catch((error) => {
//     console.log("catch", error);
//     return error;
//   })
//   .then(() => {
//     console.log("then", 1);
//     return 1;
//   })
//   .catch(() => {
//     console.log("catch between 2 thens");
//   })
//   .then(() => {
//     console.log("then error");
//     throw "then error";
//   })
//   .finally(() => {
//     console.log("finally");
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error==>>", error);
//   });

// new Promise((resolve, reject) => {
//   reject("rejected");
// })
//   .then((data) => {
//     console.log(data, "then");
//     return data + "Hello";
//   })
//   .then((data) => {
//     console.log(data, "then 2");
//     return data + " World";
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error==>>", error);
//   })
//   .finally(() => {
//     console.log("🚀 ~ finally==>>");
//   });

// Promise.resolve("resolved");
// Promise.reject("reject");

// const promiseAll = Promise.all([
//   Promise.resolve("resolved"),
//   Promise.reject("resolved"),
//   Promise.resolve("resolved"),
// ]);
// console.log("🚀 ~ promiseAll==>>", promiseAll);

// const promiseAllSettled = Promise.allSettled([
//   Promise.resolve("resolved"),
//   Promise.reject("resolved"),
//   Promise.resolve("resolved"),
// ]).then((data) => {
//   console.log("🚀 ~ ]).then ~ data==>>", data);
// });
// console.log("🚀 ~ promiseAllSettled==>>", promiseAllSettled);

// const race = Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("1s");
//     }, 1000);
//   }),
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("2s");
//     }, 2000);
//   }),
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("3s");
//     }, 3000);
//   }),
// ]);
// console.log("🚀 ~ race==>>", race);

// const any = Promise.any([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("1s");
//     }, 1000);
//   }),
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("2s");
//     }, 2000);
//   }),
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("3s");
//     }, 3000);
//   }),
// ]);
// console.log("🚀 ~ any==>>", any);

fetch("https://dummyjson.com/products")
  .then((res) => {
    console.log("🚀 ~ fetch ~ res==>>", res);
    return res.json();
  })
  .then((data) => {
    console.log("🚀 ~ fetch ~ data==>>", data);
  });

fetch("https://dummyjson.com/products/1", {
  method: "PUT" /* or PATCH */,
  headers: { "Content-Type": "application/json", "xxx-my-header": "my header" },
  body: JSON.stringify({
    price: 20,
    title: "iPhone Galaxy +1",
  }),
})
  .then((res) => res.json())
  .then(console.log);
