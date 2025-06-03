import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList);

  return (
    <header className="siteHeader">
      <Link to="/" className="siteLogo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shop App</span>
      </Link>

      <nav className="siteNav">
        <NavLink to="/" className={({ isActive }) => isActive ? "siteNavLink active" : "siteNavLink"} end>
          Home
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "siteNavLink active" : "siteNavLink"}>
          Cart
        </NavLink>
      </nav>

      <Link to="/cart" className="cartSummary">
        Cart: {cartList.length}
      </Link>
    </header>
  );
};
