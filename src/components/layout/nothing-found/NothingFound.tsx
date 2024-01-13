import { Button, Container, Group, Text, Title } from '@mantine/core';
import { Illustration } from './Illustration';
import { Link } from 'react-router-dom';
import classes from './NothingFound.module.css';

export function NothingFound() {
  return (
    <Container className='w-full'>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text
            c='dimmed'
            size='lg'
            ta='center'
            className={classes.description}>
            The page you are trying to open does not exist. You may have
            mistyped the address, or the page has been moved to another URL. If
            you think this is an error contact support.
          </Text>
          <Group justify='center'>
            <Link to={`/`}>
              <Button size='md'>Take me back to home page</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
}
