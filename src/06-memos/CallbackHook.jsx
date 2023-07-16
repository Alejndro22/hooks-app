import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // When a functional component is re-rendered functions point to different
  // memory location, so it triggers a re-render on children component

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  //Thats why useCallback is useful
  const incrementFunction = useCallback((value) => {
    // Here this way doesn't work because counter value is memoized
    // setCounter(counter + 1);

    // Instead we use the callback for the setState to get the previous
    // value, thats why I always prefer this way to ensure to get the right value
    setCounter((prevCounter) => prevCounter + value);
  }, []);

  useEffect(() => {
    // incrementFunction();
  }, [incrementFunction]);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFunction} />
    </>
  );
};
