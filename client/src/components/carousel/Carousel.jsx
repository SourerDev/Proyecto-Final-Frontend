import styled from "styled-components";

export default function Carousel() {
  const images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
    "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
    "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
    "https://images.unsplash.com/photo-1667802132853-7549c1ff0c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  const next = ()=>{

  }

  return (
    <div className="w-full overflow-hidden flex justify-center items-center">
      <Main>
        <Slideshow>
          <Slide>
            <a href="">
              <img src={images[4]} alt="" className="" width={340} />
            </a>
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
              <p>San marcos</p>
            </TextSlide>
          </Slide>
          <Slide>
            <a href="">
              <img src={images[1]} alt="" className="" width={340} />
            </a>
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
              <p>San marcos</p>
            </TextSlide>
          </Slide>
          <Slide>
            <a href="">
              <img src={images[2]} alt="" className="" width={340} />
            </a>
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
              <p>San marcos</p>
            </TextSlide>
          </Slide>
          <Slide>
            <a href="">
              <img src={images[3]} alt="" className="" width={340} />
            </a>
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
              <p>San marcos</p>
            </TextSlide>
          </Slide>
          <Slide>
            <a href="">
              <img src={images[4]} alt="" className="" width={340} />
            </a>
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
              <p>San marcos</p>
            </TextSlide>
          </Slide>
        </Slideshow>
        <Controls>
          <Button r className="left-0">
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
          <Button className="right-0 flex items-center justify-end">
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
    </div>
  );
}

const Main = styled.div`
  overflow: hidden;
  position: relative;
  width: 90%;
  border-radius: .2rem;
  @media screen and (max-width:630px){
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
    width: 100%;
    vertical-align: top;
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
