import styled from '@emotion/styled';

export const AdvertCardBox = styled.li`
  width: 274px;
`;

export const ImageThumb = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px 14px 14px 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const AutoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  span {
    color: #3470ff;
  }
`;

export const CarPrice = styled.p`
  display: inline-block;
  margin-left: auto;
`;

export const SecondaryInfo = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  span {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    padding: 0 6px;
    &:last-child {
      border-right: none;
      padding-right: 0;
    }

    &:first-of-type {
      padding-left: 0;
    }
    &:not(:first-of-type) span {
      margin-left: 0;
    }
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  border: none;
  background-color: transparent;

  cursor: pointer;
  outline: none;
`;

export const FavoriteIcon = styled.svg`
  width: 18px;
  height: 18px;
  /* 
  fill: ${({ favorite }) => (favorite ? 'var(--accent-color)' : 'transparent')};
  stroke: ${({ favorite }) =>
    favorite ? 'var(--accent-color)' : 'var(--heart-stroke-color)'}; */
`;

export const DetailsBtn = styled.button`
  width: 100%;
  margin-top: 28px;

  background-color: var(--accentt-color);
`;
export const Details = styled.p`
  color: var(--secondary-color);
  font-size: 12px;
  line-height: 1.5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 90%;
  text-align: left;
`;

export const Separator = styled.span`
  color: var(--separator-color);
`;
