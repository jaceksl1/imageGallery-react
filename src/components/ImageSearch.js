import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className=" bg-white max-w-sm rounded overflow-hidden my-10 mx-auto px-2">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-blue-900 hover:bg-teal-700 border-blue-900 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
