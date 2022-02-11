import styled from "styled-components/macro";
import cartIcon from "../icons/icon-cart.svg";
import closeIcon from "../icons/icon-close.svg";
import deleteIcon from "../icons/icon-delete.svg";
import menuIcon from "../icons/icon-menu.svg";
import minusIcon from "../icons/icon-minus.svg";
import nextIcon from "../icons/icon-next.svg";
import plusIcon from "../icons/icon-plus.svg";
import previousIcon from "../icons/icon-previous.svg";

const ICON_MAP = {
  cart: cartIcon,
  close: closeIcon,
  delete: deleteIcon,
  menu: menuIcon,
  minus: minusIcon,
  next: nextIcon,
  plus: plusIcon,
  previous: previousIcon,
};

const Icon = ({ height = "auto", width = "24px", name, alt }) => {
  let iconSrc = ICON_MAP[name];
  if (!iconSrc) {
    return null;
  }
  return <ImgIcon src={iconSrc} alt={alt} width={width} height={height} />;
};

const ImgIcon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export default Icon;
