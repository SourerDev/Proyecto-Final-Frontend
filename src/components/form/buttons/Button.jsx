export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  );
}
