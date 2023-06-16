import { LandingCards } from '../components/infoLanding/LandingCards'
import { DataLanding } from '../components/dataLanding/DataLanding'
import { ServicesPropertyCarousel } from '../components/carousels/ServicesPropertyCarousel'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { InitialFiltersCard } from '../components/form/InitialFiltersCard'
import { MainHeader } from '../components/MainHeader'

export function Landing({ setActiveStyle, scrollY }) {
  useEffect(() => {
    scrollY >= 55 ? setActiveStyle(false) : setActiveStyle(true)
    return () => {
      setActiveStyle(false)
    }
  }, [scrollY])

  return (
    <div className="pb-2">
      <MainHeader className="-mt-[4.8rem] mb-2 flex max-h-[800px] items-center justify-center">
        <InitialFiltersCard scrollY={scrollY} className="flex w-full justify-center self-end sm:px-[5%] md:px-[10%] lg:px-2 lg:py-4 xl:py-8" />
      </MainHeader>
      <div className="px-10 lg:px-[10rem]">
        <DataLanding />
      </div>

      <div>
        <LandingCards />
      </div>
      <ServicesPropertyCarousel />
    </div>
  )
}

Landing.propTypes = {
  setActiveStyle: PropTypes.func,
  scrollY: PropTypes.number,
}
