import styled from "styled-components/macro";
import { QUERIES } from "../constants";

const ProductPrice = ({ publicPrice, discountedPrice, discountPercentage }) => {
  return (
    <OfferWrapper>
      <Price>
        <PriceDiscounted>${discountedPrice}</PriceDiscounted>
        <Discount>{discountPercentage}%</Discount>
      </Price>
      <PublicPrice>${publicPrice}</PublicPrice>
    </OfferWrapper>
  );
};

const OfferWrapper = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Price = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const PublicPrice = styled.span`
  color: var(--color-gray-500);
  font-size: 1rem;
  text-decoration: line-through;
`;

const Discount = styled.span`
  font-size: 1rem;
  line-height: 1rem;
  padding: 5px 10px;
  height: fit-content;
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  border-radius: 6px;
  text-transform: uppercase;
`;

const PriceDiscounted = styled.span`
  color: var(--color-gray-900);
  font-size: ${28 / 16}rem;
  font-weight: 700;
`;

export default ProductPrice;
