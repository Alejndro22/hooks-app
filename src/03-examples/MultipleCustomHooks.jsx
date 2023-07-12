import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://rickandmortyapi.com/api/character/1'
  );

  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>Rick n Morty API</h1>
      <hr />
    </>
  );
};
