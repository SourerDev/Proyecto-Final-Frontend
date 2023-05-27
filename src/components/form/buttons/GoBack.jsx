export function GoBackButton({ className, ...props }) {
  const goBack = () => {
    window.history.back()
  }
  return (
    <button
      {...props}
      className={`whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 ${className}`}
      onClick={goBack}
    >
      Volver
    </button>
  )
}
