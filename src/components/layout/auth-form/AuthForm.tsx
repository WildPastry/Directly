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
import { useForm } from '@mantine/form';

export function AuthForm(props: PaperProps) {
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
    <Paper radius='md' p='xl' withBorder {...props}>
      <Text size='lg' fw={500}>
        Welcome to Directly, {type} with
      </Text>

      <Group grow mb='md' mt='md'>
        <GoogleButton radius='xl'>Google</GoogleButton>
      </Group>

      <Divider label='Or continue with email' labelPosition='center' my='lg' />

      <form
        onSubmit={form.onSubmit(() => {
          console.log('submit form');
        })}>
        <Stack>
          {type === 'register' && (
            <TextInput
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
            required
            label='Email'
            placeholder='hello@directly.dev'
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
            radius='md'
          />

          <PasswordInput
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
          <Button type='submit' radius='xl'>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
