import AdvancedFilters from "../advanced-filters/AdvancedFilters";

export default function ModalAF({ setModalOn }) {


    const handleCancelClick = () => {

        setModalOn(false)
    }


    return (
        <div className="fixed top-0 inset-0 z-50 p-2 backdrop-blur-sm flex justify-center items-center" onDoubleClick={handleCancelClick}>
                <div className="h-[97vh] w-[30rem] overflow-hidden flex flex-col justify-center  bg-white p-12  border-4 border-sky-500 rounded-xl scrollbar">
                    <div className="relative w-full h-full">
                    <button onClick={handleCancelClick} className=" rounded
                                                                    w-10
                                                                    h-10
                                                                   text-white
                                                                   bg-blue-500 
                                                                   absolute
                                                                   -right-5
                                                                   -top-7
                                
                                                                   ">
                        X</button>
                    <div className="w-full absolute top-1"><AdvancedFilters setModalOn={setModalOn} /></div>
                    </div>
                    
                    {/* <button onClick={handleCancelClick} className=" rounded
                                                                   text-white
                                                                   bg-blue-500 ">
                        X</button>
                    <div className="w-full absolute"><AdvancedFilters /></div> */}


                </div>
        </div>

    )
}