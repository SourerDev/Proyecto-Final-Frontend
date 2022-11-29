import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  Card from "../card/Card.jsx"
import callsApi from "../../services";
import { findNameCity } from "../../utils/autocompleteUtils.js";





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

            {favorites?.length > 0 ? (favorites.map(ele=><Card
                key={ele.id}
                id={ele.id}
                favorite={true}
                city={findNameCity(citiesA,ele.idCity)}
                modality ={ele.modality}
                address={ele.address}
                price={ele.price}
                images={ele.images}
                garage={ele.garage}
                idUser={id_User}
                userProperty={ele.User}
            />)):(<h1>Sin Favoritos</h1>)}

        </div>
    )
}