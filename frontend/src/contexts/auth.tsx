import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import history from './history';
import api from '../services/api';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await localStorage.getItem("AUTH:user");
      const storagedToken = await localStorage.getItem("AUTH:token");

      // await new Promise(resolve => setTimeout(resolve, 2000));

      if (storageUser && storagedToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }

      setLoading(false);
      // history.push('/dashboard');
    }
    loadStorageData();
  }, [])

  async function signUp(name: string, email: string, password: string) {
    try {
      const data = {
        name,
        email,
        password,
      }

      const response = await api.post('users', data).then(() => {
        signIn(email, password);
      }).catch((error) => {
        toast.error(error);
      });

      console.log(response);


    } catch (error) {
      if (error.response?.data) {
        console.log(error.response.data.error);
      }
    }
  }

  // async function loadStorageUser(user: object, token: string) {
  //   await localStorage.setItem("AUTH:user", JSON.stringify(user));
  //   await localStorage.setItem("AUTH:token", token);
  // }

  async function signIn(email: string, password: string) {
    try {
      const data = {
        email,
        password,
      };

      const response = await api.post('sessions', data);

      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      await localStorage.setItem("AUTH:user", JSON.stringify(user));
      await localStorage.setItem("AUTH:token", token);

      setUser(user);

      history.push('/');
      toast.info(`É muito bom ter você ${user?.name}!`);
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response.data.error);
      }
    }
  }

  async function signOut() {
    localStorage.clear();
    toast.info('Foi muito bom ter você aqui, até a próxima.')
    setUser(null);
    setLoading(false);

    history.push('/');
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      signIn,
      signUp,
      signOut,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}