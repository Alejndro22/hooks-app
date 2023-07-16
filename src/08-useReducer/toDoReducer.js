export const toDoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type = ABC hasnt been implemented');

    default:
      return initialState;
  }
};
