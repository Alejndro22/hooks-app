import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

// mock custom hook
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('tests on <MultipleCustomHooks.test />', () => {
  // mock useCounter hook, and it's function increment
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  // reset mock initial state before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should display component by default ', () => {
    // mock hook return value at initial state
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Rick n Morty API'));
    expect(screen.getByText('Loading...'));

    const prevButton = screen.getByRole('button', { name: 'Previous quote' });
    const nextButton = screen.getByRole('button', { name: 'Next quote' });

    expect(prevButton.disabled).toBeTruthy();
    expect(nextButton.disabled).toBeTruthy();
  });

  test('should show <QuoteComponent />', () => {
    // mock hook return value after API response
    useFetch.mockReturnValue({
      data: { name: 'Morty', species: 'Human' },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Morty')).toBeTruthy();
    expect(screen.getByText('Human')).toBeTruthy();

    const prevButton = screen.getByRole('button', { name: 'Previous quote' });
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    //Previous button to be truthy because shouln't be able to go back When component is mounted
    expect(prevButton.disabled).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should call increment function', () => {
    useFetch.mockReturnValue({
      data: { name: 'Morty', species: 'Human' },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    // After click it should call increment function from useCounter hook
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
