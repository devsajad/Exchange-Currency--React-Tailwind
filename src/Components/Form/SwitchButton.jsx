import React from "react";

const SwitchButton = () => (
  <div className="switch-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 17"
      aria-hidden="true"
      className="h-4 w-4 rotate-90 text-greyblue-400 lg:rotate-0"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
        clipRule="evenodd"
      ></path>
    </svg>
  </div>
);

export default SwitchButton;
