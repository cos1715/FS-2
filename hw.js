let checkResult = function (original, validator) {
  function wrapper(...params) {
    let result = null;
    do {
      result = original.apply(this, params);
    } while (!validator(result));

    return result;
  }

  return wrapper;
};

const alwaysSayYesValidator = (arg) => arg;
const alwaysSayYes = checkResult(confirm, alwaysSayYesValidator);

// alwaysSayYes("Say yes");

const mathValidator = (arg) => arg === 4;
const mathObj = {
  a: 2,
  sum() {
    return this.a + 2;
  },
};
const sum = checkResult(mathObj.sum, mathValidator);
sum.call(mathObj);
checkResult = null;
sum.call(mathObj);

const sumFunc = mathObj.sum;
const mathObj2 = { a: 4 };
mathObj2.sumFunc = sumFunc;
mathObj2.sumFunc();

class Test {
  a = 2;
  arrow = () => {
    return this.a + 2;
  };
}

const test = new Test();
test.arrow();
