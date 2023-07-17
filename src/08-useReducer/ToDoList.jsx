import PropTypes from 'prop-types';
import { ToDoItem } from './';

export const ToDoList = ({ toDos = [] }) => {
  return (
    <ul className='list-group'>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
};
