import Sidebar from '../Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section className='flex min-h-[100vh]'>
      <h2 className='sr-only'>메뉴 및 콘텐츠</h2>
      <Sidebar />
      <div className='grow-[1] px-4 py-6'>{children}</div>
    </section>
  );
}

export default Layout;
