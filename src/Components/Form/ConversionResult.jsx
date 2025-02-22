/* eslint-disable react/prop-types */
import React from "react";

const ConversionResult = ({ result }) => {
  return (
    <div className="self-center max-lg:justify-self-center text-2xl font-medium my-2">
      <p>{result}</p>
    </div>
  );
};

export default ConversionResult;
