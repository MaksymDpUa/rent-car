import { BurgerBtnEl, RxHamburgerMenuEl } from './BurgerBtn.styled';
// import { RxHamburgerMenuEl } from 'react-icons/rx';

export const BurgerBtn = ({ addSideBar }) => {
  const handleOnClick = () => addSideBar();
  return (
    <BurgerBtnEl onClick={handleOnClick}>
      <RxHamburgerMenuEl />
    </BurgerBtnEl>
  );
};
