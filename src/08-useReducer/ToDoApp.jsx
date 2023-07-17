import { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { ToDoList, ToDoForm } from './';

const initiaState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Collect soul stone',
  //   done: false,
  // }
];

// Get toDos from browser local storage, if null return []
const init = () => {
  return JSON.parse(localStorage.getItem('toDos') || []);
};

export const ToDoApp = () => {
  // initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
  // optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
  const [toDos, dispatch] = useReducer(toDoReducer, initiaState, init);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos) || []);
  }, [toDos]);

  const onNewToDo = (toDo) => {
    const action = {
      type: '[TODO] Add new task',
      payload: toDo,
    };

    // dispatch is the function used to send action to the reducer
    dispatch(action);
  };

  return (
    <>
      <h1>
        To Do App: 10, <small>Pending: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          {/* ToDoList */}
          <ToDoList toDos={toDos} />
        </div>

        <div className='col-5'>
          <h4>Add toDo</h4>
          <hr />
          {/* ToDoForm, with onNewTask(toDo -object-) */}
          <ToDoForm onNewTask={(value) => onNewToDo(value)} />
        </div>
      </div>
    </>
  );
};
