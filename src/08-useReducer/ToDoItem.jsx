import PropTypes from 'prop-types';

export const ToDoItem = ({ toDo = {}, onRemoveTask, onToggleToDo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${
          toDo.done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => onToggleToDo(toDo.id)}
        aria-label='span-test'
      >
        {toDo.description}
      </span>
      <button className='btn btn-danger' onClick={() => onRemoveTask(toDo.id)}>
        Delete
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  toDo: PropTypes.object.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
  onToggleToDo: PropTypes.func.isRequired,
};
