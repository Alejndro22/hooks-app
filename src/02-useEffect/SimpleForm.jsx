import { useEffect, useState } from 'react';

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
    console.log('useEffect was called');
  });

  return (
    <>
      <h1>Formulario simple</h1>
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
    </>
  );
};
