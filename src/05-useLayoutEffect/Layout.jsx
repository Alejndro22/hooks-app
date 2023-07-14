import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, QuoteComponent } from '../03-examples/components';

export const Layout = () => {
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
        <LoadingQuote />
      ) : (
        <QuoteComponent name={name} species={species} />
      )}

      <button
        className='btn btn-primary mr-2 mb-1'
        disabled={isLoading || counter == 1}
        onClick={() => decrement()}
      >
        Previous quote
      </button>

      <button
        className='btn btn-primary mb-1'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
