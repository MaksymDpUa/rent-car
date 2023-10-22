import { IoMdClose } from 'react-icons/io';
import { CloseBtnEl } from './CloseBtn.styled';

export const CloseBtn = ({ removeSideBar }) => {
  const handleOnClick = () => removeSideBar();
  return (
    <CloseBtnEl onClick={handleOnClick}>
      <IoMdClose />
    </CloseBtnEl>
  );
};
