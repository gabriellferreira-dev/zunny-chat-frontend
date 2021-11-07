import { Background } from '../styled-components/Background';
import Logo from '../assets/images/logo.png';
import { Form } from '../styled-components/Form';
import { StyledRegister } from '../styled-pages/Register';
import BgImage from '../assets/images/bg2.jpg';

export default function Register() {
  return (
    <StyledRegister>
      <Background bg={BgImage} />
      <img src={Logo} alt='Zunny logo' />
      <Form>
        <input type="text" required placeholder="Nome" />
        <input type="text" required placeholder="Sobrenome" />
        <input type="email" required placeholder="E-mail" />
        <input type="password" required placeholder="Senha" />
        <input type="password" required placeholder="Repita a senha" />
        <button type="submit">Cadastrar</button>
      </Form>
    </StyledRegister>
  );
}
