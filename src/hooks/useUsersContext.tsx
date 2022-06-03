import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface UserLogged {
  token: string;
  user: User;
}

type UsersInput = Omit<User, 'id' | 'isAdmin'>;
type UsersLoginInput = Omit<User, 'id' | 'isAdmin' | 'name' | 'surname'>;

interface UsersProviderProps {
  children: ReactNode;
}

interface useUsersContext {
  users: User[];
  createUser: (create: UsersInput) => Promise<void>;
  login: (login: UsersLoginInput) => Promise<UserLogged>;
}

const UsersContext = createContext<useUsersContext>(
  {} as useUsersContext
);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('users')
    .then(response => setUsers(response.data.users));
  }, []);

  async function createUser(userInput: UsersInput) {
    const response = await api.post('users', {
      ...userInput,
    });

    const { user } = response.data;

    if (user) {
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      toast.error('Usuário não cadastrado!');
    }

    setUsers([
      user,
      ...users,
    ]);
  }

  async function login(userLoginInput: UsersLoginInput) {
    const response = await api.post('/users/authenticate', {
      ...userLoginInput
    });

    const { token, user } = response.data as UserLogged;

    return {
      token,
      user
    };
  }

  const value = useMemo(() => ({ users, createUser, login }), [users]);

  return (
    <UsersContext.Provider value={value}>
      { children }
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  return context;
}
