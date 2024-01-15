import { Button, Container, Group, Text, Title } from '@mantine/core';
import { Illustration } from './Illustration';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <Container className='w-full p-4'>
      <div className={styles.inner}>
        <Illustration className={styles.image} />
        <div className={styles.content}>
          <Title className={styles.title}>Nothing to see here</Title>
          <Text c='dimmed' size='lg' ta='center' className={styles.description}>
            The page you are trying to open does not exist. You may have
            mistyped the address, or the page has been moved to another URL. If
            you think this is an error contact support.
          </Text>
          <Group justify='center'>
            <Link to={`/home`}>
              <Button size='md'>Take me back to the home page</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
};

// EXPORT NotFound
NotFound.displayName = 'DIRECTLY | NotFound';
export default NotFound;
