"use client";

import { useEffect } from "react";

function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10 ">
      <h1 className=" text-xl mb-5 ">
        Something went wrong. Please Try Again
      </h1>
      <button className="p-2 bg-orange-600 text-black rounded hover:text-white" onClick={() => reset}>
        {" "}
        Try Again
      </button>
    </div>
  );
}

export default error;
