import {
  BuyNow,
  BuyNowButtonWrapper,
  CardDetailContainer,
  Image,
  ImageWrapper,
  ProductName,
  ProductPrice,
  StyledLink,
} from "./Card.style";
interface I_Product {
  image: string;
  price: number;
  title: string;
  id: number;
}
const Card = ({ image, price, title, id }: I_Product) => {
  return (
    <>
      <StyledLink to={`/cart_detail/${id}`}>
        <CardDetailContainer>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
          <ProductName>
            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
          </ProductName>
          <ProductPrice>${price}</ProductPrice>
          <BuyNowButtonWrapper>
            <BuyNow>Buy Now</BuyNow>
          </BuyNowButtonWrapper>
        </CardDetailContainer>
      </StyledLink>
    </>
  );
};

export default Card;
