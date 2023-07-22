import { render, screen } from '@testing-library/react';
import { ToDoApp } from '../../src/08-useReducer';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('tests on <ToDoApp />', () => {
  useTodos.mockReturnValue({
    toDos: [
      { id: 1, description: 'to do #1', done: false },
      { id: 2, description: 'to do #2', done: true },
    ],
    toDosCount: 2,
    pendingToDosCount: 1,
    handleNewToDo: jest.fn(),
    handleRemoveToDo: jest.fn(),
    handleToggleToDo: jest.fn(),
  });

  test('should show component on initial state', () => {
    render(<ToDoApp />);

    expect(screen.getByText('to do #1')).toBeTruthy();
    expect(screen.getByText('to do #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
