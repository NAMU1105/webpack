interface WithChildren {
  //* 자식 요소는 있을 수도 있고 없을 수도 있으며 -> ?:
  //* ReactNode 타입 or FunctionComponent 타입 or ReactChildren 타입으로 정의됩니다.
  //* 참고로 ReactNode 타입은 ( ReactChild | ReactFragment |
  // * ReactPortal | boolean | null | undefined ) 로 정의되어 있습니다.
  children?: React.ReactNode | React.FC | ReactChildren;
}
