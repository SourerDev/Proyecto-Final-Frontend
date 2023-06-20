import { Carousel, Item } from './Carousel'

const services = [
  {
    service: 'Proveedor de servicios de comunicacion',
    firm: 'InterNaxa S.A - Argentina',
    cellphone: '011 5431-8176',
  },
  {
    service: 'Compañía eletrica',
    firm: 'Enersa - Paraná',
    cellphone: '0800-777-0080',
  },
  {
    service: 'Instalador de gas',
    firm: 'Chavez Plomeria y Gas',
    cellphone: '0341 719-8170',
  },
  {
    service: 'Cerrajero',
    firm: 'Cerrajeria la Milagrosa',
    cellphone: '0341 482-6481',
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
            className="p-3 flex justify-center text-center items-center flex-col bg-white  text-gray-800 border-x border-gray-800"
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
