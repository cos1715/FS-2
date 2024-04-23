{
  function createPerson(name, surname) {
    return {
      name,
      surname,
      getFullName() {
        let str = "";
        Object.values(this).forEach((value) => {
          if (typeof value !== "function") {
            str += `${value} `;
          }
        });
        return str;
      },
    };
  }

  const a = createPerson("Вася", "Пупкін");
  const b = createPerson("Ганна", "Іванова");
  const c = createPerson("Єлизавета", "Петрова");

  console.log(a.getFullName()); //Вася Пупкін
  a.fatherName = "Іванович";
  console.log(a.getFullName()); //Вася Іванович Пупкін

  console.log(b.getFullName()); //Ганна Іванова
}

// createPersonClosure
const createPersonClosure = (name, surname) => {
  let fatherName;
  let age;

  function checkText(char = "") {
    return !!char.match(/[A-ZА-Я]/);
  }

  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }
  function getFatherName() {
    return fatherName;
  }
  function getAge() {
    return age;
  }
  function getFullName() {
    return `${surname || ""} ${name || ""} ${fatherName || ""}`;
  }
  function setName(newName) {
    if (checkText(newName[0])) {
      name = newName;
    }
    return name;
  }
  function setSurname(newName) {
    if (checkText(newName[0])) {
      surname = newName;
    }
    return surname;
  }
  function setFatherName(newName) {
    if (checkText(newName[0])) {
      fatherName = newName;
    }
    return fatherName;
  }
  function setAge(newAge) {
    if (newAge >= 0 && newAge <= 100) {
      age = newAge;
    }
    return age;
  }
  function setFullName(newFullName) {
    const [newSurname = "", newName = "", newFatherName = ""] =
      newFullName.split(" ");

    if (checkText(newSurname[0])) {
      surname = newSurname;
    }
    if (checkText(newName[0])) {
      name = newName;
    }
    if (checkText(newFatherName[0])) {
      fatherName = newFatherName;
    }
    return getFullName();
  }

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
};

const a = createPersonClosure("Вася", "Пупкін");
const b = createPersonClosure("Ганна", "Іванова");
a.setName("Taras");
console.log(a.getName());
a.setAge(15);
a.setAge(150); //не працює

b.setFullName("Петрова Ганна Миколаївна");
console.log(b.getFatherName()); //Миколаївна

const getSetForm = (element, obj) => {
  const inputs = {};

  const updateValues = () => {
    for (const key in inputs) {
      const value = obj[`get${key}`]();
      inputs[key].value = value ?? "";
    }
  };

  for (const key in obj) {
    const prop = key.slice(3);

    if (!inputs[prop]) {
      const input = document.createElement("input");
      input.placeholder = prop;
      input.name = prop;
      input.disabled = !obj[`set${prop}`];

      const value = obj[`get${prop}`]();
      input.value = value ?? "";

      const type = typeof value === "number" ? "number" : "text";
      input.type = type;

      inputs[prop] = input;
      element.append(input);

      input.addEventListener("input", (e) => {
        const value = e.target.value;
        const newValue = type === "number" ? +value : value;
        obj[`set${prop}`](newValue);
        updateValues();
      });
    }
  }
  console.log("🚀 ~ getSetForm ~ inputs==>>", inputs);
};

getSetForm(document.body, a);
