import { useState } from 'react'
import { Carousel, Item } from './Carousel'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TABS = ['sale', 'rental']

export function PropertiesCarousel({ _type = 'sale' }) {
  const navigate = useNavigate()
  const [type, setType] = useState(_type)
  const { publications } = useSelector((state) => state.publication)
  const properties = publications.filter((p) => (p.modality === type)).slice(0, 11)

  return (
    <div className='px-4 mb-4 '>

      <div className='flex'>
        {TABS.map( tab => <button className={`px-6 py-1 mt-1 rounded-t bg-gray-800 text-left text-xl font-medium  text-white mb-2 border-b-2 ${tab === type ? ' border-violet-400': 'bg-gray-800/70 border-transparent'} `} onClick={() => setType(tab)} key={tab}>{tab}</button>)}
      </div>
      <Carousel>
        {properties.map(({ Property,  ...property }, i) => (
          <Item className="px-0.5" key={i} onClick={() => navigate(`/properties/${property.idPublication}`)}>
            <picture className="overflow-hidden relative ">
              <img className="hover:scale-105" src={ Property.photos[0]} alt="" />
              <caption className='absolute bottom-0 left-0  z-30 whitespace-nowrap px-2 text-gray-100 font-medium bg-black/50 w-full rounded-t text-left'>{Property.City.string.length > 35 ? Property.City.string.slice(0, 33) + ' ...' : Property.City.string }</caption>
            </picture>
          </Item>
        ))}
      </Carousel>
    </div>
  )
}
