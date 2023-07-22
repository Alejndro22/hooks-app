import { toDoReducer } from '../../src/08-useReducer/toDoReducer';

describe('Tests on toDoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo ToDo',
      done: false,
    },
  ];

  test('should return initial state', () => {
    const newState = toDoReducer(initialState, {});

    // usually when expecting objects the functino toEqual is used, but toBe allows us
    // to know if it's the same object (pointing to the same memory location)
    // Remember that objects and arrays are passed by reference
    expect(newState).toBe(initialState);
  });

  test('should add a TODO', () => {
    const action = {
      type: '[TODO] Add new task',
      payload: {
        id: 2,
        description: 'New to do #2',
        done: false,
      },
    };

    const newState = toDoReducer(initialState, action);
    // Here I check that the content of payload with id:2 is contained in the newState
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('should delete a TODO', () => {
    const action = {
      type: '[TODO] Remove task',
      payload: 1,
    };

    const newState = toDoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test('should change TODO status', () => {
    const action = {
      type: '[TODO] Toggle task',
      payload: 1,
    };

    const newState = toDoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();

    const newState2 = toDoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy();
  });
});
