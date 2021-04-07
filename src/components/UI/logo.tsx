import React from "react";
import { NavLink } from "react-router-dom";

import { classNames } from "../../utils/utils";
import LogoHorizontalLight from "../../../public/images/logo/Horizontal_Light.png";
import LogoHorizontalDark from "../../../public/images/logo/Horizontal_Dark.png";
import LogoVerticalDark from "../../../public/images/logo/Vertical_Dark.png";
import LogoVertialtalLight from "../../../public/images/logo/Vertical_Light.png";

interface LogoProps {
  withLink?: boolean;
  customstyle?: string;
  type:
    | "LogoHorizontalDark"
    | "LogoHorizontalLight"
    | "LogoVerticalDark"
    | "LogoVertialtalLight";
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { withLink, customstyle, type } = props;

  let compElem;
  let strImg;

  switch (type) {
    case "LogoHorizontalDark":
      strImg = LogoHorizontalDark;
      break;

    case "LogoVerticalDark":
      strImg = LogoVerticalDark;
      break;
    case "LogoVertialtalLight":
      strImg = LogoVertialtalLight;
      break;
    // LogoHorizontalLight
    default:
      strImg = LogoHorizontalLight;
      break;
  }

  if (withLink) {
    compElem = (
      // <div className="flex justify-start ">
      <NavLink to="/">
        <span className="sr-only">4DREPLAY</span>
        <img
          className={classNames`h-logoHeight cursor-pointer  ${customstyle}`}
          src={strImg}
          alt="logo"
        />
      </NavLink>
      // </div>
    );
  } else {
    compElem = (
      <img
        className={classNames`h-logoHeight cursor-pointer ${customstyle}`}
        src={strImg}
        alt="logo"
      />
    );
  }

  return compElem;
};
export default Logo;
