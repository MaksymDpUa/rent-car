import { nanoid } from "nanoid";
// import { useSelector } from "react-redux";
// import { selectAdverts } from "../../redux/adverts/advertsSelectors";
import { AdvertCard } from "../AdvertCard/AdvertCard";

// import css from "./AdvertList.module.css";
import { AdvertsListEl } from "./AdvertList.styled";

export const AdvertList = ({ catalog }) => {
  //   const catalog = useSelector(selectAdverts);
  console.log(catalog);
  return (
    <AdvertsListEl>
      {catalog?.map((advert) => {
        const advertKey = nanoid();
        // console.log(advert);
        return <AdvertCard key={advertKey} {...advert} />;
      })}
    </AdvertsListEl>
  );
};
