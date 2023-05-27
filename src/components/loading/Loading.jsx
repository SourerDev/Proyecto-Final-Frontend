import styled from 'styled-components'

export default function Loading({ w = '20px', h = '150px' }) {
  return (
    <div className="m-0 flex h-screen w-full  items-center justify-center bg-[#fff] p-0">
      <Loader w={w} h={h}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Loader>
    </div>
  )
}

const Loader = styled.div`
  position: relative;
  display: flex;
  span {
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    margin: 0 20px;
    background-color: #fff;
    animation: animate 1.4s linear infinite;
  }

  & span:nth-child(1) {
    animation-delay: 0s;
  }
  & span:nth-child(2) {
    animation-delay: 0.2s;
  }
  & span:nth-child(3) {
    animation-delay: 0.4s;
  }
  & span:nth-child(4) {
    animation-delay: 0.6s;
  }
  & span:nth-child(5) {
    animation-delay: 0.8s;
  }
  & span:nth-child(6) {
    animation-delay: 1s;
  }
  & span:nth-child(7) {
    animation-delay: 1.2s;
  }

  @keyframes animate {
    0% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      opacity: 0;
      transform: translateX(-50px) scale(1);
    }
    50% {
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      opacity: 1;
      transform: translateX(0px) scale(1.2);
    }
    100% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      opacity: 0;
      transform: translateX(50px) scale(1);
    }
  }
`
