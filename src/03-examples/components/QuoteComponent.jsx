import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const QuoteComponent = ({ name, species }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <>
      <blockquote
        className='blockquote text-center'
        style={{ display: 'flex' }}
      >
        <p ref={pRef} className='mb-2'>
          {name}
        </p>
        <footer className='blockquote-footer'>{species}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

QuoteComponent.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
