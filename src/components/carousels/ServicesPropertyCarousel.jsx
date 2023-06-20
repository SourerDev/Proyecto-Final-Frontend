import { Carousel, Item } from './Carousel'

const services = [
  {
    service: 'Servicio de Jardinería y Paisajismo',
    firm: 'CDI Eluney - Buenos Aires',
    cellphone: '1160509350',
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

