import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Login, Signup, NotFound } from '@/pages';
import { Header } from '@/components';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route element={<Header />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
