import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'daqueme',
  email: 'daqueme@email.com',
};

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hello: 'world', user }}>
      {children}
    </UserContext.Provider>
  );
};
