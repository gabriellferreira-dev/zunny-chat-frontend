import { Link, Redirect } from 'react-router-dom';
import { Background } from '../styled-components/Background';
import { StyledLogin } from '../styled-pages/Login';
import Logo from '../assets/images/logo.png';
import { Form } from '../styled-components/Form';
import BgImage from '../assets/images/bg1.jpg';
import { useRef, useState } from 'react';
import { Spinner } from '../styled-components/Spinner';

export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const emailRef = useRef();
  const passRef = useRef();

  const setStatus = (status, options) => {
    const timeOut = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);

    setTimeout(() => {
      setLoginStatus(status);

      if (options?.error.match(/senha/i)) {
        passRef.current.classList.add('error');
      }
      setError(options?.error);
    }, timeOut);
  };

  const getUser = async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) {
      setStatus('', { error: data.error });
    }

    if (response.ok) {
      setStatus('success');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });

    if (error) {
      setError('');

      if (name === 'password') {
        passRef.current.classList.remove('error');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error) {
      setLoginStatus('signin');
      getUser();
    }
  };

  if (loginStatus === 'success') return <Redirect to='/' />;

  return (
    <StyledLogin>
      <Background login bg={BgImage} />
      <img src={Logo} alt='Zunny logo' />
      <Form onSubmit={handleSubmit} status={loginStatus} login>
        <input
          type='email'
          name='email'
          required
          placeholder='E-mail'
          onChange={handleChange}
          ref={emailRef}
        />
        <input
          type='password'
          name='password'
          required
          placeholder='Senha'
          onChange={handleChange}
          ref={passRef}
        />
        {error && <span>{error}</span>}
        <button type='submit'>
          {loginStatus === 'signin' ? <Spinner /> : 'Entrar'}
        </button>
        <p>
          Não possuo cadastro. <Link to='/register'>Cadastrar.</Link>
        </p>
      </Form>
    </StyledLogin>
  );
}
