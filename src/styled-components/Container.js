import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${({ wallpaper }) =>
    wallpaper &&
    css`
      background: linear-gradient(
          0deg,
          rgba(240, 240, 240, 0.8),
          rgba(240, 240, 240, 0.8)
        ),
        url(${wallpaper});
        background-size: 400px;
    `}
`;
