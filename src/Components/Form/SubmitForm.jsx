import React from "react";

export default function SubmitForm({ onClickSubmit }) {
  return (
    <button className="btn" onClick={(e) => onClickSubmit(e)}>
      Convert
    </button>
  );
}
