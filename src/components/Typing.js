import { TypingAnimation } from '../styled-components/TypingAnimation';
import { BsPersonFill } from 'react-icons/bs';

export default function Typing() {
  return (
    <TypingAnimation>
      <BsPersonFill />
      <div>
        <div />
        <div />
        <div />
      </div>
    </TypingAnimation>
  );
}
