import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { favoritesbyId_user } from "../../redux/actions";





export default function Favoriteid (){
  const dispatch = useDispatch(); 
  let {id_User} = useParams()
 const favorite = useSelector((state) => state.idFavorite)
console.log(favorite)

    
useEffect(() => {
    dispatch(favoritesbyId_user(id_User))
   
}, [id_User])
     

    
    
    return(
        <div></div>
    )
}