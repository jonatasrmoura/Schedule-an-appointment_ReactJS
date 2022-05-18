import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

type UsersInput = Omit<User, 'id' | 'isAdmin'>;

interface UsersProviderProps {
  children: ReactNode;
}

interface useUsersContext {
  users: User[];
  createUser: (create: UsersInput) => Promise<void>;
}

const UsersContext = createContext<useUsersContext>(
  {} as useUsersContext
);

export function SchedulesProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('users')
    .then(response => setUsers(response.data));
  }, []);

  async function createUser(userInput: UsersInput) {
    const response = await api.post('/users', {
      ...userInput,
    });

    const { data } = response;

    setUsers([
      ...data,
      users,
    ]);
  }

  const value = useMemo(() => ({ users, createUser }), [users]);

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  return context;
}
