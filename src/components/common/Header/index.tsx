import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <Link to='/'>
          <h1>Sandwe World!</h1>
        </Link>
        <Link to='/login'>Login</Link>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
