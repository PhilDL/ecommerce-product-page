/* eslint-disable no-unused-vars */
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { IconClose } from "./Icons";

import UnstyledButton from "./UnstyledButton";
import VisuallyHidden from "./VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Navigation Menu">
        <ModalHeader>
          <CloseButton onClick={onDismiss}>
            <IconClose />
            <VisuallyHidden>Close Modal</VisuallyHidden>
          </CloseButton>
        </ModalHeader>
        <MobileNavMenus>
          <MobileNavLink href="/sale">Collection</MobileNavLink>
          <MobileNavLink href="/men">Men</MobileNavLink>
          <MobileNavLink href="/women">Women</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </MobileNavMenus>
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
  background: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled(DialogContent)`
  background: white;
  border: 1px solid var(--color-gray-300);
  width: 300px;
  height: 100%;
  padding: 19px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 48px;
  animation: slide 0.2s ease-in;

  @keyframes slide {
    0% {
      width: 0px;
    }
    100% {
      width: 300px;
    }
  }
`;

const ModalHeader = styled.footer`
  position: relative;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: -10px;
  left: -16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-700);
`;

const MobileNavMenus = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MobileNavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: 700;
`;

export default MobileMenu;
