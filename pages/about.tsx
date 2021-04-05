import Router from "next/router";

const About = (props) => {
  return (
    <div className="bg-yellow-500 text-indigo-500">
      About
      <div>
        <button
          className="shadow bg-red-500 rounded text-black"
          onClick={() => Router.push("/?history=about", "/")}
        >
          Home
        </button>
      </div>
    </div>
  );
};
export default About;
