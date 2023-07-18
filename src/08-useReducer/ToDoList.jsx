import PropTypes from 'prop-types';
import { ToDoItem } from './';

export const ToDoList = ({ toDos = [], onRemoveTask }) => {
  return (
    <ul className='list-group'>
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onRemoveTask={(id) => onRemoveTask(id)}
        />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};
