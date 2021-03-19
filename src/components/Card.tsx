import React from "react";
import "./Card.css";

interface IF {}

const ST: React.FC<IF> = (props: IF) => {
  return (
    <>
      <div className="test text-yellow-500">card!!</div>
      <h1 className="text-white bg-indigo-500">tailwind</h1>
    </>
  );
};
export default ST;
