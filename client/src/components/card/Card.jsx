
import { Link } from "react-router-dom";

export default function Card ({address, price , garage ,id, images}){

    return(
        <div className=" bg-indigo-500 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={images} alt="imagen" />      
            <div className="px-5 pb-5"> 
           <a> 
            <h3 className="text-3xl text-gray-900 dark:text-white font-semibold tracking-tight ">{address}</h3>
           </a>
           <br/>
            <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <Link to ={`/detail/${id}`}><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mas Detalle
            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></Link></a>
        </div>
</div> 
        </div>
    )
}