
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getallProperties } from '../../redux/actions/index'
import Paginado from "../../components/Paginado/Paginado"
import Card from '../../components/Card/Card'


export default function Home(){
const Dispatch = useDispatch()
const properties = useSelector(state => state.properties)

const paginado = (pageNumbers) =>{
    setCurrentPage(pageNumbers)
}

useEffect(()=> {
Dispatch(getallProperties())
},[Dispatch])


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