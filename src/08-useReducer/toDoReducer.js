export const toDoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add new task':
      return [...initialState, action.payload];

    default:
      return initialState;
  }
};
