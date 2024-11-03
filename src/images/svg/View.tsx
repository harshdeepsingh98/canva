import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10Z"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 16.892c2.942 0 5.684-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.908-3-4.65-4.733-7.592-4.733-2.941 0-5.683 1.733-7.591 4.733-.75 1.175-.75 3.15 0 4.325 1.908 3 4.65 4.734 7.591 4.734Z"
    />
  </svg>
);
export default SvgComponent;
