import { ToDoList, ToDoForm } from './';
import { useTodos } from '../hooks/';

export const ToDoApp = () => {
  const {
    toDos,
    toDosCount,
    pendingToDosCount,
    handleNewToDo,
    handleRemoveToDo,
    handleToggleToDo,
  } = useTodos();

  return (
    <>
      <h1>
        To Do App: {toDosCount}, <small>Pending: {pendingToDosCount}</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ToDoList
            toDos={toDos}
            onRemoveTask={(value) => handleRemoveToDo(value)}
            onToggleToDo={(value) => handleToggleToDo(value)}
          />
        </div>

        <div className='col-5'>
          <h4>Add toDo</h4>
          <hr />
          <ToDoForm onNewTask={(value) => handleNewToDo(value)} />
        </div>
      </div>
    </>
  );
};
