//import Carousel from "../../components/carousel/Carousel";
import CardsLanding from '../components/infoLanding/InfoLanding'
import DataLanding from '../components/dataLanding/DataLanding.jsx'
import ServiciosExtras from '../components/ServiciosExtras/serviciosExtras.jsx'
import { InitialFiltersCard } from '../components/form/InitialFiltersCard'
import { MainHeader } from '../components/MainHeader'
import { useSelector } from 'react-redux'

export function Landing() {
  const { byPublication, byProperty, byCity } = useSelector(
    (state) => state.app.filters
  )
  return (
    <div className="border px-1">
      <MainHeader className="flex items-center justify-center">
        <InitialFiltersCard />
      </MainHeader>
      <div>
        <p>{byPublication.modality}</p>
        <p>{byProperty.type}</p>
        <p>{byCity.idCity}</p>
        <p>{byCity.string}</p>
      </div>
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
