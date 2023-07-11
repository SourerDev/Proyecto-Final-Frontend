import PropTypes from 'prop-types'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export function Pagination({ nButtons, currentPage, setPage }) {
  nButtons = Math.ceil(nButtons)
  function createArray(n) {
    var array = []
    for (var i = 0; i < n; i++) {
      array.push(i)
    }
    return array
  }
  const buttons = createArray(nButtons)

  if (!nButtons) return <p>loading...</p>

  return (
    <div className="flex items-center gap-4 text-gray-700">
      <button
        onClick={() => setPage(currentPage - 1)}
        className="rounded p-2 disabled:text-gray-400 hover:bg-gray-100 disabled:hover:bg-transparent"
        disabled={currentPage === 0}
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2 text-sm">
        {buttons.map((number) => (
          <button
            onClick={() => setPage(number)}
            key={number}
            className={`grid  h-10 w-10 place-content-center rounded p-2.5 transition-all  ${
              currentPage === number
                ? 'bg-primary font-medium text-white shadow shadow-primary/80 ease-in'
                : ' ease-out bg-gray-100 hover:bg-gray-300'
            }`}
          >
            <span>{number + 1}</span>
          </button>
        ))}
      </div>
      <button
        onClick={() => setPage(currentPage + 1)}
        className="rounded p-2 disabled:text-gray-400 hover:bg-gray-100 disabled:hover:bg-transparent"
        disabled={currentPage === nButtons - 1}
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}

Pagination.propTypes = {
  nButtons: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
}
