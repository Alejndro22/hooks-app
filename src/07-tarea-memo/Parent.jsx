import { useCallback, useState } from 'react';
import { Children } from './Children';

export const Parent = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  // useCallback needed to memoize function
  const increment = useCallback((value) => {
    setValue((preValue) => preValue + value);
  }, []);

  // const increment = (num) => {
  //   setValue(value + num);
  // };

  return (
    <div>
      <h1>Parent</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Children key={n} number={n} increment={increment} />
      ))}
    </div>
  );
};
