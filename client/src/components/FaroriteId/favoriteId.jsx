import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  Card from "../card/Card.jsx"
import callsApi from "../../services";
import { findNameCity } from "../../utils/autocompleteUtils.js";
import { Link } from "react-router-dom";




export default function Favoriteid (){
    
    let {id_User} = useParams()
    const {properties,citiesA} = useSelector((state) => state)
    const [favorites,setFavorites] = useState([])
    
useEffect(() => {
    callsApi.favoritesbyId_user(id_User).then(res=>{
        const data = properties.filter(ele=> res.data.includes(ele.id))
        setFavorites(data)
    })
}, [properties])
     

    
    
    return(
        <div>
            <div><Link to="/home"><button class="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Volver</button></Link></div>
             <div className="text-center font-mono text-2xl bg-slate-900/70  text-white h-14 font-bold "><p className="inline-block align-middle">Mis favoritos</p></div>
            
          <div className="flex sm:flex-row flex-wrap justify-center lg:shadow-2xl ">
            {favorites?.length > 0 ? (favorites.map(ele=>
            <div className="my-2 px-4 lg:px-9">
            <Card
            
                key={ele.id}
                id={ele.id}
                favorite={true }
                city={findNameCity(citiesA,ele.idCity)}
                modality ={ele.modality}
                address={ele.address}
                price={ele.price}
                images={ele.images}
                garage={ele.garage}
                idUser={id_User}
                userProperty={ele.User}
            /></div>)):(<h1 className="text-red-800">Sin Favoritos</h1>)}
            </div>
        </div>
    )
}