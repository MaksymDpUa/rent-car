import { BurgerBtnEl } from './BurgerBtn.styled';
import { RxHamburgerMenu } from 'react-icons/rx';

export const BurgerBtn = ({ addSideBar }) => {
  const handleOnClick = () => addSideBar();
  return (
    <BurgerBtnEl onClick={handleOnClick}>
      <RxHamburgerMenu />
    </BurgerBtnEl>
  );
};
