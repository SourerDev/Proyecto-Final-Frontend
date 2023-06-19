import { Carousel, Item } from './Carousel'

const services = [
  {
    service: 'Proveedor de servicios de podacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '1111',
  },
  {
    service: 'Proveedor de servicios de alimentos',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '222',
  },
  {
    service: 'Proveedor de servicios de picinas',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '3333',
  },
  {
    service: 'Proveedor de servicios de telecomunicacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '44444',
  },
  {
    service: 'Proveedor de servicios de telecomunicacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '5555',
  },
]

export function ServicesPropertyCarousel() {
  return (
    <div className='p-3 '>
      <h2 className="mt-2 rounded-lg bg-gray-800 px-4 text-left text-white mb-1">
        Servicios
      </h2>
      <Carousel>
        {services.map((service, i) => (
          <Item
            key={i}
            className="p-3 flex flex-col bg-white  text-center text-gray-800  justify-around border-x border-gray-800"
          >
            <p>{service.firm}</p>
            <p>{service.service}</p>
            <p>Telefono: {service.cellphone} </p>
          </Item>
        ))}
      </Carousel>

    </div>
  )
}
/**
 *   <div className="m-4 rounded-lg border border-gray-200 bg-white p-3 text-center text-gray-800 ">
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
 */
