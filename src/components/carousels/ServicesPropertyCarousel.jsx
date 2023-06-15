import { Carousel, Item } from './Carousel'

const services = [
  {
    service: 'Proveedor de servicios de telecomunicacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '011 5431-8176',
  },
  {
    service: 'Proveedor de servicios de telecomunicacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '011 5431-8176',
  },
  {
    service: 'Proveedor de servicios de telecomunicacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '011 5431-8176',
  },
  {
    service: 'Proveedor de servicios de telecomunicacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '011 5431-8176',
  },
]

export function ServicesPropertyCarousel() {
  return (
    <div className='border-green-800 border-2 sm:border-yellow-600 sm:border-2 md:border-red-800 md:border-2'>
      <h2 className="mt-2 rounded-lg bg-gray-800 px-4 text-center text-white">
        Servicios
      </h2>
      <Carousel>
        {services.map((service, i) => (
          <Item
            key={i}
            className="rounded-lg border border-yellow-500 bg-white p-3 text-center text-gray-800"
          >
            <p>{service.firm}</p>
            <p>service.service</p> <p>Telefono: {service.cellphone} </p>
          </Item>
        ))}
      </Carousel>
    </div>
  )
}
/**
 *  <div className="my-8 rounded-lg border-2 border-black bg-blue-50 px-4 lg:m-14 ">
      <div className="px-10">
        <h5 className="mt-2 rounded-lg bg-gray-800 px-4 text-center text-white">
          Servicios
        </h5>
      </div>
      <div className=" m-1 inline items-center justify-center p-1 lg:flex">
        <div className="m-4 rounded-lg border border-gray-200 bg-white p-3 text-center text-gray-800 ">
          <p>InterNaxa S.A - Argentina</p>
          <p> Proveedor de servicios de telecomunicacion</p>{' '}
          <p>Telefono: 011 5431-8176 </p>{' '}
        </div>
        <div className="m-4 rounded-lg border border-gray-200 bg-white p-3 text-center text-gray-800 ">
          <p>Enersa - Paraná</p> <p>Compañía eletrica </p>{' '}
          <p>telefono: 0800-777-0080 </p>
        </div>
        <div className="m-4 rounded-lg border  border-gray-200 bg-white p-3 text-center text-gray-800 ">
          <p>Chavez Plomeria y Gas</p>
          <p> Instalador de gas </p> <p>Telefono: 0341 719-8170</p>
        </div>
        <div className="m-4 rounded-lg border border-gray-200 bg-white p-3 text-center text-gray-800 ">
          <p>Cerrajeria la Milagrosa</p>
          <p>Cerrajero</p>
          <p>Telefono: 0341 482-6481</p>
        </div>
      </div>
    </div>
 */
