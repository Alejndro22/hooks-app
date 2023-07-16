import { useReducer } from 'react';
import { toDoReducer } from './toDoReducer';

const initiaState = [
  {
    id: new Date().getTime(),
    desciption: 'Collect soul stone',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    desciption: 'Collect soul stone',
    done: false,
  },
];

export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, initiaState);

  return (
    <>
      <h1>To Do App</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};
