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

export const Views = ({ className, fill, width, height, hover,title}) => {
  return (
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
      <path
        d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
        fill-rule="nonzero"
      />
    </Svg>
  );
};

export const Edit = ({ className, fill, width, height, hover }) => {
  return (
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
      <path
        d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z"
        fillRule="nonzero"
      />
    </Svg>
  );
};

export const Question = ({ className, fill, width, height, hover }) => {
  return (
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
      <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z" />
    </Svg>
  );
};
const Svg = styled.svg`
  &:hover {
    path {
      fill: ${(props) => (props.hover ? props.hover : "#000")};
    }
  }
`;
