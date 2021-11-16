import styled, { css } from 'styled-components';

export const MessageContainer = styled.div`
  padding: 0 5px;
  background: #6ac7b3;
  border-radius: 5px 0px 5px 5px;
  margin: 3px 0;
  max-width: 60%;
  min-width: 100px;
  align-self: flex-start;
  transform: scaleX(-1);
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5);

  & p {
    overflow-wrap: break-word;
    width: 100%;
    padding-right: 50px;
    font-size: 1.4rem;
    font-weight: 300;
  }

  & p,
  span {
    transform: scaleX(-1);
  }

  & span {
    &:nth-child(1) {
      align-self: flex-end;
      color: #f5f5f5;
      font-size: 1.2rem;
      font-weight: 400;
    }

    bottom: 0;
    font-size: 1rem;
    align-self: flex-start;
    color: #e6e6e6;
  }

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid #6ac7b3;
    border-right: 10px solid transparent;
    position: absolute;
    right: -9px;
    top: 0;
  }

  ${({ isCurrentUser }) =>
    isCurrentUser &&
    css`
      transform: scaleX(1);
      right: 0;
      align-self: flex-end;
      margin: 3px 0;

      & p,
      span {
        transform: scaleX(1);
      }

      & span {
        &:nth-child(1) {
          align-self: flex-start;
        }
        align-self: flex-end;
      }
    `}
`;
