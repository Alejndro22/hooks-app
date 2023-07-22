import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../../src/hooks';

describe('tests on useFetch', () => {
  const urlAPI = 'https://rickandmortyapi.com/api/character/1';
  test(`should return hooks's initial state`, () => {
    const { result } = renderHook(() => useFetch(urlAPI));
    const { data, isLoading, hasError } = result.current;

    expect(data).toBeNull();
    expect(isLoading).toBeTruthy();
    expect(hasError).toBeNull();
  });

  test('should return the desired response', async () => {
    const { result } = renderHook(() => useFetch(urlAPI));

    await waitFor(() => expect(result.current.isLoading).toBeFalsy(), {
      timeout: 2000,
    });

    const { data, isLoading } = result.current;
    expect(isLoading).toBeFalsy;

    // expected structure
    expect(data).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      status: expect.any(String),
      species: expect.any(String),
      type: expect.any(String),
      gender: expect.any(String),
      origin: expect.any(Object),
      location: expect.any(Object),
      image: expect.any(String),
      episode: expect.any(Array),
      url: expect.any(String),
      created: expect.any(String),
    });
  });
});
