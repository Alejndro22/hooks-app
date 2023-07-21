import { fireEvent, render, screen } from '@testing-library/react';
import { ToDoForm } from '../../src/08-useReducer/ToDoForm';

describe('tests on <ToDoForm />', () => {
  const mockOnNewTask = jest.fn();

  test('should display form at initial state', () => {
    render(<ToDoForm onNewTask={mockOnNewTask} />);

    const input = screen.getByRole('textbox');

    expect(input.value).toBe('');
  });

  test('should type value on input if state changed', () => {
    const inputValue = 'testing';

    render(<ToDoForm onNewTask={mockOnNewTask} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe('testing');
  });

  test('should call onNewTask when form submitted', () => {
    const inputValue = 'testing';
    render(<ToDoForm onNewTask={mockOnNewTask} />);

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });

    const form = screen.getByLabelText('form-test');
    fireEvent.submit(form);

    expect(mockOnNewTask).toHaveBeenCalled();
  });
});
