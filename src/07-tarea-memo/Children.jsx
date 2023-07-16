import React from 'react';

// React.memo needed to memoize this component, because props will be always the same
// so this helps to avoid re-rendering

// eslint-disable-next-line react/display-name
export const Children = React.memo(({ number, increment }) => {
  console.log('  I regenerated :(  ');

  return (
    <button className='btn btn-primary mr-3' onClick={() => increment(number)}>
      {number}
    </button>
  );
});
