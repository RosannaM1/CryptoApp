import React from "react";

const PaginationButtons = ({ isFirstPage, isLastPage, disableBothButtons, loadLess, loadMore }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
          isFirstPage || disableBothButtons
            ? "pointer-events-none opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={loadLess}
        disabled={isFirstPage || disableBothButtons}
      >
        Prev
      </button>
      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
          isLastPage || disableBothButtons
            ? "pointer-events-none opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={loadMore}
        disabled={isLastPage || disableBothButtons}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
