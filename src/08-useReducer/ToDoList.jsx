import PropTypes from 'prop-types';
import { ToDoItem } from './';

export const ToDoList = ({ toDos = [], onRemoveTask, onToggleToDo }) => {
  return (
    <ul className='list-group'>
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onRemoveTask={(id) => onRemoveTask(id)}
          onToggleToDo={onToggleToDo}
        />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
  onToggleToDo: PropTypes.func.isRequired,
};
