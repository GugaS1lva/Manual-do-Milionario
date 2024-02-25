/**
 * @typedef {Object} YellowLightEfectProps
 * @property {string} [className] - Classe CSS para estilização adicional.
 */

/**
 * Componente de efeito de luz amarelo.
 * @param {YellowLightEfectProps} props - Props para o componente YellowLightEfect.
 * @returns {JSX.Element} Elemento SVG representando o efeito de luz amarelo.
 */
export function YellowLightEfect({ className }) {
  return (
    <svg
      width="612"
      height="1205"
      viewBox="0 0 612 1205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_36_166)">
        <ellipse cx="563.144" cy="602.262" rx="97.5" ry="162" transform="rotate(-154.28 563.144 602.262)" fill="#FFC700" />
        <path d="M475.755 560.167C495.136 519.932 522.488 488.256 551.019 469.559C579.559 450.856 609.195 445.185 633.232 456.763C657.268 468.342 671.307 495.051 674.472 529.027C677.635 562.991 669.915 604.123 650.534 644.358C631.153 684.593 603.801 716.269 575.27 734.966C546.73 753.669 517.094 759.34 493.057 747.762C469.02 736.183 454.982 709.474 451.817 675.498C448.654 641.534 456.374 600.402 475.755 560.167Z" stroke="#FF9900" />
      </g>
      <defs>
        <filter id="filter0_f_36_166" x="0.629883" y="0.26355" width="1125.03" height="1204" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_36_166" />
        </filter>
      </defs>
    </svg>
  );
}
