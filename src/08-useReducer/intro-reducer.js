const initiaState = [
  {
    id: 1,
    toDo: 'Collect soul stone',
    done: false,
  },
];

// state sets initial state
// action tells the reducer how to change the state
const toDoReducer = (state = initiaState, action = {}) => {
  // here spread operator is used because this copy last state and avoid mutation of original array
  // push shouldn't be used because in a reducer state shouldn't be mutated (push change original array)
  if (action.type === '[TODO] add to do') {
    return [...state, action.payload];
  }
  // reducer always has to return a (new) state
  return state;
};

let toDos = toDoReducer();

const newToDo = {
  id: 2,
  toDo: 'Collect power stone',
  done: false,
};

const addToDoAction = {
  type: '[TODO] add to do',
  payload: newToDo,
};

toDos = toDoReducer(toDos, addToDoAction);

console.log({ state: toDos });
