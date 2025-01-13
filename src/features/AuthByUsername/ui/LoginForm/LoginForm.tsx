import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { FormEvent, useCallback, useState } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button/Button';
import { useMutation } from '@tanstack/react-query';
import { loginByUsername } from '../../api/loginByUsername/loginByUsername';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localstorage';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationKey: ['loginByUsername'],
    mutationFn: loginByUsername,
    onSuccess: ({ data }) => {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, data.id);
      onSuccess();
    },
  });

  const onChangeName = useCallback((value: string) => {
    setName(value);
  }, []);

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({
      username,
      password,
    });
  };

  return (
    <div className={classNames(cn['LoginForm'], {}, [className])}>
      <form onSubmit={onSubmit}>
        <VStack gap="16" align="stretch">
          <Input
            value={username}
            onChange={onChangeName}
            placeholder="user"
            label="Username"
          />
          <Input
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="*****"
            label="Password"
          />
          <Button type="submit">Send</Button>
        </VStack>
      </form>
    </div>
  );
};

export default LoginForm;
