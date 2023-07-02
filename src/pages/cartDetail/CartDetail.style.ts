import styled from "styled-components";
export const CardDetailMainContainer = styled.div`
  margin-top: 30px;
`;
export const CardDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const CardDetailLeftContainer = styled.div`
  background-color: ${({ theme }) => theme.selectTimeBg};
  min-height: 200px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
`;
export const CardDetailRightContainer = styled.div`
  min-height: 200px;
  padding: 10px;
`;
export const ProductImageCard = styled.div`
  height: 100%;
  width: 100%;
`;
export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const CategoryHeading = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  text-transform: uppercase;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductName = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
    margin-top: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ProductRating = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    margin-top: 10px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const ProductDescription = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
    margin-top: 10px;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    margin-top: 10px;
  }
`;

export const AddToCartButton = styled.button`
  height: 44px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.brandColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ErrorText = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
