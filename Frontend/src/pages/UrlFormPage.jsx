import React from "react";
import UrlForm from "../components/UrlForm";

const UrlFormPage = () => {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortner</h1>
        <UrlForm/>
      </div>
    </div>
  );
};

export default UrlFormPage;
