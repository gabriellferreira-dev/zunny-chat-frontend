import styled from 'styled-components';

import MaleAvatar from '../assets/images/man-person.png';

export const UserStatusElipse = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #55ff00;
  box-sizing: border-box;

  margin-right: 5px;
  background: url(${MaleAvatar});
  background-size: cover;
  background-position: center;
`;
