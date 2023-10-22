import { LoadMoreBtnEl } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return <LoadMoreBtnEl onClick={handleLoadMore}>Load more</LoadMoreBtnEl>;
};
