import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const CardDetailGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1.5s;
`;

export const LoadingMainContainer = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlobalStyles = createGlobalStyle<any>`
  body {
    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.text};
    font-family: "Poppins", sans-serif;
    transition: all linear 0.2s;
  }
`;

export const FormCheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  margin-right: 15px;
`;
export const FormCheckBoxLabel = styled.label<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 51px;
  height: 28px;
  border-radius: 15px;
  background: ${({ theme }) => theme.brandColor};
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    margin: 5px;
    background: ${({ theme }) => theme.selectTimeBg};
    transition: 0.2s;
  }
`;
export const FormCheckBox = styled.input<any>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 51px;
  height: 28px;
  cursor: pointer;
  &:checked + ${FormCheckBoxLabel} {
    background: ${({ theme }) => theme.brandColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 27px;
      transition: 0.3s;
    }
  }
`;
