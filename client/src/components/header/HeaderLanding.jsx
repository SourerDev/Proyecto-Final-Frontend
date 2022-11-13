import styled from "styled-components";
import { Link } from "react-router-dom";
import LandingSearch from "../landingSearch/LandingSearch";
//className="flex justify-center items-center bg-cover bg-no-repeat bg-center shadow min-h-screen bg-[url('https://i.pinimg.com/originals/2f/9d/84/2f9d84d72b045ecb50399e9177b73288.jpg

const HeaderLanding = () => {
  const Slider = slider();
  return (
    <div className="flex flex-col sm:min-h-screen">
      <div className="flex flex-row justify-between p-4 relative shadow">
        <div className="text-2xl font-bold sm:text-3xl sm:font-extrabold tracking-wide flex space-x-4">
          <img
            className="h-8 w-auto sm:h-12"
            src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
            alt=""
          />
          <h1 className="self-start">Properties</h1>
          <h1 className="self-center">&</h1>
          <h1 className="self-end">You</h1>
        </div>
        <div className="">
          <div className="flex items-center space-x-4">
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-500"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96 sm:h-[32rem] lg:h-[40rem]">
        <Slider>
          <div className="flex justify-center items-center">
            <LandingSearch />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export function slider(
  images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
    "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-de-campo-moderna30-1639245321.jpg",
    "https://i.pinimg.com/originals/27/51/cc/2751cc959a1ecb2ec3ff304791f1c86a.jpg",
  ]
) {
  return styled.div`
    width: 90%;
    height: 95%;
    background-image: url(${images[3]});
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(-50%, -50%);
    border-radius: 10px;
    transition: all 1s;
    animation: slide 40s ease infinite;
    @keyframes slide {
      25% {
        background-image: url(${images[0]});
      }
      50% {
        background-image: url(${images[1]});
      }
      75% {
        background-image: url(${images[2]});
      }
      100% {
        background-image: url(${images[3]});
      }
    }
    @media screen and (max-width: 650px) {
      width: 100%;
      border-radius: 0%;
    }
  `;
}
export default HeaderLanding;
