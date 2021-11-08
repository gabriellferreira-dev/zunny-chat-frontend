import styled, { css } from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;

  ${({ login, bg }) =>
    login &&
    css`
      background: linear-gradient(
          0deg,
          rgba(70, 195, 230, 0.8),
          rgba(70, 195, 230, 0.8)
        ),
        url(${bg});
    `}

  ${({ register, bg }) =>
    register &&
    css`
      background: linear-gradient(
          0deg,
          rgba(230, 93, 37, 0.5),
          rgba(230, 93, 37, 0.5)
        ),
        url(${bg});
    `}

  filter: blur(2px);
  background-size: cover;
  background-position: center;
  position: absolute;
  transform: scale(1.1);
  z-index: -1;
`;
