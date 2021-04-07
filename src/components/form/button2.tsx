import React from "react";

interface ButtonProps {
  color?: "white" | "black" | "primary" | "secondary" | "danger";
}
interface ButtonFilledProps {}

export const ButtonFilled: React.FC<ButtonFilledProps> = (
  props: ButtonFilledProps
) => {
  return (
    <>
      <div></div>
    </>
  );
};
