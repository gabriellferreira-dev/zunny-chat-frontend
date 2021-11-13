import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ icon }) =>
    icon &&
    css`
      font-size: 3rem;
      border-radius: 50%;
      border: none;
      color: #676767;
    `}

  ${({ send }) =>
    send &&
    css`
      background-color: #6ac7b3;
      color: white;
    `}
`;
