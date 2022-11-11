
import { Link } from "react-router-dom";

export default function Card ({address, price , garage ,id, images}){

    return(
        <div>
            <img className="max-w-lg h-auto rounded-lg" src={images} alt="imagen" />        
            <p>{address}</p>  
            <p>{price}</p>
            <p>{garage}</p>

            <Link to ={`/detail/${id}`}><button>Mas Detalle</button></Link>
        </div>
    )
}