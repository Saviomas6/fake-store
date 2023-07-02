import {
  Button,
  ButtonWrapper,
  NotFoundContainer,
  NotFoundDescription,
  NotFoundMainContainer,
  NotFoundMessage,
  StyledLink,
} from "./NotFound.style";

const NotFound = () => {
  return (
    <NotFoundMainContainer>
      <NotFoundContainer>
        <NotFoundMessage>404!</NotFoundMessage>
        <NotFoundMessage>This page is lost.</NotFoundMessage>
        <NotFoundDescription>
          We've explored deep and wide, but we can't find the page you were
          looking for.
        </NotFoundDescription>
        <ButtonWrapper>
          <StyledLink to="/">
            <Button>Navigate back home</Button>
          </StyledLink>
        </ButtonWrapper>
      </NotFoundContainer>
    </NotFoundMainContainer>
  );
};

export default NotFound;
