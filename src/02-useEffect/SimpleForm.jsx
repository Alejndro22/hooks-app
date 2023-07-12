import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'user',
    email: 'user@email.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // use computed properties to make this flexible, and avoid defining one for each one
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect was called');
  }, []);

  useEffect(() => {
    // console.log('useEffect was called by form change');
  }, [formState]);

  useEffect(() => {
    // console.log('useEffect was called by email change');
  }, [email]);

  return (
    <>
      <h1>Basic form</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='user@email.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {username === 'user' && <Message />}
    </>
  );
};
