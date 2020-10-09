import axios from 'axios';
import { User } from '../../model/user';
import { delay } from '../shared';

export const AuthService = {
  login: ({ username, password }: { username: string; password: string }) => {
    const payload = {
      username: username,
      password: password
    };

    return axios.post(`https://jsonplaceholder.typicode.com/users`, { payload })
      .then((res: { data: any; }) => {
        console.log(res);
        console.log(res.data);

        const resUser: User = { name: 'melisa.beraldo', token: '11111111111111' };
        return Promise.resolve(resUser);

        // return username === 'melisa.beraldo' && password === 'Bengieteamo18' ? { name: 'melisa.beraldo', token: '11111111111111' } : Promise.reject(false);
      });

  },
  logout: () => delay(300).then(() => true),
};
