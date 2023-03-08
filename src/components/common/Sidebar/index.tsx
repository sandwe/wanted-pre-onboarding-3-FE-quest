import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className='flex flex-col shrink-0 w-80 border-slate-400 border-r min-h-[50vh] max-h-[100%] px-4 py-6'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
}

export default Sidebar;
