import React, { ReactChildren } from "react";
import styled, { css } from "styled-components";
//import tw from "twin.macro";

// CSS
// TODO: CSS 파일 나누기
// TODO: responsive(밑으로 내려가는거), default(그냥 스크롤로)로 나누기
const TableWrapper = styled.table.attrs((props: any) => ({
  className:
    "sm:inline-table w-full flex flex-row flex-no-wrap sm:bg-white sm:rounded-lg overflow-hidden sm:shadow-lg my-5",
}))<any>``;

const ThWrapper = styled.th.attrs((props: any) => ({
  className: "p-4 text-left text-gray-500 uppercase sm:border-none",
}))<any>`
  @media (max-width: 640px) {
    &:not(:last-child) {
      border-bottom: 1px rgb(229, 231, 235) solid;
      height: ${(props) => props.height};
    }
  }
  /* @media (max-width: 640px) {
      height: ${(props) => props.height};
  } */
`;

const TrWrapper = styled.tr.attrs({
  className:
    "bg-indigo-100 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0",
})``;

const TDWrapper = styled.td<any>`
  white-space: nowrap;
  padding: 1rem;
  max-width: ${(props) => props.maxwidth};
  background-color: white;
  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: ${(props) => props.align && props.align};
  }

  @media (max-width: 640px) {
    &:not(:last-child) {
      border-bottom: 1px rgb(229, 231, 235) solid;
    }
  }
`;

export const TbodyWrapper = styled.tbody.attrs({
  className: "sm:divide-y sm:divide-gray-200",
})``;

export const TheadWrapper = styled.thead<any>`
  //${(props: any) => props.bgColor && `background-color: ${props.bgColor}`};

  @media (min-width: 640px) {
    & > tr:not(:first-child) {
      display: none;
    }
  }
`;
/* ${(props: any) => props.color && `color: ${props.color}`}; */

//////////// end of css

// th
interface ThProps {
  title?: string;
  children?: React.ReactNode | React.FC | ReactChildren;
  height?: string | number;
}
export const TH: React.FC<ThProps> = (props: ThProps) => {
  return (
    <ThWrapper height={props.height} scope="col">
      {props.children ? props.children : props.title}
    </ThWrapper>
  );
};

// tr
interface TrProps {
  id?: string;
  children?: React.ReactNode | React.FC | ReactChildren;
}
export const TR: React.FC<TrProps> = (props: TrProps) => {
  return <TrWrapper>{props.children}</TrWrapper>;
};

// td
interface TdProps {
  id?: string;
  title?: string;
  isHalf?: boolean;
  children?: React.ReactNode | React.FC | ReactChildren;
  value: React.ReactNode | React.FC | ReactChildren;
  align?: "left" | "right" | "center";
  maxwidth?: string;
  innerRef?: any;
}
export const TD: React.FC<TdProps> = (props: TdProps) => {
  return (
    <TDWrapper
      ref={props.innerRef}
      maxwidth={props.maxwidth}
      float={props.align}
    >
      {props.value}
    </TDWrapper>
  );
};

/////////////////////////////////////////////////////////////

export const Table: React.FC<WithChildren> = ({ children }: WithChildren) => {
  return (
    <>
      <TableWrapper>{children}</TableWrapper>
    </>
  );
};
// export default Table;
