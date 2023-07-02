import { Link } from "react-router-dom";
import styled from "styled-components";
export const CardDetailContainer = styled.div`
  height: 400px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.selectTimeBg};
  cursor: pointer;
  padding: 10px;
`;
export const ImageWrapper = styled.div`
  height: 290px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: contain;
  transition: transform 450ms;
  :hover {
    transform: scale(1.25);
  }
`;
export const ProductName = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-top: 3px;
`;
export const ProductPrice = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  margin-top: 3px;
`;

export const BuyNowButtonWrapper = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BuyNow = styled.button`
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
  @media screen and (max-width: 480px) {
    font-size: 16px;
    height: 38px;
    width: 100px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
