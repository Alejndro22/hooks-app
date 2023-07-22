import { fireEvent, render, screen } from '@testing-library/react';
import { ToDoItem } from '../../src/08-useReducer/ToDoItem';

describe('Tests on <ToDoItem />', () => {
  const toDo = {
    id: 1,
    description: 'Soul stone',
    done: false,
  };

  const mockonRemoveTask = jest.fn();
  const mockOnToggleToDo = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should show toDo when isnt completed', () => {
    render(
      <ToDoItem
        toDo={toDo}
        onRemoveTask={mockonRemoveTask}
        onToggleToDo={mockOnToggleToDo}
      />
    );
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span-test');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should show toDo when is completed', () => {
    toDo.done = true;
    render(
      <ToDoItem
        toDo={toDo}
        onRemoveTask={mockonRemoveTask}
        onToggleToDo={mockOnToggleToDo}
      />
    );

    const spanElement = screen.getByLabelText('span-test');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should call onToggleToDo when onClick()', () => {
    render(
      <ToDoItem
        toDo={toDo}
        onRemoveTask={mockonRemoveTask}
        onToggleToDo={mockOnToggleToDo}
      />
    );

    // After click it should call onToggleToDo function
    const spanElement = screen.getByLabelText('span-test');
    fireEvent.click(spanElement);
    expect(mockOnToggleToDo).toHaveBeenCalledWith(toDo.id);
  });

  test('should call mockonRemoveTask when onClick()', () => {
    render(
      <ToDoItem
        toDo={toDo}
        onRemoveTask={mockonRemoveTask}
        onToggleToDo={mockOnToggleToDo}
      />
    );

    // After click it should call mockonRemoveTask function
    const nextButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(nextButton);
    expect(mockonRemoveTask).toHaveBeenCalledWith(toDo.id);
  });
});
