import { useState, useContext } from "react";
import styled from "styled-components/macro";
import logo from "../logo.svg";
import UnstyledButton from "./UnstyledButton";
import MobileMenu from "./MobileMenu";
import CartPopup from "./CartPopup";
import Icon from "./Icon";
import { USER } from "../data";
import CartContext from "../store/cart-context";
import { QUERIES } from "../constants";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCartPopup, setshowCartPopup] = useState(false);
  const cartContext = useContext(CartContext);

  return (
    <>
      <HeaderWrapper>
        <Side>
          <MobileMenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon name="menu" alt="Open Menu" width="auto" />
          </MobileMenuButton>
          <LogoWrapper>
            <Logo src={logo} alt="logo" />
          </LogoWrapper>
          <Navigation>
            <NavLink href="/sale">Collection</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Navigation>
        </Side>

        <NavWrapper>
          <CartButton onClick={() => setshowCartPopup(true)}>
            <Icon name="cart" size="auto" alt="Show Cart" />
            {cartContext.cart.items.length > 0 && (
              <CartCount>{cartContext.cart.totalQuantity}</CartCount>
            )}
          </CartButton>
          <NavLink to="/contact">
            <Avatar src={USER.avatar} alt="Show Cart" />
          </NavLink>
        </NavWrapper>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
        <CartPopup
          isOpen={showCartPopup}
          onDismiss={() => setshowCartPopup(false)}
        />
      </HeaderWrapper>
      <Separator />
    </>
  );
};

const HeaderWrapper = styled.header`
  padding: 19px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${QUERIES.tabletAndUp} {
    margin: auto;
    max-width: 1110px;
    padding: 24px 48px;
  }
`;
const Side = styled.div`
  display: flex;
  gap: 16px;
`;

const Separator = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: block;
    width: 100%;
    margin: auto;
    max-width: 1110px;
    border-bottom: 2px solid var(--color-gray-300);
  }
`;

const MobileMenuButton = styled(UnstyledButton)`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const LogoWrapper = styled.a``;
const Logo = styled.img`
  width: 100%;
`;
const NavWrapper = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Navigation = styled.nav`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 16px;
  }
`;
const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
`;

const Avatar = styled.img`
  width: 24px;
`;

const CartButton = styled(UnstyledButton)`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartCount = styled.span`
  position: absolute;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  border-radius: 50%;
  top: 0;
  right: 0;
  font-size: ${10 / 16}rem;
  line-height: ${10 / 16};
  padding: 3px 6px;
  border-radius: 6.5px;
`;

export default Header;
