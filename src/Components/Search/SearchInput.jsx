import React from "react";

const SearchInput = ({ query, onQuery, onSearchClick, inputRef }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <input
        type="text"
        name="search"
        className="block outline-none lg:h-20 w-full"
        placeholder="Type to search "
        ref={inputRef}
        value={query}
        onChange={(event) => onQuery(event.target.value)}
      />
      <CloseIcon onSearchClick={onSearchClick} />
    </div>
  );
};

function CloseIcon({ onSearchClick }) {
  return (
    <svg
      onClick={() => {
        onSearchClick(false);
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
export default SearchInput;
