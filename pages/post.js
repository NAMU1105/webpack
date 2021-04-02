import Router from "next/router";

export default (props) => {
  return (
    <div>
      First post page
      <div>
        <button onClick={() => Router.push("/?history=post", "/")}>Home</button>
      </div>
    </div>
  );
};
