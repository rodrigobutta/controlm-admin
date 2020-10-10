import axios from 'axios';
import { User } from '../../model/user';
import { delay } from '../shared';

export interface LoginPayload {
  username: string;
  password: string;  
}

export interface LoginResponse {
  username: string;
  token: string;
  version: string;
}

export interface Error {
  message: string;  
}

export interface LoginError {
  errors: Error[];  
}

export const AuthService = {
  login: ({ username, password }: LoginPayload): Promise<User> => {
    const payload: LoginPayload = {
      username: username,
      password: password
    };

    return axios.post(`http://localhost:3001/session/login`, { ...payload })
      .then((res: { data: LoginResponse; }) => {
        const { username, token} = res.data;
        const resUser: User = { username: username, token: token };
        return Promise.resolve(resUser);
      })
      .catch((err: { response: { data: LoginError; }}) => {
        return Promise.reject(err.response.data);   
      } );

  },
  logout: () => delay(100).then(() => true),
};
