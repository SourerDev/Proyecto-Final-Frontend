import styled from "styled-components";
export const Heart = ({ className, fill, width, height, hover }) => (
  <Svg
    hover={hover}
    fill={fill}
    width={width}
    height={height}
    className={className}
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
      fillRule="nonzero"
    />
  </Svg>
);

export const HeartBorder = ({ className, fill, width, height, hover }) => (
  <Svg
    hover={hover}
    fill={fill}
    width={width}
    height={height}
    className={className}
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z"
      fillRule="nonzero"
    />
  </Svg>
);

export const User = ({ className, fill, width, height, hover }) => (
  <Svg
    hover={hover}
    fill={fill || "none"}
    width={width}
    height={height}
    className={className}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLlinejoin="round"
      strokeLwidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ></path>
  </Svg>
);

export const Exit = ({ className, fill, width, height, hover }) => (
  <Svg
    hover={hover}
    fill={fill || "none"}
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fstroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11 21h8.033v-2l1-1v4h-9.033v2l-10-3v-18l10-3v2h9.033v5l-1-1v-3h-8.033v18zm-1 1.656v-21.312l-8 2.4v16.512l8 2.4zm11.086-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" />
  </Svg>
);

export const Lightning = ({ className, fill, width, height, hover }) => (
  <Svg
    hover={hover}
    fill={fill || "none"}
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fstroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13 9h9l-14 15 3-9h-9l14-15-3 9zm-8.699 5h8.086l-1.987 5.963 9.299-9.963h-8.086l1.987-5.963-9.299 9.963z" />
  </Svg>
);

const Svg = styled.svg`
  &:hover {
    path {
      fill: ${(props) => (props.hover ? props.hover : "#000")};
    }
  }
`;
