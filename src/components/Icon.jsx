import React from "react";

import styled from "styled-components/macro";
import { ReactComponent as cartIcon } from "../icons/icon-cart.svg";
import { ReactComponent as closeIcon } from "../icons/icon-close.svg";
import { ReactComponent as deleteIcon } from "../icons/icon-delete.svg";
import { ReactComponent as menuIcon } from "../icons/icon-menu.svg";
import { ReactComponent as minusIcon } from "../icons/icon-minus.svg";
import { ReactComponent as nextIcon } from "../icons/icon-next.svg";
import { ReactComponent as plusIcon } from "../icons/icon-plus.svg";
import { ReactComponent as previousIcon } from "../icons/icon-previous.svg";

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

const Icon = ({ height = null, width = null, stroke = null, name, alt }) => {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) {
    return null;
  }
  let svgProps = {};
  if (height) {
    svgProps.height = height;
  }
  if (width) {
    svgProps.width = width;
  }
  if (stroke) {
    svgProps.stroke = stroke;
  }
  return <IconComponent {...svgProps} />;
};

const IconWrapper = styled.i``;
export default Icon;
