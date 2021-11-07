import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & input {
    padding: 5px 10px;
    height: 40px;
    border-radius: 5px;
    border: none;
    width: 300px;
    background: rgba(255, 255, 255, 0.2);
    margin-bottom: 10px;
    color: #f0f0f0;
    transition: outline 0.1s ease;
    outline: none;

    &:focus {
      outline-color: #faaf18;
      outline-style: solid;
      outline-width: 2px;
    }

    &::placeholder {
      color: #f0f0f0;
    }
  }

  & button {
    border: none;
    height: 40px;
    width: 150px;
    color: white;
    background: #faaf18;
    border-radius: 5px;
  }
`;
