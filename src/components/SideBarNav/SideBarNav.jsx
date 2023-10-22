import { useLocation } from 'react-router-dom';
import { NavList, NavListItem, NavListLink } from './SideBarNav.styled';

export const SideBarNav = () => {
  const location = useLocation();
  const handleOnClick = e => {
    if (e.target.href.includes(location.pathname)) {
      console.log('cov');
      e.preventDefault();
      return;
    }
    // console.log(location);
    // console.log(e.target.href);
    // if (location.pathname.includes())
  };

  return (
    <NavList>
      <NavListItem>
        <NavListLink to="/">Home Page</NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink to="/catalog" onClick={handleOnClick}>
          Catalog
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink to="/favorites" onClick={handleOnClick}>
          Favorites
        </NavListLink>
      </NavListItem>
    </NavList>
  );
};
