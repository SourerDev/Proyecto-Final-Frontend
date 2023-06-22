import { AdvancedFilters } from '../advanced-filters/AdvancedFilters'

export default function ModalAF({ setModalOn }) {
  const handleCancelClick = () => {
    setModalOn(false)
  }

  return (
    <div
      className="fixed inset-0 top-0 z-50 flex items-center justify-center p-2 backdrop-blur-sm"
      onDoubleClick={handleCancelClick}
    >
      <div className="flex h-[97vh] w-[30rem] flex-col justify-center overflow-hidden  overflow-y-scroll rounded-xl  border-4 border-sky-500 bg-white p-12 scrollbar-thin scrollbar-track-blue-300/5 scrollbar-thumb-blue-700/5">
        <div className="relative h-full w-full">
          <button
            onClick={handleCancelClick}
            className=" text-w absolute -right-5 -top-7 h-10 w-10 rounded bg-blue-500                                                     "
          >
            X
          </button>
          <div className="absolute top-1 w-full">
            <AdvancedFilters setModalOn={setModalOn} />
          </div>
        </div>
      </div>
    </div>
  )
}
