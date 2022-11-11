
import {useState} from 'react'
import {useSelector } from 'react-redux'
import Paginado from "../../components/paginado/Paginado.jsx"
import Card from '../../components/card/Card'


export default function Home(){

const properties = useSelector(state => state.properties)

const paginado = (pageNumbers) =>{
    setCurrentPage(pageNumbers)
}


const [currentPage, setCurrentPage] = useState(1);
const [propertiesPage, setPropertiesPage] = useState(5);

const indexOfLastProperties = currentPage * propertiesPage;
const indexOfFirstProperties = indexOfLastProperties - propertiesPage;
const currentProperties = properties.slice(indexOfFirstProperties,indexOfLastProperties)

return(
<div>
<ul>                  
                <Paginado
                           
                           propertiesPage={propertiesPage}
                           properties={properties.length}
                           currentPage={currentPage}
                           setCurrentPage={setCurrentPage}
                            paginado={paginado}
                        />  
                         
                           
       </ul>
{
    currentProperties?.map((el)=>{
        return(
            <Card
            descripcion={el.descripcion}
            propiedades={el.propiedades}
            images = {el.images}
            />
        )
    })
}
    
</div>

)



}