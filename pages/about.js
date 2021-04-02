import Router from "next/router";

export default (props) => {
  return (
    <div>
      About
      <div>
        <button onClick={() => Router.push("/?history=about", "/")}>
          Home
        </button>
      </div>
    </div>
  );
};
