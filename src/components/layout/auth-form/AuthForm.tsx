/* eslint-disable no-console */
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput
} from '@mantine/core';
import { upperFirst, useToggle } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { setAuth } from '../../../redux/slices/authSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

export const AuthForm: React.FC<PaperProps> = (
  props: PaperProps
): JSX.Element => {
  // Set up navigation and dispatch
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Set up form logic
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true
    },

    validate: {
      email: (val: string) => (/^\S+@\S+$/u.test(val) ? null : 'Invalid email'),
      password: (val: string | any[]) =>
        val.length <= 6 ? 'Password should include at least 6 characters' : null
    }
  });

  return (
    <Paper radius='md' p='xl' withBorder {...props} className='w-96'>
      <Text size='lg' fw={500}>
        Welcome to Directly, {type} with
      </Text>

      <Group grow mb='md' mt='md'>
        <GoogleButton radius='xl'>Google</GoogleButton>
      </Group>

      <Divider label='Or continue with email' labelPosition='center' my='lg' />

      <form
        onSubmit={form.onSubmit(() => {
          console.log('Sign in...');
          dispatch(setAuth(true));
          navigate('/home');
        })}>
        <Stack>
          {type === 'register' && (
            <TextInput
              classNames={{
                label: 'mb-1'
              }}
              label='Name'
              placeholder='Your name'
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
              radius='md'
            />
          )}

          <TextInput
            classNames={{
              label: 'mb-1'
            }}
            required
            label='Email'
            placeholder='hello@directly.co.nz'
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
            radius='md'
          />

          <PasswordInput
            classNames={{
              label: 'mb-1'
            }}
            required
            label='Password'
            placeholder='Your password'
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
            radius='md'
          />

          {type === 'register' && (
            <Checkbox
              classNames={{
                inner: 'ml-3'
              }}
              label='I accept terms and conditions'
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue('terms', event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify='space-between' mt='xl'>
          <Anchor
            component='button'
            type='button'
            c='dimmed'
            onClick={() => toggle()}
            size='xs'>
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type='submit' size='xs' variant='filled'>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
