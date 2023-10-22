import { nanoid } from "nanoid";
import {
  FieldLabel,
  InputsThumb,
  SearchBtn,
  SideBarFilters,
  ShevronBtn,
  Input,
} from "./SideBar.styled";
// import shewron from "../../asset/shevron.svg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const SideBar = ({ handleChangeQuery }) => {
  const [make, setMake] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "brand":
        setMake(e.target.value);
        break;
      case "price":
        setRentalPrice(e.target.value);
        break;
      case "from":
        setMileageFrom(e.target.value);
        break;
      case "to":
        setMileageTo(e.target.value);
        break;
      default:
        console.log("Something wrong");
    }
  };

  const inputModelId = nanoid();
  const inputPriceId = nanoid();
  const inputMileageId = nanoid();

  const onSubmit = (e) => {
    e.preventDefault();
    const searchQuery = {
      make,
      rentalPrice: Number(rentalPrice),
      mileageFrom,
      mileageTo,
    };
    handleChangeQuery(searchQuery);

  };

  return (
    <aside>
      <SideBarFilters onSubmit={onSubmit}>
        <FieldLabel htmlFor={inputModelId}>
          Car brand
          <Input
            id={inputModelId}
            type="text"
            name="brand"
            placeholder="Enter the text"
            onChange={handleInputChange}
            value={make}
          ></Input>
          <ShevronBtn type="button">
            <IoIosArrowDown />
          </ShevronBtn>
        </FieldLabel>

        <FieldLabel htmlFor={inputPriceId}>
          Price/ 1 hour
          <Input
            id={inputPriceId}
            type="number"
            name="price"
            placeholder="To $"
            value={rentalPrice}
            onChange={handleInputChange}
          ></Input>
        </FieldLabel>

        <FieldLabel htmlFor={inputMileageId}>
          Сar mileage / km
          <InputsThumb>
            <Input
              id={inputMileageId}
              type="number"
              name="from"
              value={mileageFrom}
              onChange={handleInputChange}
            >
              {/* From */}
            </Input>
            <Input
              id={inputMileageId}
              type="number"
              name="to"
              value={mileageTo}
              onChange={handleInputChange}
            >
              {/* To */}
            </Input>
          </InputsThumb>
        </FieldLabel>

        <SearchBtn type="submit">Search</SearchBtn>
      </SideBarFilters>
    </aside>
  );
};
