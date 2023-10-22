import sprite from 'asset/images/sprite.svg';
import { AdvertDetails } from 'components/AdvertDetails/AdvertDetails';
import { formatMileage } from 'helpers/utils/formatMileage';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import {
  AdvertCardBox,
  AutoImg,
  CarPrice,
  Details,
  DetailsBtn,
  FavoriteBtn,
  FavoriteIcon,
  ImageThumb,
  MainInfo,
  Model,
  SecondaryInfo,
  Separator,
} from './AdvertCard.styled';
export const AdvertCard = ({ car, favorite = false, toggleFavorite }) => {
  const {
    make,
    model,
    img,
    photoLink,
    year,
    rentalPrice,
    description,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    id,
  } = car;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(showModal => !showModal);
  const imgUrl = img || photoLink;
  const companyAdress = address?.split(',') || [];
  const formatedMileage = formatMileage(mileage);
  const functionalitiesDiscription = functionalities
    ? functionalities[0]
    : 'loading';

  return (
    <AdvertCardBox>
      <ImageThumb>
        <AutoImg src={imgUrl} alt={description} />{' '}
        <FavoriteBtn onClick={() => toggleFavorite(id)}>
          <FavoriteIcon favorite={favorite}>
            <use xlinkHref={`${sprite}#icon-heart`}></use>
          </FavoriteIcon>
        </FavoriteBtn>
      </ImageThumb>
      <MainInfo>
        <Model>
          {make} <span>{model}</span>, {year}
        </Model>
        <CarPrice>{rentalPrice}</CarPrice>
      </MainInfo>
      <SecondaryInfo>
        <Details>
          {companyAdress[1]} <Separator> | </Separator>
          {companyAdress[2]} <Separator> | </Separator> {rentalCompany}
        </Details>
        <Details>
          {type} <Separator> | </Separator> {model} <Separator> | </Separator>
          {formatedMileage} <Separator> | </Separator>{' '}
          {functionalitiesDiscription}
        </Details>
      </SecondaryInfo>
      <DetailsBtn onClick={toggleModal}>Learn more</DetailsBtn>
      {showModal && (
        <Modal onClose={toggleModal}>
          <AdvertDetails car={car} />
        </Modal>
      )}
    </AdvertCardBox>
  );
};
