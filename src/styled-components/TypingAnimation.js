import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0%, 100% { 
    transform: translateY(3px);
  }
  50% {
    transform: translateY(-3px);
  }
`;

export const TypingAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 2rem;
  background-color: #e0e0e0;
  padding: 3px;
  color: #fff;
  border-radius: 50%;
  margin: 3px 0;

  & > div {
    display: flex;
    position: absolute;

    & div {
      position: relative;
      width: 5px;
      height: 5px;
      margin: 0 1px;
      border-radius: 50%;
      background-color: #88c240;
      animation: ${animation} 1s linear infinite;

      &:nth-child(1) {
        animation-delay: 0.3s;
      }
      &:nth-child(2) {
        animation-delay: 0.7s;
      }
    }
  }
`;
