// Confirms
// {
//   const arr = [confirm(), confirm(), confirm()];
//   console.log(arr);
// }

// IndexOf Word
// {
//   const str = prompt("Enter text").toLocaleLowerCase();
//   const word = prompt("Enter search word").toLocaleLowerCase();
//   const arr = str.split(" ");
//   const index = arr.indexOf(word);
//   if (index > -1) {
//     console.log(`Your word is ${index + 1}`);
//   } else {
//     console.log("We don't found your word");
//   }
// }

// Copy
{
  const table = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16],
  ];

  const copy = [...table];
  const deepCopy = [];
  table.forEach((elem) => {
    deepCopy.push([...elem]);
  });
}

// Destruct default
// {
//   const arr = prompt("Enter word");
//   // const elem = arr[1];
//   // const elem2 = arr[2];
//   // const elem3 = arr[3] || "!";
//   const [, el2 = "!", , el4 = "!", el5 = "1"] = arr;
// }

// For Table Horizontal
{
  const names = ["John", "Paul", "George", "Ringo"];
  let str = '<table style="border: 1px solid black;"><tr>';
  for (const name of names) {
    str += `<td style="border: 1px solid black;">${name}</td>`;
  }
  str += "</tr></table>";
  document.write(str);
}

// For Table Vertical
{
  const names = ["John", "Paul", "George", "Ringo"];
  let str = '<table style="border: 1px solid black;">';
  for (const name of names) {
    str += `<tr><td style="border: 1px solid black;">${name}</td></tr>`;
  }
  str += "</table>";
  document.write(str);
}
