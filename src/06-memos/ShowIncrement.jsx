import React from 'react';

// Here I use React.memo again, because is useful to memoize this comonent
// to prevent re-rendering if props don't change, and since the same function
// is called (because on the parent useCallback is used) it points to the same
// memory location

// eslint-disable-next-line react/display-name
export const ShowIncrement = React.memo(({ increment }) => {
  console.log('i regenerated :(');

  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});
