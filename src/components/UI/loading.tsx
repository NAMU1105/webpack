import React from "react";
import Backdrop from "../UI/backdrop";

// 직선바 형태
const LoadingSpinner: React.FC = () => {
  return (
    //  <div className="relative bg-gray-200 rounded w-1/3">
    //    <div className="w-full absolute top-0 h-6 rounded overflow-hidden bg-blue-500  loading "></div>
    //  </div>

    <Backdrop>
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="bg-white px-20 py-10 rounded-xl shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mb-8"></div>
          <span>Loading...</span>
        </div>
      </div>
    </Backdrop>
  );
};

export default LoadingSpinner;
