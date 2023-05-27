import React, { useEffect } from "react";
import { setPublicationPage } from "../../redux2.0/reducers/Publication";
import { useDispatch } from "react-redux";

export function Pagination({ nButtons, currentPage }) {
  const dispatch = useDispatch();
  function createArray(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  }
  const buttons = createArray(nButtons);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <button
          onClick={() => dispatch(setPublicationPage(currentPage - 1))}
          disabled={currentPage === 0 ? true : false}
        >
          <li>
            <a
              href="#"
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </button>
        {buttons &&
          buttons.map((number, i) => (
            <button key={i} className="boton" onClick={() => dispatch(setPublicationPage(number))}>
              <li>
                <a
                  href="#"
                  className={
                    currentPage === number
                      ? "py-2 px-3 leading-tight text-white-500 bg-sky-600 border rounded-sm"
                      : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-sky-200 hover:red-gray-700 dark:bg-red-800 dark:border-red-700 dark:text-red-400 dark:hover:bg-grared-700 dark:hover:text-white rounded-sm"
                  }
                >
                  {number + 1}
                </a>
              </li>
            </button>
          ))}
        <button
          onClick={() => dispatch(setPublicationPage(currentPage + 1))}
          disabled={currentPage === nButtons - 1 ? true : false}
        >
          <li>
            <a
              href="#"
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </button>
      </ul>
    </nav>
  );
}
