import Footer from "../../components/footer/Footer.jsx";
import HeaderLanding from "../../components/header/HeaderLanding.jsx";
import CardsLanding from "../../components/infoLanding/InfoLanding";
import  Carousel from "../../components/carousel/Carousel"
import ServiciosExtras from "../../components/ServiciosExtras/serviciosExtras.jsx";

import { useSelector } from "react-redux";
import { filter } from "../../utils/filters.js";
import { useEffect } from "react";



/* 
const images2=[
  {image:images[0],id:25486},
  {image:images[1],id:25486},
  {image:images[2],id:25486},
  {image:images[1],id:25486},
  {image:images[4],id:25486}
]
 */
export default function Landing() {

  const {properties} = useSelector(state => state)
  const sale = filter(properties,{operation:"Venta"})
  const rental = filter(properties,{operation:"Alquiler"})
  
  return (
    <div className="px-1" >
      <HeaderLanding/>
      <div className="mb-auto"> 
        <Carousel  title={'Venta'} all={sale} images={sale?.length > 15 ? sale.slice(0,15): sale}/>
        <Carousel title={'Alquiler'} all={rental} images={rental?.length > 15 ? rental.slice(0,15):rental}/></div>
      <ServiciosExtras/>
      <Footer />
    </div>
  );
}
