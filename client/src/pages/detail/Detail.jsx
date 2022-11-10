import React from "react";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
// import { getIdProperties } from "../../redux/actions";
import { useEffect } from "react";





export default function Detail() {


  // const dispatch = useDispatch()

   const detailProperties = {
       "id": 1,
       "tipoPublicacion": "vender",
       "descripcion": "Gran casa de 335 metros cubiertos con 5 dormitorios, 4 baños (1 en suite), cómoda cocina, amplio lavadero, gran living comedor de 9,50 x 5 metros, muy iluminada por la luz del sol ya que la casa esta orientada al norte todo el lateral con amplias ventanas y puertas ventanas. Galpón muy grande y garaje para dos vehículos.La vivienda no solo se podría utilizar para vivir, también se puede habilitar para hospedaje y explotar el turismo en esta zona ya que estamos a tan solo 5 kilómetros del lago Lolog y a solo 2 kilómetros de la Laguna Rosales. En medio de la naturaleza y a escasos 7 kilómetros del casco céntrico de San Martin de los Andes",
       "approved": true,
       "deleted": false,
       "estado": "premium",
   
       "propiedades": [
         {
           "id": "0763033f-fb25-44f3-8236-fc1f9f7573d5",
           "name": "Casa - San Martin de los Andes",
           "image": "https://i.pinimg.com/564x/a4/f7/13/a4f7137f712ea2879841e25e15397e57.jpg",
           "ambientes": "5",
           "price": "500.00",
           "baños": "3",
           "surface": "1539.49",
           "video": "https://pin.it/7GH9Wan",
           "dormitorios": "3",
           "cochera": "1",
           "ubicacionGoogleMap": "Paseo de la Mucica 100, Lascar, Lacar, Neuquén "
         },
         {
           "id_user": "fb83e37e-c85d-42d3-8bd2-893f066b59a9",
           "name": "Mariangeles Guarda",
           "difficulty": "3",
           "approved": true,
           "tipo": "corredor Inmobiliario"
         }
       ]
   }

   
   

   return (
       <div>
           {
               detailProperties ? (
                   <div>
                       <div>
                           <Link to="/home">
                               <button>Volver</button>
                           </Link>
                       </div>
                       <div>
                       <h3>{detailProperties.descripcion}</h3>
                       <div>
                           {
                               detailProperties.propiedades[0].name
                           }
                       </div>
                      
                       <img src={detailProperties.propiedades[0].image}></img>
                       <div>
                           {
                               detailProperties.propiedades[0].ubicacionGoogleMap
                             
                           }
                       </div>
                       </div>

                   </div>
               )
               : 
               <div>
                   <p> Propiedad inexistente</p>
               </div>

           }
       </div>
   )
}