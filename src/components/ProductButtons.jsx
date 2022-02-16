import styled from "styled-components/macro";
import { useState } from "react";
import { IconMinus, IconPlus } from "./Icons";
import UnstyledButton from "./UnstyledButton";
import VisuallyHidden from "./VisuallyHidden";
import PrimaryButton from "./PrimaryButton";
import { QUERIES } from "../constants";

const ProductButtons = ({ productId, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const onAddToCartHandler = () => {
    onAddToCart({ productId, quantity: quantity });
  };

  return (
    <ProductButtonsSection>
      <QuantityFieldSet>
        <ChangeQtyButton onClick={(e) => setQuantity((state) => +state - 1)}>
          <IconMinus width={12} />
          <VisuallyHidden>Decrease quantity</VisuallyHidden>
        </ChangeQtyButton>
        <VisuallyHidden>Previous Image</VisuallyHidden>
        <Quantity>
          <VisuallyHidden>Quantity</VisuallyHidden>
          <QuantityInput
            type="number"
            value={quantity}
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Quantity>

        <ChangeQtyButton onClick={(e) => setQuantity((state) => +state + 1)}>
          <IconPlus width={12} />
          <VisuallyHidden>Increase quantity</VisuallyHidden>
        </ChangeQtyButton>
      </QuantityFieldSet>
      <AddToCartButton onClick={onAddToCartHandler}>
        Add to cart
      </AddToCartButton>
    </ProductButtonsSection>
  );
};

const ProductButtonsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
  }
`;

const QuantityFieldSet = styled.fieldset`
  display: flex;
  background: var(--color-gray-300);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  @media ${QUERIES.laptopAndUp} {
    flex: 1;
  }
`;

const ChangeQtyButton = styled(UnstyledButton)`
  flex: 1;
  flex-basis: 44px;
  height: 60px;
  text-align: center;
  color: var(--color-primary);
  &:hover {
    color: var(--color-black);
  }
`;
const Quantity = styled.label``;
const QuantityInput = styled.input`
  border: none;
  background: transparent;
  text-align: center;
  font-weight: 700;
  color: var(--color-gray-900);
  height: 60px;
`;

const AddToCartButton = styled(PrimaryButton)`
  box-shadow: 0px 20px 50px -20px var(--color-primary);
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
  }
`;
export default ProductButtons;
