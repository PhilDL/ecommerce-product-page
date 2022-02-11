import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";

const PrimaryButton = styled(UnstyledButton)`
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  border-radius: 10px;
  font-weight: 700;
  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export default PrimaryButton;
