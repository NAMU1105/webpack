import React from "react";
import Backdrop from "../UI/backdrop";
import styled from "styled-components";

const Loader = styled.div`
  border-top-color: #3498db;
`;

const LoadingSpinner: React.FC = () => {
  return (
    // 1. 직선바 형태
    //  <div className="relative bg-gray-200 rounded w-1/3">
    //    <div className="w-full absolute top-0 h-6 rounded overflow-hidden bg-blue-500  loading "></div>
    //  </div>

    // 2.oval shape
    // <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mb-8"></div>

    <Backdrop>
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="bg-white px-20 py-10 rounded-xl shadow-2xl">
          <Loader className="animate-spin rounded-full border-4 border-t-4 border-gray-200 h-16 w-16 mb-4"></Loader>
          <span>Loading...</span>
        </div>
      </div>
    </Backdrop>
  );
};

export default LoadingSpinner;
