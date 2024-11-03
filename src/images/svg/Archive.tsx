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
      d="M10 1.667V7.5l1.667-1.667M10 7.5 8.334 5.833M1.65 10.834h3.675c.317 0 .6.175.742.458l.975 1.95c.283.566.858.925 1.491.925h2.942c.633 0 1.208-.358 1.492-.925l.975-1.95a.832.832 0 0 1 .741-.458h3.634"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.833 3.442c-2.95.433-4.167 2.167-4.167 5.725V12.5c0 4.167 1.667 5.834 5.834 5.834h5c4.166 0 5.833-1.667 5.833-5.834V9.167c0-3.558-1.216-5.292-4.166-5.725"
    />
  </svg>
);
export default SvgComponent;
