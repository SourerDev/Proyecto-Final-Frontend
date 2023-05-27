import { useRef } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

export default function CarrouselDetail({ images }) {
  const dispatch = useDispatch()

  const slideshow = useRef(null)
  const interval = useRef(null)

  const next = () => {
    if (slideshow?.current?.children?.length > 0) {
      const firstElement = slideshow?.current?.children[0]
      slideshow.current.style.transition = '300ms ease-out all'

      const size = slideshow.current.children[0].offsetWidth

      slideshow.current.style.transform = `translatex(-${size}px)`

      const transicion = () => {
        slideshow.current.style.transition = 'none'
        slideshow.current.style.transform = 'translatex(0px)'

        slideshow.current.appendChild(firstElement)
        slideshow.current.removeEventListener('transitionend', transicion)
      }

      slideshow.current.addEventListener('transitionend', transicion)
    }
  }

  const previus = () => {
    if (slideshow?.current?.children.length > 0) {
      const endElement =
        slideshow.current.children[slideshow.current.children.length - 1]
      slideshow.current.insertBefore(endElement, slideshow?.current?.firstChild)

      slideshow.current.style.transition = 'none'

      const size = slideshow.current.children[0].offsetWidth
      slideshow.current.style.transform = `translate(-${size}px)`

      setTimeout(() => {
        slideshow.current.style.transition = '300ms ease-out all'
        slideshow.current.style.transform = 'translatex(0)'
      }, 30)
    }
  }

  return (
    <div className="h-4/4  flex flex-col items-center justify-center lg:w-[41rem] ">
      {images?.length > 0 && (
        <Main className="shadow">
          <Slideshow
            ref={slideshow}
            onMouseEnter={(e) => {
              clearInterval(interval.current)
              interval.current = null
            }}
            onMouseLeave={(e) => {
              interval.current = setInterval(() => {
                next()
              }, 5000)
            }}
          >
            {images?.length > 0 &&
              images.map((element, i) => (
                <Slide key={i}>
                  <img src={element} alt={element} className="rounded-lg" />
                </Slide>
              ))}
          </Slideshow>
          <Controls>
            <Button r className="left-0" onClick={previus}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
              </svg>
            </Button>
            <Button
              className="right-0 flex items-center justify-end"
              onClick={next}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
              </svg>
            </Button>
          </Controls>
        </Main>
      )}
    </div>
  )
}

const Main = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 0.2rem;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const Slideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;

  img {
    padding: 0 1px;
    width: 100%;
    height: 100%;
    vertical-align: top;
    transition: all 1s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 200px) {
    min-width: 100%;
  }

  @media screen and (min-width: 400px) {
    min-width: 100%;
  }
  @media screen and (min-width: 800px) {
    min-width: 100%;
  }
  @media screen and (min-width: 1200px) {
    min-width: 100%;
  }
`

const Controls = styled.div`
  position: absolute;
  top: 0%;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`
const Button = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3 ease all;
  &:hover {
    path {
      fill: #b7b4b4;
    }
  }

  path {
    filter: ${(props) =>
    props.r
      ? 'drop-shadow(-2px 0px 0px #fff)'
      : 'drop-shadow(2px 0px 0px #fff)'};
  }
  @media screen and (max-width: 400px) {
    svg {
      display: none;
    }
  }
`

const Title = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.7rem;
  font-weight: 600;
  color: #3c52c3;
  text-shadow: 0px 0px 9px #5f95d6;
  @media screen and (max-width: 700px) {
    position: absolute;
    font-size: larger;
    font-weight: 600;
    left: 5px;
    bottom: -25px;
    z-index: 10;
  }
`
