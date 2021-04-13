import React, { ReactChild, ReactNode, ReactChildren } from "react";
import styled from "styled-components";

export const DropdownDepthedList = styled.li.attrs({
  className: "rounded-sm relative px-3 py-1 hover:bg-gray-100",
})`
  & > ul {
    transform: translatex(100%) scale(0);
  }
  &:hover > ul {
    transform: translatex(101%) scale(1);
  }
  & > button svg {
    transform: rotate(-90deg);
  }
  &:hover > button svg {
    transform: rotate(-270deg);
  }
`;

interface DropdownListProps {
  label?: string;
  underline?: boolean;
  children?: ReactNode | ReactChild | ReactChildren;
}

export const DropdownList: React.FC<DropdownListProps> = (
  props: DropdownListProps
) => {
  return (
    <li className="cursor-pointer rounded-sm px-3 py-1 hover:bg-gray-100">
      {props.label ? props.label : props.children}
    </li>
  );
};

interface DropDownProps {
  label?: ReactNode | string;
  children?: ReactNode | ReactChild | ReactChildren;
}

const DropDown2: React.FC<DropDownProps> = (props: DropDownProps) => {
  return (
    <div className="group inline-block">
      <button className="pl-3 outline-none focus:outline-none flex items-center">
        <span className="font-semibold flex-1">{props.label}</span>
      </button>
      <ul className="mt-2 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
        {props.children}
      </ul>
    </div>
  );
};
export default DropDown2;
