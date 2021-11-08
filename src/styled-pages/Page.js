import styled, { css } from 'styled-components';

export const Page = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${({ login }) =>
    login &&
    css`
      flex-direction: column;
    `}
`;
