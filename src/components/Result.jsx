import React from "react";

const Result = (props) => {
  return (
    <div className="flex items-center justify-center py-10">
      <div>
        <div className="flex justify-center">
          <img
            src={props.image}
            alt={props.user}
            className="w-32 rounded-full"
          />
        </div>
        <p className="text-xl font-bold my-2 uppercase text-gray-800">
          {props.user}
        </p>
        <p className="text-gray-500">
          Repository name :<span className="text-gray-600"> {props.repo}</span>
        </p>
      </div>
    </div>
  );
};
export default Result;
