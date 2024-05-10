console.log(Redux);
const counter = document.getElementById("counter");

const actionType = "CHANGE_THEME";
const increaseCounter = "INCREASE_COUNTER";
const decreaseCounter = "DECREASE_COUNTER";
const loadCart = "LOAD_CART";
// const themeAction = {
//   type: actionType,
//   payload: "",
// };

const fetchCart = () => {
  return (dispatch) => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => dispatch({ type: loadCart, payload: data }));
  };
};

const themeActionCreator = (payload) => ({ type: actionType, payload });
const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case actionType:
      return action.payload;
    default:
      return state;
  }
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case increaseCounter:
      return state + 1;
    case decreaseCounter:
      return state - 1;
    default:
      return state;
  }
};

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case loadCart:
      return action.payload;
    default:
      return state;
  }
};

const createStore = (rootReducer) => {
  let state = {};
  const listeners = [];

  const dispatch = (action) => {
    state = rootReducer(state, action);
    listeners.forEach((callback) => {
      callback();
    });
  };
  const getState = () => {
    return state;
  };
  const subscribe = (listener) => {
    listeners.push(listener);
  };

  return {
    dispatch,
    getState,
    subscribe,
  };
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

// custom
// const rootReducer = combineReducers({
//   theme: themeReducer,
//   counter: counterReducer,
// });
// const store = createStore(rootReducer);

// Redux
const rootReducer = Redux.combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  cart: cartReducer,
});
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
console.log("🚀 ~ Redux==>>", Redux);
const store = Redux.createStore(
  rootReducer,
  {},
  compose(Redux.applyMiddleware(ReduxThunk))
);

const updateClass = (className) => {
  const btns = document.querySelectorAll("button");
  for (let btn of btns) {
    btn.classList.remove("light", "dark");
    btn.classList.add(className);
  }
};

store.subscribe(() => {
  const state = store.getState();
  counter.innerText = state.counter;
  updateClass(state.theme);
});

document.getElementById("theme").addEventListener("click", (event) => {
  const lightThemeEnabled = event.target.classList.contains("light");
  const action = themeActionCreator(lightThemeEnabled ? "dark" : "light");
  store.dispatch(action);
});

document.getElementById("increment").addEventListener("click", (event) => {
  store.dispatch({ type: increaseCounter });
});
document.getElementById("decrement").addEventListener("click", (event) => {
  store.dispatch({ type: decreaseCounter });
});
document.getElementById("load").addEventListener("click", (event) => {
  store.dispatch(fetchCart());
});

const printNumber = (to) => {
  if (to === 1) {
    console.log(to);
    return;
  }

  console.log(to);
  printNumber(to - 1);
};

printNumber(5);

const factorialLoop = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

const factorialRecursion = (num) => {
  if (num === 1) {
    return num;
  }
  const result = factorialRecursion(num - 1);
  return num * result;
};

const fibNumber = (num) => {
  return num <= 1 ? num : fibNumber(num - 1) + fibNumber(num - 2);
};

const fibWithCache = () => {
  const map = new Map();

  return function fib(num) {
    if (map.has(num)) {
      return map.get(num);
    }
    if (num <= 1) {
      return num;
    }
    const result = fib(num - 1) + fib(num - 2);
    map.set(num, result);
    return result;
  };
};

const fibCache = fibWithCache();
fibCache(80);
