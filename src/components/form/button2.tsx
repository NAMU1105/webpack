import React from "react";
import { classNames } from "../../utils/utils";

// TODO: 디자인은 따로 빼고, font-size, 대문자(소문자,capital)여부 등 공통적으로 적용할 수 있는 애들은 따로 빼두기
// type
type ButtonSizes = "btn-sm" | "btn-lg";
type ButtonColors =
  | "btn-primary"
  | "btn-secondary"
  | "btn-success"
  | "btn-warning"
  | "btn-danger"
  | "btn-dark";
type ButtonElevated =
  | "btn-elevated"
  | "btn-elevated-primary"
  | "btn-elevated-secondary"
  | "btn-elevated-success"
  | "btn-elevated-warning"
  | "btn-elevated-danger"
  | "btn-elevated-dark";

type ButtonRounded =
  | "btn-rounded"
  | "btn-rounded-primary"
  | "btn-rounded-secondary"
  | "btn-rounded-secondary"
  | "btn-rounded-success"
  | "btn-rounded-warning"
  | "btn-rounded-danger";

type ButtonElevatedRounded =
  | "btn-elevated-rounded"
  | "btn-elevated-rounded-primary"
  | "btn-elevated-rounded-secondary"
  | "btn-elevated-rounded-success"
  | "btn-elevated-rounded-warning"
  | "btn-elevated-rounded-danger"
  | "btn-elevated-rounded-primary"
  | "btn-elevated-rounded-dark";

type ButtonOutline =
  | "btn-outline-primary"
  | "btn-outline-secondary"
  | "btn-outline-success"
  | "btn-outline-warning"
  | "btn-outline-danger"
  | "btn-outline-dark";

type ButtonSoft =
  | "btn-primary-soft"
  | "btn-secondary-soft"
  | "btn-success-soft"
  | "btn-warning-soft"
  | "btn-danger-soft"
  | "btn-dark-soft";

interface ButtonInfo {
  href?: string;
  type?: "button" | "submit";
  size?: ButtonSizes;
  color?: ButtonColors;
  elevated?: ButtonElevated;
  round?: ButtonRounded;
  elevatedrounded?: ButtonElevatedRounded;
  outline?: ButtonOutline;
  soft?: ButtonSoft;
}

const Button2: React.FC<ButtonInfo & WithChildren & Onclick> = (
  props: ButtonInfo & WithChildren & Onclick
) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        className={classNames`btn ${props.size} ${props.color} ${props.elevated} ${props.round} ${props.elevatedrounded} ${props.outline} ${props.soft}`}
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className={classNames`btn ${props.size} ${props.color} ${props.elevated} ${props.round} ${props.elevatedrounded} ${props.outline} ${props.soft}`}
      >
        {props.children}
      </button>
    );
  }
};

Button2.defaultProps = {
  color: "btn-primary",
};

export default Button2;
