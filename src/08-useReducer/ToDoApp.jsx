import { useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { ToDoList, ToDoForm } from './';

const initiaState = [
  {
    id: new Date().getTime(),
    description: 'Collect soul stone',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Collect time stone',
    done: false,
  },
];

export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, initiaState);

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
