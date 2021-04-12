import React, { ReactChildren } from "react";
import { classNames } from "../../utils/utils";

import {
  TEXT_TRANSFORM_VARIANT_MAPS,
  COLOR_VARIANT_MAPS,
  DISABLED_VARIANT_MAPS,
  ROUNDED_VARIANT_MAPS,
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

// TODO: 수정 필요
const DESIGN_VARIANT_MAPS = {
  contained: "rounded-md",
  text:
    "bg-transparent focus:outline-none focus:ring-transparent focus:border-transparent",
  outlined: "!bg-transparent border-2",
  withIcon: "",
};

const SIZE_VARIANT_MAPS = {
  auto: "w-auto px-5 py-3  text-base",
  sm: "px-2 py-1  text-sm",
  md: "px-8 py-6  text-md",
  lg: "px-10 py-8  text-lg",
  full: "w-full px-5 py-3 text-lg",
};

// TODO: custom 프롭스 하나 만들고 그거 모두 상속하기(공통적인 부분, 예를 들어서 컬러 같은 거)

interface ButtonProps {
  type?: "button" | "link" | "submit";
  color?: "white" | "black" | "primary" | "secondary" | "danger" | "gray";
  bgColor?: "primary" | "secondary" | "danger" | "transparent" | "white";
  design?: "contained" | "text" | "outlined" | "withIcon";
  size?: "auto" | "sm" | "md" | "lg" | "full";
  disabled?: "true" | null;
  textTransform?: "uppercase" | "capitalize" | "lowercase";
  href?: string;
  children?: React.ReactNode | React.FC | ReactChildren | string;
  onClick?: () => void;
  icon?: string;
  rounded?: "none" | "base" | "sm" | "md" | "lg";
  customstyle?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  if (props.type === "link") {
    return (
      <a
        href={props.href}
        className={classNames`cursor-pointer inline-flex items-center justify-center text-base font-medium
          ${COLOR_VARIANT_MAPS[props.color]}
          ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
          ${DESIGN_VARIANT_MAPS[props.design]}
          ${SIZE_VARIANT_MAPS[props.size]}
          ${props.disabled && DISABLED_VARIANT_MAPS["button"]}
          ${TEXT_TRANSFORM_VARIANT_MAPS[props.textTransform]}  
          ${ROUNDED_VARIANT_MAPS[props.rounded]}  
          ${props.customstyle && props.customstyle}
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
        className={classNames`cursor-pointer inline-flex items-center justify-center text-base font-medium
       ${COLOR_VARIANT_MAPS[props.color]}
       ${BGCOLOR_VARIANT_MAPS[props.bgColor]}
       ${DESIGN_VARIANT_MAPS[props.design]}
       ${SIZE_VARIANT_MAPS[props.size]}
       ${props.disabled && DISABLED_VARIANT_MAPS["button"]}
       ${TEXT_TRANSFORM_VARIANT_MAPS[props.textTransform]}  
       ${ROUNDED_VARIANT_MAPS[props.rounded]}  
       ${props.customstyle && props.customstyle}

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
  // design: "contained",
  size: "full",
  disabled: null,
  textTransform: "uppercase",
  bgColor: "primary",
  rounded: "base",
};

export default Button;
