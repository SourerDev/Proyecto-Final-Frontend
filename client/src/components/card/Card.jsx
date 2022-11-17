import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { icons } from "../../images";
import { removeFavorite,addFavorites} from '../../redux/actions/index'

export default function Card({
  address,
  price,
  garage,
  id,
  images,
  modality = "Operación",
  city,
  user,
  favorite = false
}) {
  const dispatch = useDispatch()
  const { Heart, HeartBorder, User } = icons;

  const [state,setState] = useState({
    favorite: favorite
  })

  const addFavorite = (evt)=>{
    evt.preventDefault()
    setState((previus)=>{
      return{
        ...previus,
        favorite: previus.favorite ? false : true
      }
    })

  }
useEffect(()=>{
    if((favorite && state.favorite) || (!favorite && !state.favorite)) return
    if((favorite && !state.favorite)){
      dispatch(removeFavorite(id))
    }else if((!favorite && state.favorite)){
      dispatch(addFavorites([id]))
    }
},[state])

  return (
    <div className="flex flex-col justify-center items-center max-w-sm bg-white shadow p-2">
      <div className="relative z-10 overflow-hidden w-[95%] h-60 rounded-lg">
        <img className="w-full h-full" src={images} alt={id} />
        {modality && (
          <div className="flex items-center justify-center absolute z-20 bottom-1 left-1 bg-green-300/75 text-green-800 font-medium px-1 rounded-lg">
            <h3>{modality}</h3>
          </div>
        )}
        {
          <button className="absolute  bottom-1 right-1 bg-white rounded-full p-1 flex justify-center items-center hover:bg-zinc-100"
            onClick={addFavorite}
          >
            {state.favorite ? <Heart fill={"#eb33c6"} width="20" hover={"#a20582"} /> :<HeartBorder fill={"#eb33c6"} width="20" hover={"#a20582"} />}
          </button>
        }
      </div>
      <div className="flex justify-between w-full px-2 h-20">
        <div className="flex flex-col justify-center p-2">
          <h3 className="text-xl text-gray-900 dark:text-white font-semibold tracking-tight pt-2">
            {city || "Sin localización"}
          </h3>
          <span className="text-sm -mt-1 pl-2">{address}</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            {`${price} USD`}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-slate-300 w-14 h-14 rounded-full mt-2 mr-2">
            <User className="w-full text-white" hover={"#fff"} fill={"#fff"} />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-2">
        <div></div>
        <Link to={`/detail/${id}`}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:shadow">
            Mas Detalle
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
