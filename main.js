// const str = "Blocks";
// {
//   const str = "World";
//   let pi = 3.14;
//   {
//     try {
//       try {
//         var a = 0;
//         const str = "Hello";
//         throw new Error("problem here");
//         console.log("str", str);
//         console.log("pi", pi);
//       } catch (error) {
//         console.dir(error);
//         throw new Error("problem here");

//         console.log("msg", error.message);
//         console.log("stack", error.stack);
//         console.log("error", error);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
// console.log("a", a);
// console.log("str", str);

// function foo() {
//   var test = "test var";
// }

// if (prompt()) {
//   console.log("if 1");
// } else if (!false) {
//   console.log("if 2");
// } else if (prompt()) {
//   console.log("if 3");
// }

// prompt()
//   ? console.log("if 1")
//   : !false
//   ? console.log("if 2")
//   : prompt() && console.log("if 3");

// if (" ") {
//   console.log("if 4");
// }

const age = +prompt();
// bad code
// if (age > 18) {
// } else {
//   console.log("you are not old enough");
// }

switch (age) {
  case 18:
    console.log("you are 18 years old");
    console.log("you are 18 years old");
    break;
  case 20:
    console.log("you are 20 years old");
    break;
  case 40:
  case age >= 50:
    console.log("you are 50 years old");
    break;
  default:
    console.log("default");
}

const switchObj = {
  18: () => console.log("you are 18 years old"),
  20: () => console.log("you are 20 years old"),
  40: () => console.log("you are 50 years old"),
  50: () => console.log("you are 50 years old"),
};

switchObj[age] ?? console.log("default");
