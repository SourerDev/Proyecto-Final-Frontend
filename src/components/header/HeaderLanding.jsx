import styled from "styled-components";
import LandingSearch from "../landingSearch/LandingSearch";

const HeaderLanding = (images) => {
  const Slider = slider();
  return (
      <div className="h-[60vh] relative my-2 overflow-hidden rounded-sm shadow-sm sm:h-[80vh] sm:px-4 lg:h-[86vh] xl:px-[5%] transition-all ease-in-out duration-200 ">
        <Slider>
          <div className="h-full w-full flex justify-center items-end">
            <LandingSearch />
          </div>
        </Slider>
      </div>
  );
};

export function slider(
  images = [
    "https://img.freepik.com/foto-gratis/familia-moviendose-usando-cajas_1157-35480.jpg?w=2000",
    "https://amarilo.com.co/blog/wp-content/uploads/2019/07/Como-elegir-la-casa-ideal-para-vivir-en-familia.jpg",
  ]
) {
  return styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${images[1]});
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    animation: slide 60s normal infinite;
    @keyframes slide {
      50% {
        background-image: url(${images[0]});
      }
      100% {
        background-image: url(${images[1]});
      }
    }
  `;
}
export default HeaderLanding;
