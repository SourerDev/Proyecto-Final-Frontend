import { useCallback, useLayoutEffect, useRef } from 'react'

export function TextArea({ value, className, ...props }) {
  const textAreaRef = useRef()
  const inputRef = useCallback((textArea) => {
    updateTextAreaSize(textArea)
    textAreaRef.current = textArea
  })
  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current)
  }, [value])

  return (
    <textarea
      ref={inputRef}
      style={{ height: 0 }}
      className={`flex-grow resize-none overflow-hidden text-lg outline-none ${className}`}
      {...props}
    ></textarea>
  )
}

function updateTextAreaSize(textArea) {
  if (textArea === null) return

  textArea.style.height = '0'
  textArea.style.height = `${textArea.scrollHeight}px`
}
