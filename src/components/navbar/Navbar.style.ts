import { Link } from "react-router-dom";
import styled from "styled-components";
export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  display: flex;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all linear 0.2s;
`;

export const LogoWrapper = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const StoreIconWrapper = styled.div`
  display: flex;
  margin-right: 10px;
  @media screen and (max-width: 480px) {
    margin-right: 5px;
  }
`;

export const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CartLogoWrapper = styled.div`
  /* ... */
`;
export const CartButton = styled.div`
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
    font-size: 12px;
    height: 38px;
    width: 120px;
  }
  span {
    height: 20px;
    min-width: 20px;
    padding: 4px;
    background-color: #fff;
    border-radius: 50%;
    font-size: 16px;
    color: #000;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 480px) {
      height: 16px;
      min-width: 16px;
      padding: 2px;
      font-size: 12px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
