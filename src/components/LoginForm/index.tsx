import { Link } from 'react-router-dom';
import { Button } from '@/components';

function LoginForm() {
  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <article className='max-w-xs mx-auto py-20'>
      <Link to='/' className='text-center text-2xl'>
        <h2>Sandwe World!</h2>
      </Link>
      <form className='mt-6' onSubmit={handleSumbit}>
        <label htmlFor='email' className='p-2'>
          이메일
        </label>
        <input type='email' placeholder='이메일' id='email' className='w-full border my-2 p-2 rounded' />
        <label htmlFor='password' className='p-2'>
          비밀번호
        </label>
        <input type='password' placeholder='비밀번호' id='password' className='w-full border my-2 p-2 rounded' />
        <Button>로그인</Button>
      </form>
    </article>
  );
}

export default LoginForm;
