import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcShop } from "react-icons/fc";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TStore } from "../../logic/redux/store/store";
import {
  CartButton,
  CartButtonWrapper,
  LogoWrapper,
  MainContainer,
  StoreIconWrapper,
  StyledLink,
} from "./Navbar.style";
import { themeToggle } from "../../logic/redux/actions/themeAction";
import {
  FormCheckBox,
  FormCheckBoxLabel,
  FormCheckBoxWrapper,
} from "../../styles/sharedStyles";
import { useEffect } from "react";
const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: TStore) => state.themeReducer.themeValue);
  const cart = useSelector((state: TStore) => state.counter.cart);

  const toggleTheme = () => {
    dispatch(themeToggle(theme === "light" ? "dark" : "light"));
    if (typeof window !== undefined) {
      window.localStorage.setItem(
        "theme",
        theme === "light" ? "dark" : "light"
      );
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        dispatch(themeToggle(savedTheme));
      }
    }
  }, []);

  return (
    <MainContainer>
      <StyledLink to="/">
        <LogoWrapper>
          <StoreIconWrapper>
            <FcShop size={30} />
          </StoreIconWrapper>
          <div>FakeStore</div>
        </LogoWrapper>
      </StyledLink>
      <CartButtonWrapper>
        <FormCheckBoxWrapper>
          <FormCheckBox
            id="contentCheckbox"
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <FormCheckBoxLabel themeMode={theme} htmlFor="contentCheckbox" />
        </FormCheckBoxWrapper>
        <StyledLink to="/cart">
          <CartButton>
            <AiOutlineShoppingCart size={25} style={{ marginRight: "8px" }} />
            Cart <span>{cart?.length}</span>
          </CartButton>
        </StyledLink>
      </CartButtonWrapper>
    </MainContainer>
  );
};

export default Navbar;
