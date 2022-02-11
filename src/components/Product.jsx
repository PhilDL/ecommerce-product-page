import { useContext } from "react";
import styled from "styled-components/macro";

import ProductPrice from "./ProductPrice";
import ProductButtons from "./ProductButtons";
import ProductImagesCarousel from "./ProductImagesCarousel";
import CartContext from "../store/cart-context";
import { PRODUCT } from "../data";
import { QUERIES } from "../constants";

const Product = ({ product }) => {
  const cartContext = useContext(CartContext);
  const onAddToCartHandler = ({ productId, quantity }) => {
    cartContext.dispatchCart({
      type: "ADD_ITEM",
      payload: { ...PRODUCT, quantity: quantity },
    });
  };
  return (
    <Section>
      <ProductImagesCarousel
        images={product.images}
        productName={product.name}
      />
      <ProductContent>
        <ProductTextWrapper>
          <ProductBrand>{product.brand}</ProductBrand>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductTextWrapper>
        <ProductPrice
          publicPrice={product.publicPrice}
          discountedPrice={product.discountedPrice}
          discountPercentage={product.discountPercentage}
        />
        <ProductButtons
          onAddToCart={onAddToCartHandler}
          productId={product.id}
        />
      </ProductContent>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
    justify-content: center;
  }
`;
const ProductTextWrapper = styled.div``;

const ProductBrand = styled.h3`
  font-size: ${12 / 16}rem;
  color: var(--color-primary);
  text-transform: uppercase;
`;

const ProductName = styled.h3`
  font-size: ${28 / 16}rem;
  color: var(--color-gray-900);
  margin: 16px 0;
`;

const ProductDescription = styled.p`
  color: var(--color-gray-700);
`;

export default Product;
