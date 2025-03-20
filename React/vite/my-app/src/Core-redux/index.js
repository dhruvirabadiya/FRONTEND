const redux = require("redux");
const createStore = redux.createStore;
const CombineReducer = redux.Com;

const iceCream = 20;
const Choco = 30;

function buy_icecream() {
  return {
    type: "BUY_ICECREAM",
  };
}

function buy_choco() {
  return {
    type: "BUY_CHOCO",
  };
}

const iceCreamReducer = (state = iceCream, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return state - 1;
    default:
      return state;
  }
};

const chocoReducer = (state = Choco, action) => {
  switch (action.type) {
    case "BUY_CHOCO":
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = CombineReducer({iceCreamReducer,chocoReducer})
const store = createStore(rootReducer)
