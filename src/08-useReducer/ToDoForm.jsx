import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const ToDoForm = ({ onNewTask }) => {
  // here i can use my custom hook useForm :D
  const { onInputChange, onResetForm, description } = useForm({
    description: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTask = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTask(newTask);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Next task?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />

      <button type='submit' className='btn btn-outline-primary mt-4'>
        Add
      </button>
    </form>
  );
};

ToDoForm.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};
