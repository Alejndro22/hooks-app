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
  // initialArg: The value from which the initial state is calculated. It can be a value of any type.
  // How the initial state is calculated from it depends on the next init argument.

  // init: The initializer function that should return the initial state. If it’s not specified,
  // the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
  const [toDos, dispatch] = useReducer(toDoReducer, initiaState, init);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos) || []);
  }, [toDos]);

  const handleNewToDo = (toDo) => {
    const action = {
      type: '[TODO] Add new task',
      payload: toDo,
    };

    // dispatch is the function used to send action to the reducer
    dispatch(action);
  };

  const handleRemoveToDo = (id) => {
    const action = {
      type: '[TODO] Remove task',
      payload: id,
    };

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
          {/* Here to handle remove task i need to pass props between children, ideally i'd use 
              useContext hook, but for now i'd pass the props just like that */}
          <ToDoList
            toDos={toDos}
            onRemoveTask={(value) => handleRemoveToDo(value)}
          />
        </div>

        <div className='col-5'>
          <h4>Add toDo</h4>
          <hr />
          {/* ToDoForm, with onNewTask(toDo -object-) */}
          <ToDoForm onNewTask={(value) => handleNewToDo(value)} />
        </div>
      </div>
    </>
  );
};
