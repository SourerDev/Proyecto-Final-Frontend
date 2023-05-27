import styled from 'styled-components'
import LandingSearch from '../landingSearch/LandingSearch'

const HeaderLanding = (images) => {
  const Slider = slider()
  return (
    <div className="relative my-2 h-[60vh] overflow-hidden rounded-sm shadow-sm transition-all duration-200 ease-in-out sm:h-[80vh] sm:px-4 lg:h-[86vh] xl:px-[5%] ">
      <Slider>
        <div className="flex h-full w-full items-end justify-center">
          <LandingSearch />
        </div>
      </Slider>
    </div>
  )
}

export function slider(
  images = [
    'https://img.freepik.com/foto-gratis/familia-moviendose-usando-cajas_1157-35480.jpg?w=2000',
    'https://amarilo.com.co/blog/wp-content/uploads/2019/07/Como-elegir-la-casa-ideal-para-vivir-en-familia.jpg',
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
  `
}
export default HeaderLanding
