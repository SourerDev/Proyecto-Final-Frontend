import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function CarouselHome({ title, images }) {
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

  useEffect(() => {
  }, []);

  return (
    <div className="w-full overflow-hidden flex flex-col justify-center items-center py-2">
     
      {images?.length && (
        <Main>
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
            {images.map((element, i) => (
              <Slide key={i}>
                <a href="">
                  <img src={element.image} alt={element.id} className="" />
                </a>
                
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
    svg{
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
    svg{
      display:none;
    }
  }
`;

const Title = styled.h1`
  font-size: large;
  font-weight: 600;
  @media screen and (max-width: 700px) {
    font-size: medium;
    font-weight: 600;
  }
`;
