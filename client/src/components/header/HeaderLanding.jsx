import styled from "styled-components";
import LandingSearch from "../landingSearch/LandingSearch";

const HeaderLanding = (images) => {
  const Slider = slider();
  return (
      <div className="  border-1 rounded relative w-full h-96 sm:h-[32rem] lg:h-[40rem]">
        <Slider>
          <div className="flex justify-center items-center">
            <LandingSearch />
          </div>
        </Slider>
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
