import React, { ReactChildren } from "react";
import styled from "styled-components";
import { classNames } from "../../utils/utils";

//////////// start of css
// TODO: responsive(밑으로 내려가는거), default(그냥 스크롤로)로 나누기
// TODO: props받는 처리하기

const TheadWrappersss = styled.thead.attrs((props: any) => ({
  className: `${!props.first && `block sm:hidden`}`,
}))<any>``;

//////////// end of css
/////////////////////////////////////////////////////////////

export const TableTotal: React.FC<WithChildren> = ({
  children,
}: WithChildren) => {
  return <div className="table_wrapper">{children}</div>;
};

export const Table: React.FC<WithChildren> = ({ children }: WithChildren) => {
  return <table className="table_flex">{children}</table>;
};

/////////////////////////////////////////////
// Thead starts
type TheadColorType =
  | "thead-primary"
  | "thead-secondary"
  | "thead-lightblue"
  | "thead-transparent";

interface TheadProps {
  color?: TheadColorType;
  first?: boolean;
}

export const TheadWrapper: React.FC<TheadProps & WithChildren> = (
  props: TheadProps & WithChildren
) => {
  return (
    <TheadWrappersss
      first={props.first}
      className={classNames`thead ${props.color}`}
    >
      {props.children}
    </TheadWrappersss>
  );
};
// Thead ends
/////////////////////////////////////////////

// th
interface ThProps {
  title?: string;
  children?: React.ReactNode | React.FC | ReactChildren;
}
export const TH: React.FC<ThProps> = (props: ThProps) => {
  return (
    <th className="th" scope="col">
      {props.children ? props.children : props.title}
    </th>
  );
};

/////////////////////////////////////////////
// Tbody starts

type TbodyColorType =
  | "tbody-primary"
  | "tbody-secondary"
  | "tbody-lightblue"
  | "tbody-transparent";

interface TbodyProps {
  color?: TbodyColorType;
}

export const TbodyWrapper: React.FC<TbodyProps & WithChildren> = (
  props: TbodyProps & WithChildren
) => {
  return (
    <tbody className={classNames`tbody ${props.color}`}>{props.children}</tbody>
  );
};
// Tbody ends
/////////////////////////////////////////////

/////////////////////////////////////////////
// Tbody starts
// tr

type TrColorType =
  | "tr-primary"
  | "tr-secondary"
  | "tr-lightblue"
  | "tr-transparent";

interface TrProps {
  color?: TrColorType;
  id?: string;
}
export const TR: React.FC<TrProps & WithChildren> = (
  props: TrProps & WithChildren
) => {
  return <tr className={classNames`tr ${props.color}`}>{props.children}</tr>;
};
// tr ends
/////////////////////////////////////////////

/////////////////////////////////////////////
// td starts
interface TdProps {
  id?: string;
  title?: string;
  value: React.ReactNode | React.FC | ReactChildren;
  align?: "left" | "right" | "center";
}
export const TD: React.FC<TdProps> = (props: TdProps) => {
  //float={props.align}
  return <td className="td">{props.value}</td>;
};
