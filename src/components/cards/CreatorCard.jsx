import { useEffect, useState } from 'react'
import { ApiGitHub } from '../../services'
import PropTypes from 'prop-types'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { Card } from './Card'

export function CreatorCard({ userName, role, linkedin }) {
  const [creator, setCreator] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    ApiGitHub.getUser({ userName })
      .then(({ data }) => {
        setLoading(false)
        setCreator(data)
      })
      .catch((error) => {})
  }, [userName])
  return (
    <Card className="mt-6 flex w-4/5 flex-col items-center justify-center rounded border-0 bg-gray-800 shadow-lg shadow-gray-800 sm:my-2 sm:h-[338px] sm:w-[250px] ">
      {isLoading ? (
        <div>
          <ArrowPathIcon className="h-auto w-10 animate-spin stroke-gray-300" />
        </div>
      ) : (
        <>
          <picture className="aspect-square w-40 overflow-hidden rounded-full shadow-lg">
            <img className="" src={creator.avatar_url} alt="" />
          </picture>

          <div className="p-6">
            <p className="-gap-x-1 mb-2 flex flex-col">
              <span className="text-xl font-medium text-white">
                {creator.name}
              </span>
              <span className="text-gray-500">{role}</span>
            </p>
            <div className="flex flex-row justify-center">
              <a
                className="mr-4"
                href={creator.html_url}
                target="_blank"
                rel="noreferrer"
                title={userName}
              >
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="h-8 w-8 text-gray-400 hover:text-gray-100 "
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-8 w-8 text-gray-400 hover:text-blue-700"
                >
                  {' '}
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}

//
CreatorCard.propTypes = {
  userName: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
}
