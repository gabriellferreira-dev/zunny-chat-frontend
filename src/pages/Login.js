import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from '../styled-components/Background';
import Logo from '../assets/images/logo.png';
import { Form } from '../styled-components/Form';
import BgImage from '../assets/images/bg1.jpg';
import { useEffect, useRef, useState } from 'react';
import { Spinner } from '../styled-components/Spinner';
import { Page } from '../styled-pages/Page';
import { userLogin } from '../store/Thunks';

export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const userState = useSelector((state) => state.User);

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passRef = useRef();

  const setErrorMessage = (err) => {
    if (err && err.match(/senha/i)) {
      passRef.current.classList.add('error');
    }
    setError(err);
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

    dispatch(userLogin(user));
  };

  console.log(userState)

  useEffect(() => {
    setErrorMessage(userState?.error);
  }, [userState?.error]);

  if (userState.loginStatus === 'logged') return <Redirect to='/' />;

  return (
    <Page login>
      <Background login bg={BgImage} />
      <img src={Logo} alt='Zunny logo' />
      <Form onSubmit={handleSubmit} status={userState.loginStatus} login>
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
          {userState.loginStatus === 'signin-in' ? <Spinner /> : 'Entrar'}
        </button>
        <p>
          Não possuo cadastro. <Link to='/register'>Cadastrar.</Link>
        </p>
      </Form>
    </Page>
  );
}
