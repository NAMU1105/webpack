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

interface IF {}
interface DropdownListProps {
  label?: string;
  underline?: boolean;
  children?: ReactNode | ReactChild | ReactChildren;
}

const DropDown2: React.FC<IF> = (props: IF) => {
  const DropdownList: React.FC<DropdownListProps> = (
    props: DropdownListProps
  ) => {
    return (
      <li className="cursor-pointer rounded-sm px-3 py-1 hover:bg-gray-100">
        {props.label ? props.label : props.children}
      </li>
    );
  };

  return (
    <div className="group inline-block">
      <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
        <span className="pr-1 font-semibold flex-1">Dropdown</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
        <DropdownList label="Programming" />
        <DropdownList label="DevOps" />

        <DropdownDepthedList>
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">Langauges</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
      transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
          >
            <DropdownList label="Javascript" />

            <DropdownDepthedList>
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Python</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
                    transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-white border rounded-sm absolute top-0 right-0 
                transition duration-150 ease-in-out origin-top-left
                min-w-32
                "
              >
                <DropdownList label="2.7" />
                <DropdownList label="3+" />
              </ul>
            </DropdownDepthedList>

            <DropdownList label="Go" />
            <DropdownList label="Rust" />
          </ul>
        </DropdownDepthedList>

        <DropdownList>
          <div className="grid grid-cols-2">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </DropdownList>

        <DropdownList>
          <div className="flex">
            <img
              className="w-5"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <span>name</span>
          </div>
        </DropdownList>
      </ul>
    </div>
  );
};
export default DropDown2;
