import { BgLogin } from '../styled-components/BgLogin';
import { StyledLogin } from '../styled-pages/Login';
import Logo from '../assets/images/logo.png';
import { Form } from '../styled-components/Form';

export default function Login() {
  return (
    <StyledLogin>
      <BgLogin />
      <img src={Logo} alt='Zunny logo' />
      <Form>
        <input type="email" required placeholder="E-mail" />
        <input type="password" required placeholder="Senha" />
        <button type="submit">Entrar</button>
      </Form>
    </StyledLogin>
  );
}
