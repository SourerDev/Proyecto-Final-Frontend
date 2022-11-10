

export default function Card ({descripcion,tipoPublicacion, propiedades }){
    const images = propiedades.map((el) => el.image) 
    console.log(images)
    const name = propiedades.map(el=> el.name)
    const price = propiedades.map(el => el.price)
    console.log(tipoPublicacion)
       return(
           <div>
               <h1>{name}</h1>
               <img  src='https://i.pinimg.com/564x/a4/f7/13/a4f7137f712ea2879841e25e15397e57.jpg' alt ='hola'></img>  
               <h3>{price}</h3>
               <h3>{tipoPublicacion}</h3>
                  
           </div>
       )
   }