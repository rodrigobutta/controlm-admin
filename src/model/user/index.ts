export interface User {
  name: string;
  token?: string;
}

export const DEFAULT_USER: User = { name: 'GUEST' };
