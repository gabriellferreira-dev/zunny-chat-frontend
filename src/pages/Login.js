import { Background } from '../styled-components/Background';
import { StyledLogin } from '../styled-pages/Login';
import Logo from '../assets/images/logo.png';
import { Form } from '../styled-components/Form';
import BgImage from '../assets/images/bg1.jpg';

export default function Login() {
  return (
    <StyledLogin>
      <Background bg={BgImage} />
      <img src={Logo} alt='Zunny logo' />
      <Form>
        <input type='email' required placeholder='E-mail' />
        <input type='password' required placeholder='Senha' />
        <button type='submit'>Entrar</button>
      </Form>
    </StyledLogin>
  );
}
