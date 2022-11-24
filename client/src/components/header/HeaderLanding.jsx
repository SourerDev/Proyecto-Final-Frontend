import styled from "styled-components";
import LandingSearch from "../landingSearch/LandingSearch";

const HeaderLanding = (images) => {
  const Slider = slider();
  return (
      <div className="  border-1 rounded relative w-full h-96 sm:h-[32rem] lg:h-[20rem]">
        <Slider>
          <div className="flex justify-center items-center mt-90">
            <LandingSearch />
          </div>
        </Slider>
      </div>
  );
};

export function slider(
  images = [
    "https://img.freepik.com/foto-gratis/feliz-familia-silueta-puesta-sol_1303-22466.jpg",
    "https://www.forofamilia.org/wp-content/uploads/2016/04/Familia-unida.jpg",
    "https://www.carlosllanocatedra.org/hs-fs/hubfs/Stock%20images/Portrait%20of%20an%20extended%20family%20with%20their%20pet%20dog%20sitting%20at%20the%20park.jpeg?width=600&name=Portrait%20of%20an%20extended%20family%20with%20their%20pet%20dog%20sitting%20at%20the%20park.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPEJtzuJt6ZNqCt2ZMQ9sy4DaHpzC9iVzTF24JtFgHdTt9_BAJ_1SmGrzU5s5r32evrc&usqp=CAU",
  ]
) {
  return styled.div`
    width: 90%;
    height: 85%;
    background-image: url(${images[3]});
    background-size: 100% 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(-50%, -50%);
    border-radius: 10px;
    transition: all 3s;
    animation: slide 10s ease infinite;
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
      width: 80%;
       height: 55%;
    }
  `;
}
export default HeaderLanding;
