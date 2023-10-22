import styled from '@emotion/styled';

export const SideBarFilters = styled.form`
  display: flex;
  gap: 18px;
  /* margin: 0 auto; */
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const FieldLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const InputsThumb = styled.div`
  display: flex;
`;

export const Input = styled.input`
  /* display: flex; */
  padding: 14px 18px 14px 18px;
  border: none;
  /* justify-content: center;
  align-items: center; */
  /* gap: 32px; */
  width: ${props => {
    switch (props.name) {
      case 'brand':
        return '224px';
      case 'price':
        return '125px';
      default:
        return '160px';
    }
  }};
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
`;

export const SearchBtn = styled.button`
  display: flex;
  border-radius: 12px;
  background: #3470ff;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border: none;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--white);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  cursor: pointer;
`;

export const ShevronBtn = styled.button`
  position: absolute;
  bottom: 11px;
  right: 18px;
  width: 20px;
  height: 20px;
  /* justify-content: center; */
  padding: 0px;
  /* text-align: center; */
  border: none;
  cursor: pointer;
  background-color: inherit;
`;
