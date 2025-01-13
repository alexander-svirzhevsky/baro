import { api } from '@/shared/api/api';
import { LoginForm } from '../../model/types/loginForm';
import { User } from '@/entities/User';

export const loginByUsername = (data: LoginForm) => {
  return api.post<User>('/login', data);
};
