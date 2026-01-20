import React from "react";
import UrlForm from "./UrlForm";

const Dashbord = () => {
  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[50%] max-h-[80vh] flex flex-col">
        {/* <div className="flex flex-col items-center bg-amber-300 justify-center h-2xl "> */}
          <h1 className="text-2xl font-bold text-center mb-4">URL Shortner</h1>
          <UrlForm />
        </div>
      </div>
    // </div>
  );
};

export default Dashbord;
