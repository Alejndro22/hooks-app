import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('tests on <LoginPage />', () => {
  test('should render component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('test-span');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should call setUser when button is clicked', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button', { name: 'Set user' });
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'daqueme',
      email: 'daqueme@email.com',
    });

    // screen.debug();
  });
});
