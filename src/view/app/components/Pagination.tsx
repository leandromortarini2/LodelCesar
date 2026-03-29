import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const getPageNumbers = () => {
    const pageNumbers: (number | "...")[] = [];
    const maxPagesToShow = maxVisiblePages;
    const half = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, currentPage + half);

    if (startPage === 1 && endPage < totalPages) {
      endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    }
    if (endPage === totalPages && startPage > 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (startPage > 1) {
      pageNumbers.unshift("...");
      pageNumbers.unshift(1);
    }
    if (endPage < totalPages) {
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    const finalPageNumbers = Array.from(
      { length: Math.min(totalPages, 8) },
      (_, i) => i + 1,
    );

    return finalPageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const NavArrow: React.FC<{
    direction: "prev" | "next";
    disabled: boolean;
  }> = ({ direction, disabled }) => {
    const isPrev = direction === "prev";
    const newPage = isPrev ? currentPage - 1 : currentPage + 1;

    const arrowClass = `
      p-2 mx-1 rounded-full text-blue-500 transition-colors 
      ${
        disabled
          ? "text-gray-400 cursor-not-allowed"
          : "hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      }
      ${isPrev ? "" : ""}
    `;

    return (
      <button
        onClick={() => !disabled && onPageChange(newPage)}
        disabled={disabled}
        className={arrowClass}
        aria-label={isPrev ? "Página Anterior" : "Página Siguiente"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {isPrev ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          )}
        </svg>
      </button>
    );
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center space-x-2 p-3 rounded-xl ">
        <NavArrow direction="prev" disabled={currentPage === 1} />

        <div className="flex space-x-2">
          {pageNumbers.map((page, index) => {
            if (typeof page === "string" && page === "...") {
              return (
                <span key={index} className="px-3 py-1 text-gray-500">
                  ...
                </span>
              );
            }

            const isCurrent = page === currentPage;
            const buttonClass = `
              w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-150 ease-in-out cursor-pointer
              ${
                isCurrent
                  ? "bg-blue-500 text-white  "
                  : "text-gray-600 hover:bg-gray-100"
              }
            `;

            return (
              <button
                key={index}
                onClick={() => onPageChange(page as number)}
                className={buttonClass}
                aria-current={isCurrent ? "page" : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>
        <NavArrow direction="next" disabled={currentPage === totalPages} />
      </div>
    </div>
  );
};

export default Pagination;
