export interface User {
  username: string;
  token?: string;
}

export const DEFAULT_USER: User = { username: 'GUEST' };
