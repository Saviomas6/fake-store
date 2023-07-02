import styled from "styled-components";
export const HomePageContainer = styled.div`
  margin: 25px 0;
`;
export const ErrorText = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const InputFieldWrapper = styled.div`
  margin: 15px 0;
`;

export const InputField = styled.input`
  width: 50%;
  height: 44px;
  background-color: ${({ theme }) => theme.selectTimeBg};
  outline: none;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 18px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
