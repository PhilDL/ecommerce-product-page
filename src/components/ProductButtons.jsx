import styled from "styled-components/macro";
import { useState } from "react";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import { QUERIES } from "../constants";

const ProductButtons = ({ productId, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const onAddToCartHandler = () => {
    onAddToCart({ productId, quantity: quantity });
  };

  return (
    <Section>
      <QuantityFieldSet>
        <ChangeQtyButton onClick={(e) => setQuantity((state) => state - 1)}>
          <Icon name="minus" width={12} alt="Decrease quantity" />
        </ChangeQtyButton>
        <QuantityInput
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <ChangeQtyButton onClick={(e) => setQuantity((state) => state + 1)}>
          <Icon name="plus" width={12} alt="Increase quantity" />
        </ChangeQtyButton>
      </QuantityFieldSet>
      <AddToCartButton onClick={onAddToCartHandler}>
        Add to cart
      </AddToCartButton>
    </Section>
  );
};

const Section = styled.section`
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
`;

const QuantityInput = styled.input`
  border: none;
  background: transparent;
  text-align: center;
  font-weight: 700;
  color: var(--color-gray-900);
  height: 60px;
`;

const AddToCartButton = styled(UnstyledButton)`
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  box-shadow: 0px 20px 50px -20px var(--color-primary);
  border-radius: 10px;
  font-weight: 700;
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
  }
`;
export default ProductButtons;
