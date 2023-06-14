import CardsLanding from '../components/infoLanding/InfoLanding'
import DataLanding from '../components/dataLanding/DataLanding'
import ServiciosExtras from '../components/ServiciosExtras/serviciosExtras'

import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { InitialFiltersCard } from '../components/form/InitialFiltersCard'
import { MainHeader } from '../components/MainHeader'
import { Carousel, Item } from '../components/carousels/Carousel'

export function Landing({ setActiveStyle, scrollY }) {
  useEffect(() => {
    scrollY >= 55 ? setActiveStyle(false) : setActiveStyle(true)
    return () => {
      setActiveStyle(false)
    }
  }, [scrollY])

  return (
    <div className="pb-2">
      <MainHeader className="-mt-[4.8rem] flex items-center justify-center">
        <InitialFiltersCard className="flex w-full justify-center self-end" />
      </MainHeader>
      <div className="px-10">
        <DataLanding />
      </div>

      <div>
        <CardsLanding />
      </div>
      <ServiciosExtras />
    </div>
  )
}

Landing.propTypes = {
  setActiveStyle: PropTypes.func,
  scrollY: PropTypes.number,
}
