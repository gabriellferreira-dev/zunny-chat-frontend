import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

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
      flex-direction: column;
      justify-content: end;
      overflow: hidden;

      & > div:nth-child(1) {
        flex-direction: column;
        display: flex;
        max-height: 100%;
        width: 100%;
        overflow: hidden;
        overflow-y: auto;
        padding: 0 60px 5px;

        & div {
          display: flex;

          & svg {
            align-self: flex-end;
            background-color: yellow;
            border-radius: 50%;
            font-size: 3rem;
          }
        }
      }

      & > div:nth-child(2) {
        position: absolute;
        left: 3px;
      }
    `}
`;
