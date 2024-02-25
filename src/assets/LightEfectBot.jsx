/**
 * @typedef {Object} LightEfectBotProps
 * @property {string} [className] - Classe CSS para estilização adicional.
 */

/**
 * Componente de efeito de luz inferior.
 * @param {LightEfectBotProps} props - Props para o componente LightEfectBot.
 * @returns {JSX.Element} Elemento SVG representando o efeito de luz inferior.
 */
export function LightEfectBot({ className }) {
  return (
    <svg
      width="660"
      height="805"
      viewBox="0 0 660 805"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_42_595)">
        <path d="M192.075 591.563C228.484 690.733 205.36 790.453 140.425 814.293C75.4903 838.134 -6.66547 777.067 -43.0749 677.896C-79.4843 578.726 -56.3599 479.007 8.5749 455.166C73.5097 431.326 155.665 492.393 192.075 591.563Z" fill="white" />
        <path d="M191.606 591.736C209.782 641.243 213.089 690.866 203.767 731.064C194.444 771.268 172.51 801.981 140.253 813.824C107.995 825.667 71.3988 816.443 38.2764 791.822C5.15811 767.205 -24.4295 727.231 -42.6055 677.724C-60.7816 628.217 -64.0888 578.594 -54.767 538.396C-45.444 498.192 -23.5104 467.479 8.74722 455.636C41.0049 443.793 77.6012 453.017 110.724 477.637C143.842 502.254 173.429 542.229 191.606 591.736Z" stroke="black" />
      </g>
      <defs>
        <filter id="filter0_f_42_595" x="-510.32" y="0.00830078" width="1169.64" height="1269.44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_42_595" />
        </filter>
      </defs>
    </svg>
  );
}
