import { Link } from "react-router-dom";
import styled from "styled-components";
export const NotFoundMainContainer = styled.div`
  height: 80vh;
  display: grid;
  place-items: center;
`;
export const NotFoundContainer = styled.div``;
export const NotFoundMessage = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  text-align: center;
`;
export const NotFoundDescription = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  height: 55px;
  width: 220px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.brandColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
