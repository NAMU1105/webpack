import React, { ReactChildren } from "react";
import { classNames } from "../../utils/utils";

import {
  TEXT_TRANSFORM_VARIANT_MAPS,
  COLOR_VARIANT_MAPS,
  DISABLED_VARIANT_MAPS,
} from "../../assets/styles/tailwindCommon";

const BGCOLOR_VARIANT_MAPS = {
  white:
    "bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-gray-200 focus:ring-opacity-50",
  primary:
    "bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2  focus:ring-primary-dark focus:ring-opacity-50",
  secondary:
    "bg-secondary-navy focus:outline-none focus:ring-2  focus:ring-secondary-navy focus:ring-opacity-50",
  danger:
    "text-white bg-danger hover:text-danger-dark focus:outline-none focus:ring-2  focus:ring-danger-dark focus:ring-opacity-50",
  transparent: "focus:outline-none focus:ring-2  focus:border-transparent",
};

const DESIGN_VARIANT_MAPS = {
  contained: "rounded-md",
  text:
    "bg-transparent focus:outline-none focus:ring-transparent focus:border-transparent",
  outlined: "!bg-transparent border-2 rounded-md",
  withIcon: "",
};

const SIZE_VARIANT_MAPS = {
  sm: "w-auto text-sm",
  md: "w-24 text-md",
  lg: "w-6/12 text-lg",
  full: "w-full text-lg",
};

interface ButtonProps {
  type?: "button" | "link" | "submit";
  color?: "white" | "black" | "primary" | "secondary" | "danger";
  bgColor?: "primary" | "secondary" | "danger" | "transparent" | "white";
  design?: "contained" | "text" | "outlined" | "withIcon";
  size?: "sm" | "md" | "lg" | "full";
  disabled?: "true" | null;
  textTransform?: "uppercase" | "capitalize" | "lowercase";
  href?: string;
  children?: React.ReactNode | React.FC | ReactChildren | string;
  onClick?: () => void;
  icon?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  if (props.type === "link") {
    return (
      <a
        href={props.href}
        className={classNames`cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md
          ${COLOR_VARIANT_MAPS[props.color]}
          ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
          ${DESIGN_VARIANT_MAPS[props.design]}
          ${SIZE_VARIANT_MAPS[props.size]}
          ${props.disabled && DISABLED_VARIANT_MAPS["button"]}
          ${TEXT_TRANSFORM_VARIANT_MAPS[props.textTransform]}  
          `}
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className={classNames`cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md
       ${COLOR_VARIANT_MAPS[props.color]}
       ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
       ${DESIGN_VARIANT_MAPS[props.design]}
       ${SIZE_VARIANT_MAPS[props.size]}
       ${props.disabled && DISABLED_VARIANT_MAPS["button"]}
       ${TEXT_TRANSFORM_VARIANT_MAPS[props.textTransform]}  
       `}
      >
        {props.children}
      </button>
    );
  }
};

Button.defaultProps = {
  type: "button",
  color: "white",
  design: "contained",
  size: "sm",
  disabled: null,
  textTransform: "uppercase",
  bgColor: "primary",
};
// Button.defaultProps = defaultProps;

export default Button;
