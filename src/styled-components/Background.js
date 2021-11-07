import styled, { css } from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;

  ${({ bg }) =>
    bg &&
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
