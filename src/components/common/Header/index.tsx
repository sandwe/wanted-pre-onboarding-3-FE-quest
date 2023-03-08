import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='bg-slate-800 flex justify-between px-6 py-4 text-white text-lg '>
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
