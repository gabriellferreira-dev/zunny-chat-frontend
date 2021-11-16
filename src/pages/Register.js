import { useEffect, useRef, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Background } from '../styled-components/Background';
import Logo from '../assets/images/logo.png';
import { Form } from '../styled-components/Form';
import BgImage from '../assets/images/bg2.jpg';
import { Spinner } from '../styled-components/Spinner';
import { Page } from '../styled-pages/Page';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../store/Thunks';

export default function Register() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [buttonName, setButtonName] = useState('Cadastrar');
  const [redirectTime, setRedirectTime] = useState(3);

  const dispatch = useDispatch();

  const userState = useSelector((state) => state.User);

  useEffect(() => {
    if (!redirectTime) return false;
    const TIME = 1000;
    const interval = setInterval(() => {
      if (userState.registerStatus === 'registered') {
        setRedirectTime(redirectTime - 1);
      }
    }, TIME);
    return () => clearInterval(interval);
  }, [redirectTime, userState.registerStatus]);

  const emailRef = useRef();
  const passRef = useRef();
  const repeatPassRef = useRef();
  const formRef = useRef();

  const setErrorMessage = (err) => {
    if (err) {
      emailRef.current.classList.add('error');
      setError(err);
    }
  };

  const validatePassword = () => {
    if (
      user?.password &&
      user?.repassword &&
      user?.password !== user?.repassword
    ) {
      setError('Senhas não conferem.');
      passRef.current.classList.add('error');
      repeatPassRef.current.classList.add('error');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });

    if (error) {
      if (name === 'email') {
        emailRef.current.classList.remove('error');
      } else {
        passRef.current.classList.remove('error');
        repeatPassRef.current.classList.remove('error');
      }
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { repassword, ...rest } = user;

    if (!error) {
      dispatch(userRegister(rest));
    }
  };

  useEffect(() => {
    if (userState.registerStatus === 'registered') {
      setButtonName(`Indo para login em ${redirectTime}.`);
    }
  }, [redirectTime, userState.registerStatus]);

  useEffect(() => {
    setErrorMessage(userState?.error);
  }, [userState?.error]);

  if (!redirectTime) return <Redirect to='/login' />;

  return (
    <Page>
      <Background register bg={BgImage} />
      <img src={Logo} alt='Zunny logo' />
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        register
        status={userState.registerStatus}
      >
        <input
          type='text'
          name='name'
          required
          placeholder='Nome'
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          required
          placeholder='Sobrenome'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          ref={emailRef}
          required
          placeholder='E-mail'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          ref={passRef}
          required
          placeholder='Senha'
          minLength='6'
          onChange={handleChange}
          onBlur={validatePassword}
        />
        <input
          type='password'
          name='repassword'
          minLength='6'
          required
          placeholder='Repita a senha'
          onChange={handleChange}
          onBlur={validatePassword}
          ref={repeatPassRef}
        />
        <span>{error}</span>
        <button type='submit'>
          {userState.registerStatus === 'registering' ? (
            <Spinner />
          ) : (
            buttonName
          )}
        </button>
        <p>
          Já possuo cadastro. <Link to='/login'>Login.</Link>
        </p>
      </Form>
    </Page>
  );
}
