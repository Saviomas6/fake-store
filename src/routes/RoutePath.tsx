import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import CartDetail from "../pages/cartDetail/CartDetail";
import HomePage from "../pages/homePage/HomePage";
import NotFound from "../pages/notFound/NotFound";

const RoutePath = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart_detail/:id" element={<CartDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutePath;
