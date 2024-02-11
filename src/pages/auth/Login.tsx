import { AuthForm } from '../../components/auth-form/AuthForm';
import directlyLogo from '../../assets/logo.svg';

const Login: React.FC = (): JSX.Element => {
  return (
    <section
      aria-label='Login Section'
      className='flex flex-col justify-center items-center w-full h-full'>
      <div className='flex justify-between items-center mb-12'>
        <img alt='Directly logo' className='w-14 mr-2' src={directlyLogo} />
        <h1 className='font-thin text-5xl tracking-widest'>Directly</h1>
      </div>
      <AuthForm />
    </section>
  );
};

// EXPORT Login
Login.displayName = 'DIRECTLY | Login';
export default Login;
