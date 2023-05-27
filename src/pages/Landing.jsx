//import HeaderLanding from "../../components/header/HeaderLanding.jsx";
import CardsLanding from '../components/infoLanding/InfoLanding'
//import Carousel from "../../components/carousel/Carousel";
import ServiciosExtras from '../components/ServiciosExtras/serviciosExtras.jsx'

import DataLanding from '../components/dataLanding/DataLanding.jsx'

export default function Landing() {
  return (
    <div className="border px-1">
      {/* <HeaderLanding /> */}
      <div className="px-10">
        <DataLanding />
      </div>

      <div>
        <CardsLanding />
      </div>
      {/* <div className="mb-auto">
        <Carousel
          title={"Venta"}
          all={sale}
          images={sale?.length > 15 ? sale.slice(0, 15) : sale}
        />
        <Carousel
          title={"Alquiler"}
          all={rental}
          images={rental?.length > 15 ? rental.slice(0, 15) : rental}
        />
      </div> */}
      <ServiciosExtras />
    </div>
  )
}
