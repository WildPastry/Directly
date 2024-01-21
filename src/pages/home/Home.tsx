import directlyLogo from '../../assets/logo.svg';

const Home: React.FC = (): JSX.Element => {
  return (
    <section
      aria-label='Home Section'
      className='h-[calc(100vh-92px)] flex justify-center items-center'>
      <img alt='Directly logo' className='w-96' src={directlyLogo} />
    </section>
  );
};

// EXPORT Home
Home.displayName = 'DIRECTLY | Home';
export default Home;
