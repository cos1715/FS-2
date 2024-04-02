const htmlTree = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      children: [
        {
          tagName: "span",
          children: ["Enter a data please:"],
        },
        {
          tagName: "br",
        },
        {
          tagName: "input",
          attr: {
            type: "text",
            id: "name",
          },
        },
        {
          tagName: "input",
          attr: {
            type: "text",
            id: "surname",
          },
        },
      ],
    },
    {
      tagName: "div",
      children: [
        { tagName: "button", attr: { id: "ok" }, children: ["Ok"] },
        { tagName: "button", attr: { id: "cancel" }, children: ["Cancel"] },
      ],
    },
  ],
};

{
  // span
  const {
    children: [
      {
        children: [
          {
            children: [text],
          },
        ],
      },
    ],
  } = htmlTree;
  console.log("🚀 ~ span==>>", text);

  // button
  const {
    children: [
      ,
      {
        children: [
          ,
          {
            children: [btnText],
          },
        ],
      },
    ],
  } = htmlTree;
  console.log("🚀 ~ children==>>", btnText);

  // input
  const {
    children: [
      {
        children: [
          ,
          ,
          ,
          {
            attr: { id },
          },
        ],
      },
    ],
  } = htmlTree;
  console.log("🚀 ~ input==>>", id);
}

{
  // Destruct 2

  const obj = {
    name: "Ivan",
    surname: "Petrov",
    children: [{ name: "Maria" }, { name: "Nikolay" }],
  };

  const {
    children: [{ name: name1 }, { name: name2 }],
  } = obj;
  console.log("🚀 ~ names ==>>", name1, name2);
}

{
  // rate

  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
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
}
