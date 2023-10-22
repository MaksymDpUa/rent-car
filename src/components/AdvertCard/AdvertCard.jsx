// import axios from "axios";
// import css from "./AdvertCard.module.css";
import {
  AdvertCardBox,
  AutoImg,
  CarPrice,
  ImageThumb,
  MainInfo,
  Model,
  SecondaryInfo,
} from "./AdvertCard.styled";
export const AdvertCard = ({
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
}) => {
  // console.log(advert)
  const imgUrl = img || photoLink;
    const companyAdress = address.split(",");


  return (
    <AdvertCardBox>
      <ImageThumb>
        <AutoImg src={imgUrl} alt={description} />
      </ImageThumb>
      <MainInfo>
        <Model>
          {make} <span>{model}</span>, {year}
        </Model>
        <CarPrice>{rentalPrice}</CarPrice>
      </MainInfo>
      <SecondaryInfo>
        <p>
          <span>{companyAdress[1].trim()}</span>
          <span>{companyAdress[2].trim()}</span>
          <span>{rentalCompany}</span>
          <span>{type}</span>
          <span>{model}</span>
          <span>{mileage}</span>
          <span>{functionalities[0]}</span>
        </p>
      </SecondaryInfo>
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
