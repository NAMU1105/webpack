import React, { ReactChildren } from "react";
import styled, { css } from "styled-components";
//import tw from "twin.macro";

// CSS
// TODO: CSS 파일 나누기
const TableWrapper = styled.table.attrs((props: any) => ({
  className:
    "mb-4 w-full overflow-hidden divide-y divide-gray-200 shadow border-b border-gray-200 sm:rounded-lg bg-white ",
}))<any>``;

const ThWrapper = styled.th.attrs({
  className:
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ",
})``;
const TrWrapper = styled.tr.attrs({
  className: "w-full border-b border-gray-200",
})``;

// const TDWrapper = styled.td.attrs((props: any) => ({
//   className: "px-6 py-4 whitespace-nowrap border-b border-gray-200",
// }))<any>`
//   & {
//     > div {
//       /* ${tw`text-sm text-gray-900 whitespace-nowrap overflow-ellipsis overflow-hidden`} */
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       font-size: 0.875rem;
//       line-height: 1.25rem;
//       /* float: ${props.align}; */
//     }
//   }
// `;

const TDWrapper = styled.td<any>`
  white-space: nowrap;
  padding: 1em 1.5rem;
  border-bottom: 1px rgb(229, 231, 235) solid;
  max-width: ${(props) => props.maxwidth};

  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.875rem;
    line-height: 1.25rem;
    /* background: ${(props) => (props.color ? props.color : "yellow")}; */
    float: ${(props) => props.align && props.align};
    /* max-width: ${(props) => props.maxwidth}; */
  }
`;

export const TbodyWrapper = styled.tbody.attrs({
  className: "bg-white divide-y divide-gray-200",
})``;

export const TheadWrapper = styled.thead<any>`
  background-color: rgba(249, 250, 251, 1);
  ${(props: any) => props.bgColor && `background-color: ${props.bgColor}`};
`;
/* ${(props: any) => props.color && `color: ${props.color}`}; */

//////////// end of css

// th
interface ThProps {
  title?: string;
  children?: React.ReactNode | React.FC | ReactChildren;
}
export const TH: React.FC<ThProps> = (props: ThProps) => {
  return (
    <ThWrapper scope="col">
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
}
export const TD: React.FC<TdProps> = (props: TdProps) => {
  return (
    <TDWrapper maxwidth={props.maxwidth} float={props.align}>
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
