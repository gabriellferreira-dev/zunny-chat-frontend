import styled from 'styled-components';

export const StyledSideBar = styled.div`
  width: 500px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  left: 0;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #f0f0f0;
    font-size: 2rem;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 21;

    & img {
      width: 40px;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #f9f9f9;
    font-size: 1.6rem;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    & input {
      width: 100%;
      height: 30px;
      border-radius: 50px;
      padding: 0 10px;
      border: 0.5px solid rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
    }
  }

  & > div:nth-child(3) {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    & div {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #6ac7b3;
      font-size: 1.6rem;
    }
  }
`;
