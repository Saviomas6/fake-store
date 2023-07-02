import styled from "styled-components";
export const CartMainContainer = styled.div`
  padding: 15px 0;
  margin: 25px 0;
  border-bottom: 1px solid #808080;
`;
export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
export const CartLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CartRightContainer = styled.div``;
export const CartProductImageContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  @media screen and (max-width: 640px) {
    height: 270px;
    width: 270px;
  }
`;
export const CartProductImage = styled.img`
  height: 100%;
  width: 100%;
`;
export const CartProductTitle = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const CartProductPrice = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Button = styled.button`
  height: 44px;
  width: 140px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
`;
