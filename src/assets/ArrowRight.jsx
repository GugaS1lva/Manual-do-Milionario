/**
 * @typedef {Object} ArrowRightProps
 * @property {string} [className] - Classe CSS para estilização adicional.
 */

/**
 * Componente de seta apontando para a direita.
 * @param {ArrowRightProps} props - Props para o componente ArrowRight.
 * @returns {JSX.Element} Elemento SVG representando a seta para a direita.
 */
export function ArrowRight({ className }) {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_35_98)">
        <g clip-path="url(#clip1_35_98)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.79008 3.64492L1.84808 0.65292C1.69644 0.56109 1.52311 0.511223 1.34586 0.508425C1.1686 0.505628 0.993788 0.550002 0.839327 0.637001C0.684865 0.724001 0.556307 0.850498 0.466823 1.00353C0.377339 1.15657 0.330146 1.33064 0.330078 1.50792V7.49192C0.329968 7.66928 0.377032 7.84348 0.466444 7.99666C0.555856 8.14984 0.684399 8.27648 0.838891 8.36359C0.993383 8.45071 1.16827 8.49517 1.34561 8.49242C1.52295 8.48967 1.69637 8.43979 1.84808 8.34792L6.79008 5.35592C6.93725 5.26684 7.05895 5.1413 7.14342 4.99144C7.2279 4.84157 7.27228 4.67245 7.27228 4.50042C7.27228 4.32839 7.2279 4.15927 7.14342 4.0094C7.05895 3.85954 6.93725 3.734 6.79008 3.64492Z" fill="white" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_35_98">
          <rect width="7" height="8" fill="white" transform="translate(0.330078 0.5)" />
        </clipPath>
        <clipPath id="clip1_35_98">
          <rect width="7" height="8" fill="white" transform="translate(0.330078 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}