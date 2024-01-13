import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <header aria-label='Header Section'>
      <Link to={`/`}>DIRECTLY</Link>
      <div>
        <p>Help</p>
      </div>
    </header>
  );
};

// EXPORT Header
Header.displayName = 'DIRECTLY | Header';
export default Header;
