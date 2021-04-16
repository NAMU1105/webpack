import React, { ReactChild, ReactChildren, ReactNode } from "react";
import { classNames } from "../../utils/utils";
enum ButtonStype {
  "Sizes",
  "Colors",
  "Elevated",
  "Rounded",
  "Elevated Rounded",
  "Outline",
  "Soft Colors",
}
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

export type ButtonRounded =
  | "btn-rounded"
  | "btn-rounded-primary"
  | "btn-rounded-secondary"
  | "btn-rounded-secondary"
  | "btn-rounded-success"
  | "btn-rounded-warning"
  | "btn-rounded-danger"
  | "btn-"
  | "btn-"
  | "btn-";

// 그냥 아래처럼 다 때려박는 경우
type ButtonTotal = ButtonSizes & ButtonColors & ButtonElevated & ButtonRounded;

//---------------------------------------------------------------------------
// 아!!!! Record<ButtonTotal, string>여기 뒤에 string대신 타입같은걸 넣으면 되는거구나!
interface ButtonProps {
  styletype?:
    | "Sizes"
    | "Colors"
    | "Elevated"
    | "Rounded"
    | "Elevated Rounded"
    | "Outline"
    | "Soft Colors";
  children: Text | string | ReactNode | ReactChild | ReactChildren;
}
// const nav: Record<CLASS, PageInfo> = {
//   classname: { color: "btn-dark", round: "btn-rounded-success" },
// };

type ButtonInfo = {
  color?: ButtonColors;
  round?: ButtonRounded;
};

// interface ButtonFilledProps {}
const Button2: React.FC<ButtonInfo & WithChildren> = (
  props: ButtonInfo & WithChildren
) => {
  return (
    <button className={classNames`btn ${props.color} ${props.round}`}>
      {props.children}
    </button>
  );
};

export default Button2;
