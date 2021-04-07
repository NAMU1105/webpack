import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

let isMonted = false;

const Backdrop: React.FC<WithChildren> = (props: WithChildren) => {
  //const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  useEffect(() => {
    if (!isMonted) isMonted = true;

    if (isMonted) {
      // setShowBackdrop(true);
      document.body.style.overflow = "hidden";
      //document.querySelector("#app").style.background=
      document.body.style.backgroundColor = "white";
    }
  }, []);

  useEffect(() => {
    return () => {
      // 스크롤 방지 해제
      document.body.style.overflow = "unset";
    };
  });

  //if (!showBackdrop) {
  // return null;
  //} else {
  return ReactDOM.createPortal(
    <div className="w-screen h-screen bg-backdrop relative z-50">
      {props.children}
    </div>,
    document.getElementById("backdrop-hook")
  );
};
//};

export default Backdrop;
