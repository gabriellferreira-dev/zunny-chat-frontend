import { StyledSideBar } from '../styled-components/SideBar';
import { GoPerson } from 'react-icons/go';
import { FiMoreVertical } from 'react-icons/fi';
import { MdExpandMore } from 'react-icons/md';
import ZunnyIcon from '../assets/images/zunny-icon.png';

export default function SideBar() {
  return (
    <StyledSideBar>
      <div>
        <GoPerson />
        <img src={ZunnyIcon} alt='zunny icon' />
        <FiMoreVertical />
      </div>
      <div>
        <input
          type='text'
          placeholder='Bucar conversas, contatos ou grupos...'
        />
      </div>
    </StyledSideBar>
  );
}
