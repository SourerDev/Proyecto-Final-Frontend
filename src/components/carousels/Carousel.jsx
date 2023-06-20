import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { findNameCity } from '../../utils/autocompleteUtils'
import { Link, useNavigate } from 'react-router-dom'
import { filterProperties } from '../../redux/actions'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

/*
  ABCD -> BCDA ->
  -tamaño del carrosel luego +tamaño del tamaño
  boton derecho
*/

export function Carousel({ children }) {
  const carouselRef = useRef(null)

  /* function next() {
    if (carouselRef?.current?.children.length > 0) {
      const firstElement = carouselRef.current.children[carouselRef.current.children.length - 1]
      const eliminado = children.shift()
      children.push(eliminado)
    }
  } */
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
    <div
      className= 'relative w-full overflow-hidden p-0 m-0 '
    >
      <button
        onClick={previus}
        className=" group absolute top-1/2  left-0 z-40 grid aspect-square -translate-y-1/2 transform place-content-center  rounded-full "
      >
        <ChevronLeftIcon className="h-6 w-8 stroke-gray-500/50 group-hover:stroke-gray-800/50 transition-all" />
      </button>
      <button
        onClick={next}
        className=" group absolute top-1/2 right-0 z-40 grid aspect-square -translate-y-1/2 transform place-content-center rounded-full"
      >
        <ChevronRightIcon className="h-6 w-8 stroke-gray-500/50 group-hover:stroke-gray-800/50 transition-all" />
      </button>
      <div ref={carouselRef} className="flex h-[100%] w-full z-40">
        {children}
      </div>
    </div>
  )
}
export function Item({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={`flex h-full min-w-full items-center justify-center sm:min-w-[50%]  md:min-w-[33.333%] md:max-w-[25%] lg:min-w-[25%] lg:max-w-[33.333%] ${className}`}
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
