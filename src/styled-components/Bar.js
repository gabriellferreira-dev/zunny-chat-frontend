import styled, { css } from 'styled-components';

const Bar = styled.div`
  width: 100%;
  min-height: 60px;
  height: 60px;
  background: #f0f0f0;
  padding: 10px;
  z-index: 20;

  ${({ top }) =>
    top &&
    css`
      box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
    `}
`;

export default Bar;
