import { AuthForm } from '../../components/layout/auth-form/AuthForm';

const Home: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Home Section'>
      <h1 className='text-4xl mb-3'>Home</h1>
      <AuthForm />
    </section>
  );
};

// EXPORT Home
Home.displayName = 'DIRECTLY | Home';
export default Home;
