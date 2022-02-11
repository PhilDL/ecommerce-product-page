import { useState } from "react";
import styled from "styled-components/macro";
import UnstyledButton from "./UnstyledButton";
import CarouselImageZoomIn from "./CarouselImageZoomIn";
import { IconNext, IconPrevious } from "./Icons";
import { QUERIES } from "../constants";

const ProductImagesCarousel = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselImageZoomIn, setCarouselImageZoomIn] = useState(false);
  const onPrevImageHandler = () => {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setCurrentImageIndex(newIndex);
  };
  const onNextImageHandler = () => {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentImageIndex(newIndex);
  };
  return (
    <ImageCarouselWrapper>
      <CarouselMainImage>
        <CarouselImage
          src={images[currentImageIndex].original}
          alt={productName}
          onClick={() => setCarouselImageZoomIn(true)}
        />
        <PrevButton onClick={onPrevImageHandler}>
          <IconPrevious width={12} />
        </PrevButton>
        <NextButton onClick={onNextImageHandler}>
          <IconNext width={12} />
        </NextButton>
      </CarouselMainImage>

      <CarouselImagesRow>
        {images.map((image, index) => (
          <CarouselImageThumbnail
            key={index}
            src={image.thumbnail}
            alt={productName}
            onClick={() => setCurrentImageIndex(index)}
            selected={index === currentImageIndex}
          />
        ))}
      </CarouselImagesRow>
      <CarouselImageZoomIn
        isOpen={carouselImageZoomIn}
        onDismiss={() => setCarouselImageZoomIn(false)}
        images={images}
        productName={productName}
        currentImageIndex={currentImageIndex}
        onNextImage={onNextImageHandler}
        onPrevImage={onPrevImageHandler}
        onSetIndex={setCurrentImageIndex}
      />
    </ImageCarouselWrapper>
  );
};

const ImageCarouselWrapper = styled.div`
  margin-left: -24px;
  margin-right: -24px;
  @media ${QUERIES.tabletAndUp} {
    margin-left: revert;
    margin-right: revert;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const CarouselMainImage = styled.div`
  height: max(60vw, 40vh);
  @media ${QUERIES.tabletAndUp} {
    width: 445px;
    height: 445px;
    border-radius: 15px;
    overflow: hidden;
    :hover {
      cursor: zoom-in;
    }
  }
  position: relative;
`;

const CarouselImagesRow = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    width: fit-content;
    gap: 32px;
    justify-content: space-around;
  }
`;

const CarouselImageThumbnail = styled.img`
  width: 88px;
  border-radius: 12px;
  object-fit: cover;
  border: ${({ selected }) =>
    selected ? "2px solid var(--color-primary)" : "none"};
  opacity: ${({ selected }) => (selected ? "0.4" : "1")};
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`;

const ActionButton = styled(UnstyledButton)`
  position: absolute;
  top: 50%;
  background-color: var(--color-white);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  &:hover {
    color: var(--color-primary);
  }
`;

const PrevButton = styled(ActionButton)`
  left: 16px;
  padding-left: 12px;
`;

const NextButton = styled(ActionButton)`
  right: 16px;
  padding-left: 16px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ProductImagesCarousel;
