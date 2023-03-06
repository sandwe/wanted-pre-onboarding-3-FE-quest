import { Link } from 'react-router-dom';
import { Button } from '@/components';

function LoginForm() {
  return (
    <article>
      <Link to='/'>
        <h2>Sandwe World!</h2>
      </Link>
      <form>
        <label htmlFor='email'>이메일</label>
        <input type='email' placeholder='이메일' id='email' />
        <label htmlFor='password'>비밀번호</label>
        <input type='password' placeholder='비밀번호' id='password' />
        <Button>로그인</Button>
      </form>
    </article>
  );
}

export default LoginForm;
