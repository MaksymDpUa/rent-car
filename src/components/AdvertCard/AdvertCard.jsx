// import axios from "axios";
// import css from "./AdvertCard.module.css";
import sprite from 'asset/images/sprite.svg';
import { AdvertDetails } from 'components/AdvertDetails/AdvertDetails';
import { formatMileage } from 'helpers/utils/formatMileage';
import Modal from 'Modal/Modal';
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
export const AdvertCard = ({ car }) => {
  // console.log(advert)
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
  } = car;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(showModal => !showModal);
  const imgUrl = img || photoLink;
  const companyAdress = address.split(',');
  const formatedMileage = formatMileage(mileage);

  return (
    <AdvertCardBox>
      <ImageThumb>
        <AutoImg src={imgUrl} alt={description} />{' '}
        <FavoriteBtn>
          <FavoriteIcon>
            <use xlinkHref={`${sprite}#icon-heart`}></use>
          </FavoriteIcon>
        </FavoriteBtn>
      </ImageThumb>
      {/* onClick={() => toggleFavorite(carInfo.id)}favorite={favorite} */}
      <MainInfo>
        <Model>
          {make} <span>{model}</span>, {year}
        </Model>
        <CarPrice>{rentalPrice}</CarPrice>
      </MainInfo>
      <SecondaryInfo>
        <Details>
          {companyAdress[1].trim()} <Separator> | </Separator>
          {companyAdress[2].trim()} <Separator> | </Separator> {rentalCompany}
        </Details>
        <Details>
          {type} <Separator> | </Separator> {model} <Separator> | </Separator>
          {formatedMileage} <Separator> | </Separator> {functionalities[0]}
        </Details>
        {/* <p>
          <span>{companyAdress[1].trim()}</span>
          <span>{companyAdress[2].trim()}</span>
          <span>{rentalCompany}</span>
          <span>{type}</span>
          <span>{model}</span>
          <span>{formatedMileage}</span>
          <span>{functionalities[0]}</span>
        </p> */}
      </SecondaryInfo>
      <DetailsBtn onClick={toggleModal}>Learn more</DetailsBtn>
      {showModal && (
        <Modal onClose={toggleModal}>
          <AdvertDetails car={car} />
          {/* <ModalContainer onClose={toggleModal}> */}
          {/* <PopUpContent carInfo={carInfo} /> */}
          {/* </ModalContainer> */}
        </Modal>
      )}
    </AdvertCardBox>
  );
};

// "id": 9582,
//         "year": 2008,
//         "make": "Buick",
//         "model": "Enclave",
//         "type": "SUV",
//         "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
//         "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//         "fuelConsumption": "10.5",
//         "engineSize": "3.6L V6",
//         "accessories": [
//             "Leather seats",
//             "Panoramic sunroof",
//             "Premium audio system"
//         ],
//         "functionalities": [
//             "Power liftgate",
//             "Remote start",
//             "Blind-spot monitoring"
//         ],
//         "rentalPrice": "$40",
//         "rentalCompany": "Luxury Car Rentals",
//         "address": "123 Example Street, Kiev, Ukraine",
//         "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//         "mileage": 5858
