import { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { findNameCity } from "../../utils/autocompleteUtils";
import { Link,useNavigate } from "react-router-dom";
import {filterProperties} from '../../redux/actions'

export default function Carousel({ title, images }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { citiesA } = useSelector((state) => state);


  const slideshow = useRef(null);
  const interval = useRef(null);

  const next = () => {
    if (slideshow?.current?.children?.length > 0) {
      const firstElement = slideshow?.current?.children[0];
      slideshow.current.style.transition = `300ms ease-out all`; 

      const size = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translatex(-${size}px)`;

      const transicion = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translatex(0px)`;

        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const previus = () => {
    if (slideshow?.current?.children.length > 0) {
      const endElement =
        slideshow.current.children[slideshow.current.children.length - 1];
      slideshow.current.insertBefore(
        endElement,
        slideshow?.current?.firstChild
      );

      slideshow.current.style.transition = `none`;

      const size = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translate(-${size}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translatex(0)`;
      }, 30);
    }
  };

  return (
    <div className="w-full overflow-hidden flex flex-col justify-center items-center py-2">
      <div className="relative flex justify-between sm:w-11/12 sm:px-3 px-1 w-full">
        <Title>{title || "Title"}</Title>
        <button className="hidden sm:block hover:text-blue-500 hover:p-1"
          onClick={()=>{
            dispatch(filterProperties(images))
            navigate('/home')
          }}
        >Ver Mas »</button>
      </div>
      {images?.length > 0 && (
        <Main className="shadow">
          <Slideshow
            ref={slideshow}
            onMouseEnter={(e) => {
              clearInterval(interval.current);
              interval.current = null;
            }}
            onMouseLeave={(e) => {
              interval.current = setInterval(() => {
                next();
              }, 5000);
            }}
          >
            {images?.length > 0 && (
              images.map((element, i) => (
                <Slide key={i}>
                  <Link to={`/detail/${element.id}`}>
                    <img
                      src={element.images[0]}
                      alt={element.id}
                      className=""
                    />
                  </Link>
                  {element?.id && (
                    <TextSlide>
                      <svg
                        className=""
                        fill="#fff"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                      </svg>
                      <p>{findNameCity(citiesA, element.idCity)}</p>
                    </TextSlide>
                  )}
                </Slide>
              ))
            )}
          </Slideshow>
          <Controls>
            <Button r className="left-0" onClick={previus}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
              </svg>
            </Button>
          </Controls>
        </Main>
      )}
    </div>
  );
}

const Main = styled.div`
   overflow: hidden; 
  position: relative;
  width: 90%;
  border-radius: 0.2rem;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const Slideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden; 
  transition: 0.3s ease all;
  z-index: 10;
  max-height: 250px;
  position: relative;

  img {
    padding: 0 1px;
    width: 100%;
    height: 100%;
    vertical-align: top;
    transition: all 1s ease-in-out;
    &:hover {
      transform: scale(1.1);
      filter: grayscale(80%);
    }
  }

  @media screen and (min-width: 200px) {
    min-width: 100%;
  }

  @media screen and (min-width: 400px) {
    min-width: 50%;
  }
  @media screen and (min-width: 800px) {
    min-width: 33.33333333%;
  }
  @media screen and (min-width: 1200px) {
    min-width: 25%;
  }
`;

const TextSlide = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 10px 5px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  font-weight: 900;
  display: flex;
  justify-content: right;
  align-items: center;
  @media screen and (max-width: 700px) {
    font-size: small;
    svg {
      display: none;
    }
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 0%;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
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
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }
  @media screen and (max-width: 400px) {
    svg {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
`;
