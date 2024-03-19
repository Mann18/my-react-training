import React from "react";

const Shimmer = ({ count }) => {
  const shimmers = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-around">
      {shimmers.map((_, index) => (
        <div
          key={index}
          className="w-96 h-96 m-3 p-3 border-2 rounded-lg bg-gray-300"
        >
          <div className="w-76 h-48 rounded-lg bg-gray-400"></div>
          <div className="my-2 w-76 h-8 bg-gray-200 rounded-md"></div>
          <div className="my-2 w-76 h-8 bg-gray-200 rounded-md"></div>
          <div className="my-2 w-76 h-8 bg-gray-200 rounded-md"></div>
          <div className="my-2 w-76 h-8 bg-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
