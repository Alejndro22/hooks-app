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
      <h1>
        To Do App: 10, <small>Pending: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group'>
            {toDos.map((toDo) => (
              <li
                key={toDo.id}
                className='list-group-item d-flex justify-content-between'
              >
                <span className='align-self-center'>Item 1</span>
                <button className='btn btn-danger'>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className='col-5'>
          <h4>Add toDo</h4>
          <hr />
          <form>
            <input
              type='text'
              placeholder='Next task?'
              className='form-control'
            />

            <button type='submit' className='btn btn-outline-primary mt-4'>
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
