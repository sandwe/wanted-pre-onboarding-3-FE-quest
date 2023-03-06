import Sidebar from '../Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section>
      <h2 className='sr-only'>메뉴 및 콘텐츠</h2>
      <Sidebar />
      {children}
    </section>
  );
}

export default Layout;
