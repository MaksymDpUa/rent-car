import { useLocalStorage } from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { AdvertCard } from '../AdvertCard/AdvertCard';
import { AdvertsListEl } from './AdvertList.styled';

export const AdvertList = ({ catalog }) => {
  const [favorites, setFavorites] = useLocalStorage('ids', []);

  const checkIncludes = value => favorites.includes(value);
  const toggleFavorite = id => {
    if (!~favorites.indexOf(id)) {
      setFavorites(prevValue => [...prevValue, id]);
      return;
    }

    setFavorites(prevValue =>
      favorites.filter(favoriteAdvertId => favoriteAdvertId !== id)
    );
  };

  return (
    <AdvertsListEl>
      {catalog?.map(advert => {
        return (
          <AdvertCard
            key={nanoid()}
            car={advert}
            favorite={checkIncludes(advert.id)}
            toggleFavorite={toggleFavorite}
          />
        );
      })}
    </AdvertsListEl>
  );
};
