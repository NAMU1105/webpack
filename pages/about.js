import Router from "next/router";

const About = (props) => {
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
export default About;
