import { useState } from 'react';

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <h1>Counter 3: {counter3}</h1>
      <hr />

      {/* // modify only one property from my state */}
      <button
        className='btn btn-light'
        onClick={() =>
          setCounter((prevState) => ({
            ...prevState, // Spread previous state attributes
            counter1: counter1 + 1, // Update the desired attribute
          }))
        }
      >
        +1
      </button>
    </>
  );
};
