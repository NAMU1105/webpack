import React, { ReactChildren } from "react";
import styled, { css } from "styled-components";
//import tw from "twin.macro";

// CSS
// TODO: CSS 파일 나누기
// TODO: responsive(밑으로 내려가는거), default(그냥 스크롤로)로 나누기
// const TableTotalWrapper = styled.div.attrs((props: any) => ({
//   className: "",
// }))<any>`
//   & > table > thead:not(:first-child) {
//     display: none;
//   }
// `;

const TableWrapper = styled.table.attrs((props: any) => ({
  className: "flex sm:flex-col  mb-2 sm:mb-0 sm:divide-y  sm:divide-gray-200",
}))<any>``;

const ThWrapper = styled.th.attrs((props: any) => ({
  className:
    "p-4 text-left text-gray-500 uppercase sm:border-none bg-indigo-100 sm:flex-1",
}))<any>`
  @media (max-width: 640px) {
    &:not(:last-child) {
      border-bottom: 1px rgb(229, 231, 235) solid;
      height: ${(props) => props.height};
    }
  }
`;

const TrWrapper = styled.tr.attrs({
  className: "flex flex-col flex-no wrap sm:flex-row sm:mb-0 ",
})``;

const TDWrapper = styled.td<any>`
  white-space: nowrap;
  padding: 1rem;
  max-width: ${(props) => props.maxwidth};
  flex: 1;
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
  className: "bg-white sm:divide-y sm:divide-gray-200",
})``;

export const TheadWrapper = styled.thead.attrs((props: any) => ({
  className: `bg-indigo-100 ${!props.first && `block sm:hidden`}`,
}))<any>``;

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
export const TableTotal: React.FC<WithChildren> = ({
  children,
}: WithChildren) => {
  return <div>{children}</div>;
  // return <TableTotalWrapper>{children}</TableTotalWrapper>;
};
// export default Table;
