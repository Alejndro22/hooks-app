export const toDoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add new task':
      return [...initialState, action.payload];

    // here I can use filter because it creates a new array, always avoid to mutate the original state
    case '[TODO] Remove task':
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      return initialState;
  }
};
