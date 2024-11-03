import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={17}
      height={17}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.667 1.667h16.23v16.23H1.668V1.667Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M9.783 2.917A6.873 6.873 0 0 0 2.917 9.78a6.874 6.874 0 0 0 6.866 6.866 6.873 6.873 0 0 0 6.865-6.865 6.873 6.873 0 0 0-6.865-6.865Zm0 14.98c-4.475 0-8.116-3.64-8.116-8.115 0-4.476 3.64-8.115 8.116-8.115 4.475 0 8.115 3.64 8.115 8.114 0 4.476-3.64 8.116-8.115 8.116Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="b"
      width={5}
      height={5}
      x={14}
      y={14}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.367 14.756h4.187v4.179h-4.187v-4.18Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#b)">
      <path
        fill="#BDBDBD"
        fillRule="evenodd"
        d="M17.93 18.935c-.16 0-.32-.061-.443-.183l-2.936-2.928a.625.625 0 0 1 .883-.886l2.937 2.93a.624.624 0 0 1-.442 1.067Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default SvgComponent;
