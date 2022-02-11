/* eslint-disable no-unused-vars */
import { useContext } from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import CartContext from "../store/cart-context";
import UnstyledButton from "./UnstyledButton";
import VisuallyHidden from "./VisuallyHidden";
import { QUERIES } from "../constants";
import { IconDelete } from "./Icons";
import PrimaryButton from "./PrimaryButton";

const CartPopup = ({ isOpen, onDismiss }) => {
  const cartContext = useContext(CartContext);
  if (!isOpen) {
    return null;
  }
  let cartContent = null;

  const onCheckoutButtonHandler = () => {
    console.log("Checkout button clicked");
  };

  const onDeleteItemHandler = (item) => {
    cartContext.dispatchCart({
      type: "ADD_ITEM",
      payload: { ...item, quantity: 0 },
    });
  };

  if (cartContext.cart.items.length === 0) {
    cartContent = (
      <EmptyCart>
        <p>Your cart is empty</p>
      </EmptyCart>
    );
  } else {
    cartContent = (
      <Cart>
        <CartItems>
          {cartContext.cart.items.map((item) => (
            <CartItem key={item.id}>
              <ItemThumbnailWrapper>
                <ItemThumbnail src={item.images[0].thumbnail} alt={item.name} />
              </ItemThumbnailWrapper>
              <CartItemDetails>
                <CartItemName>{item.name}</CartItemName>
                <CartItemPrice>
                  ${item.discountedPrice} x {item.quantity}{" "}
                  <ItemTotalPrice>
                    ${item.discountedPrice * item.quantity}
                  </ItemTotalPrice>
                </CartItemPrice>
              </CartItemDetails>
              <DeleteButton onClick={onDeleteItemHandler.bind(this, item)}>
                <IconDelete width={16} />
                <VisuallyHidden>Delete Item</VisuallyHidden>
              </DeleteButton>
            </CartItem>
          ))}
        </CartItems>
        <CheckoutButton onClick={onCheckoutButtonHandler}>
          Checkout
        </CheckoutButton>
      </Cart>
    );
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Shopping Cart">
        <CartHeader>Cart</CartHeader>
        {cartContent}
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  @media ${QUERIES.tabletAndUp} {
    justify-content: flex-end;
    margin: auto;
    max-width: 1110px;
  }
`;

const Content = styled(DialogContent)`
  background: var(--color-white);
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  border-radius: 10px;
  margin: 76px 8px auto 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media ${QUERIES.tabletAndUp} {
    width: auto;
    padding: 24px 48px;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  min-width: 300px;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

const CheckoutButton = styled(PrimaryButton)`
  width: 100%;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

const ItemThumbnailWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
`;
const ItemThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DeleteButton = styled(UnstyledButton)`
  width: 50px;
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--color-gray-500);
  &:hover {
    color: var(--color-gray-700);
  }
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CartItemName = styled.span`
  font-weight: 400;
  color: var(--color-gray-500);
`;

const CartItemPrice = styled.span`
  color: var(--color-gray-500);
`;

const ItemTotalPrice = styled.span`
  font-weight: 700;
  color: var(--color-gray-900);
  margin-left: 8px;
`;

const CartHeader = styled.h3`
  position: relative;
  border-bottom: 2px solid var(--color-gray-300);
  font-weight: 700;
  padding: 24px;
`;

export default CartPopup;
