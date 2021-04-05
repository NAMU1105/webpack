import Router from "next/router";

const POSTS = (props) => {
  return (
    <div>
      First post page
      <div>
        <button onClick={() => Router.push("/?history=post", "/")}>Home</button>
      </div>
    </div>
  );
};

export default POSTS;
