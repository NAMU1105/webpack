import React from "react";
// import "./card.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IF {}

const StyledTest = styled.div`
  color: red;
  background-color: gainsboro;
`;

const ST: React.FC<IF> = (props: IF) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <StyledTest>testme!</StyledTest>
      <div className="test text-yellow-500">{t("hello")}</div>
      <h1 className="text-white bg-indigo-500">tailwind</h1>
    </>
  );
};
export default ST;
