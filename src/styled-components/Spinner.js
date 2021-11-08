import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #46c3e6;
  animation: ${spin} 1s linear infinite;
`;
