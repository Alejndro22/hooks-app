import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('tests on <MultipleCustomHooks.test />', () => {
  test('should display component by default ', () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Rick n Morty API'));
    expect(screen.getByText('Loading...'));

    const prevButton = screen.getByRole('button', { name: 'Previous quote' });
    const nextButton = screen.getByRole('button', { name: 'Previous quote' });

    expect(prevButton.disabled).toBeTruthy();
    expect(nextButton.disabled).toBeTruthy();

    // screen.debug();
  });
});
