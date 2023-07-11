import PropTypes from 'prop-types'
import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export function Carousel({ children }) {
  const carouselRef = useRef(null)

  const next = () => {
    if (carouselRef?.current?.children?.length > 0) {
      const firstElement = carouselRef?.current?.children[0]
      carouselRef.current.style.transition = '300ms ease-out all'

      const size = carouselRef.current.children[0].offsetWidth

      carouselRef.current.style.transform = `translatex(-${size}px)`

      const transicion = () => {
        carouselRef.current.style.transition = 'none'
        carouselRef.current.style.transform = 'translatex(0px)'

        carouselRef.current.appendChild(firstElement)
        carouselRef.current.removeEventListener('transitionend', transicion)
      }

      carouselRef.current.addEventListener('transitionend', transicion)
    }
  }
  function previus() {
    if (carouselRef?.current?.children.length > 0) {
      const endElement =
        carouselRef.current.children[carouselRef.current.children.length - 1]
      carouselRef.current.insertBefore(
        endElement,
        carouselRef?.current?.firstChild
      )

      carouselRef.current.style.transition = 'none'

      const size = carouselRef.current.children[0].offsetWidth
      carouselRef.current.style.transform = `translate(-${size}px)`

      setTimeout(() => {
        carouselRef.current.style.transition = '300ms ease-out all'
        carouselRef.current.style.transform = 'translatex(0)'
      }, 30)
    }
  }

  return (
    <div className="relative m-0 w-full overflow-hidden p-0 ">
      <button
        onClick={previus}
        className=" group absolute top-1/2  left-0 z-40 grid aspect-square -translate-y-1/2 transform place-content-center  rounded-full "
      >
        <ChevronLeftIcon className="h-6 w-8 stroke-gray-500/50 transition-all group-hover:stroke-gray-800/50" />
      </button>
      <button
        onClick={next}
        className=" group absolute top-1/2 right-0 z-40 grid aspect-square -translate-y-1/2 transform place-content-center rounded-full"
      >
        <ChevronRightIcon className="h-6 w-8 stroke-gray-500/50 transition-all group-hover:stroke-gray-800/50" />
      </button>
      <div ref={carouselRef} className="z-40 flex w-full">
        {children}
      </div>
    </div>
  )
}
export function Item({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={`min-w-full sm:min-w-[50%]  md:min-w-[33.333%] md:max-w-[25%] lg:min-w-[25%] lg:max-w-[33.333%] ${className}`}
    >
      {children}
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.any,
  viewItems: PropTypes.number,
}
Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
