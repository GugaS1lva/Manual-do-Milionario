/**
 * @typedef {Object} LightEfectTopProps
 * @property {string} [className] - Classe CSS para estilização adicional.
 */

/**
 * Componente de efeito de luz superior.
 * @param {LightEfectTopProps} props - Props para o componente LightEfectTop.
 * @returns {JSX.Element} Elemento JSX representando o componente.
 */

export function LightEfectTop({ className }) {
  return (
    <svg
      width="586"
      height="678"
      viewBox="0 0 586 678"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_27_437)">
        <ellipse cx="38.5" cy="66" rx="97.5" ry="162" fill="white" />
        <path
          d="M135.5 66C135.5 110.66 124.604 151.067 107.015 180.293C89.4189 209.529 65.18 227.5 38.5 227.5C11.82 227.5 -12.4189 209.529 -30.0145 180.293C-47.6043 151.067 -58.5 110.66 -58.5 66C-58.5 21.3402 -47.6043 -19.0674 -30.0145 -48.2935C-12.4189 -77.5293 11.82 -95.5 38.5 -95.5C65.18 -95.5 89.4189 -77.5293 107.015 -48.2935C124.604 -19.0674 135.5 21.3402 135.5 66Z"
          stroke="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_27_437"
          x="-509"
          y="-546"
          width="1095"
          height="1224"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_27_437" />
        </filter>
      </defs>
    </svg>
  );
}
