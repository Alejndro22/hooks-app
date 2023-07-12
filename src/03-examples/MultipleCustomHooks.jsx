import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1, 1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  // if data has values, destructure name and species
  // useful to  avoids errors when working with potentially null or undefined values
  const { name, species } = !!data && data;

  return (
    <>
      <h1>Rick n Morty API</h1>
      <hr />

      {isLoading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{name}</p>
          <footer className='blockquote-footer'>{species}</footer>
        </blockquote>
      )}
      <button
        className='btn btn-primary mr-2'
        disabled={isLoading || counter == 1}
        onClick={() => decrement()}
      >
        Previous quote
      </button>

      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
