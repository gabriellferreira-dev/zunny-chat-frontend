import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  height: 200px;

  ${({ register }) =>
    register &&
    css`
      height: 350px;
    `}

  & input {
    padding: 5px 10px;
    height: 40px;
    border-radius: 5px;
    border: none;
    width: 300px;
    background: rgba(255, 255, 255, 0.2);
    color: #f0f0f0;
    transition: outline 0.1s ease;
    outline: none;

    ${({ login }) =>
      login &&
      css`
        background: rgba(0, 0, 0, 0.1);
      `}

    &.error {
      outline-color: #e65d25;
      outline-style: solid;
      outline-width: 2px;
      color: #e65d25;
    }

    &:focus {
      outline-color: #faaf18;
      outline-style: solid;
      outline-width: 2px;
    }

    &::placeholder {
      color: #f0f0f0;
    }
  }

  & span {
    color: #e65d25;
    font-size: 1.4rem;
  }

  & button {
    border: none;
    height: 40px;
    width: 150px;
    color: white;
    background: #faaf18;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ status }) =>
      (status === 'registering' || status === 'signin') &&
      css`
        width: 40px;
        border-radius: 50px;
      `}

    ${({ status }) =>
      status === 'success' &&
      css`
        background-color: #88c240;
      `}
  }

  & p {
    text-align: center;
    color: #f0f0f0;

    & a {
      &:visited {
        color: #f0f0f0;
      }
    }
  }
`;
