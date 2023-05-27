import { useState } from 'react'
import { Input } from './Input'

export function PasswordInput({ ...props }) {
  const [viewPassword, setViewPassword] = useState(true)

  return (
    <div className="relative w-full ">
      <Input {...props} type={viewPassword ? 'password' : 'text'} />
      <button
        className="absolute top-0 right-0 z-10 h-full w-8 border-l px-1 text-gray-600 hover:text-gray-800 "
        type="button"
        onClick={() => setViewPassword(viewPassword ? false : true)}
      >
        {!viewPassword ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.38 12.38 0 0 1 4 .72l1.55-1.56A14.72 14.72 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17Z"
            />
            <path
              fill="currentColor"
              d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.29 15.29 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68zM20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2zm-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z"
            />
            <path
              fill="currentColor"
              d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
