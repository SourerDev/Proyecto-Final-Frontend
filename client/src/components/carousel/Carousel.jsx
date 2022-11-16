import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Carousel({ title, images }) {
  const slideshow = useRef(null);
  let interval = useRef(null);
  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
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
    if (slideshow.current.children.length > 0) {
      const endElement =
        slideshow.current.children[slideshow.current.children.length - 1];
      slideshow.current.insertBefore(endElement, slideshow.current.firstChild);

      slideshow.current.style.transition = `none`;

      const size = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translate(-${size}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translatex(0)`;
      }, 30);
    }
  };

  useEffect(() => {
     let interval = setInterval(()=>{
       next()
     },5000)

     slideshow.current.addEventListener('mouseenter',()=>{
      console.log('entre'); 
      clearInterval(interval);
    })

     slideshow.current.addEventListener('mouseleave',()=>{
      console.log('sali'); 
      interval = setInterval(()=>{
         next()
       },5000);
     })
  }, []);

  return (
    <div className="w-full overflow-hidden flex flex-col justify-center items-center">
      <div className="flex justify-between sm:w-11/12 sm:px-3 px-1 w-full">
        <Title>{title || "Title"}</Title>
        <p className="hidden sm:block">Ver Mas »</p>
      </div>
      {images?.length && (
        <Main>
          <Slideshow ref={slideshow}>
            {images.map((element, i) => (
              <Slide key={i}>
                <a href="">
                  <img src={element.image} alt={element.id} className="" />
                </a>
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
                    <p>{false || "Ubicacion"}</p>
                  </TextSlide>
                )}
              </Slide>
            ))}
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
  min-width: 50%;
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
  @media screen and (max-width: 700px) {
    position: relative;
    background: black;
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
`;

const Title = styled.h1`
  font-size: medium;
  font-weight: 600;
`;
