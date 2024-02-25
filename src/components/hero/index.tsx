import Image from "next/image"
import { DiscountIcon } from "../../assets/DiscountIcon"

export function Hero() {
  return (
    <section className="pt-[42px] sm:pt-[80px] flex flex-col items-center">
      <h1 className="text-gradient text-[50px] sm:text-[74px] md:text-[91.73px] font-semibold text-center text-[#D99836]">Manual do Milionário</h1>

      <div className="mt-[52px] md:mt-[92px] flex lg:flex-row flex-col items-center justify-center xl:gap-x-[190px]">
        <div className="flex flex-col items-center lg:items-start gap-[42px] text-center lg:text-start">
          <span className="w-[343px] sm:w-[408px] py-2 pr-4 sm:pr-8 pl-[10px] text-white/60 bg-gradient-to-r from-[#272727] to-[#11101D] transform rounded-[10px] text-[14px] sm:text-[16px] flex items-center justify-between font">
            <DiscountIcon />

            <span className="text-white">20%</span> DESCONTO NO <span className="text-white">1 MÊS</span> DE ACESSO
          </span>

          <h2 className="text-[24px] sm:text-[32.28px] mx-[32px] sm:mx-0 font-semibold max-w-[375px]">Destrave sua mente e torne-se o Primeiro Milionário da família.</h2>

          <p className="text-[#FFFFFF]/70 w-[320px] lg:w-[483px] leading-[170%] text-[18px] -mt-[12px] sm:mt-0">Descubra os segredos que os milionários usam para alcançar o sucesso financeiro neste curso abrangente e prático.</p>
        </div>

        <Image className="my-[70px] lg:my-[30px] px-[16px] sm:px-0 sm:mx-0 w-[428px] md:w-[468px] lg:w-[568px]" src={"/HeroBanner.png"} width={508} height={354} alt="Hero Banner" />
      </div>

      <ul className="xl:scale-100 lg:scale-[82%] lg:w-[1184px] flex flex-col lg:flex-row items-center justify-between mt-[20px] mb-[60px] sm:my-[42px] lg:my-[172px] gap-y-[12px] sm:gap-0">
        <li className="flex items-center gap-[10px] sm:gap-[18px]">
          <strong className="font-semibold text-[31.64px] sm:text-[40.89px]">1350+</strong>
          <span className="text-[15.82px] sm:text-[20.45px] text-[#E6BF5C]">AULAS PRONTAS</span>
        </li>

        <li className="hidden sm:block">|</li>

        <li className="flex items-center gap-[10px] sm:gap-[18px]">
          <strong className="font-semibold text-[31.64px] sm:text-[40.89px]">20+</strong>
          <span className="text-[15.82px] sm:text-[20.45px] text-[#E6BF5C]">CERTIFICADOS DISPONÍVEIS</span>
        </li>

        <li className="hidden sm:block">|</li>

        <li className="flex items-center gap-[10px] sm:gap-[18px]">
          <strong className="font-semibold text-[31.64px] sm:text-[40.89px]">$260M+</strong>
          <span className="text-[15.82px] sm:text-[20.45px] text-[#E6BF5C]">TRANSAÇÕES APROVADAS</span>
        </li>
      </ul>
    </section>
  )
}


// Exemplo de importaçã dinâmica dos textos!
// import { highlightedFeatures } from "../../constants"

// export function Tero() {
//   return (
//     <section>
//       <h1>Manual do Milionário</h1>
//       <ul>{highlightedFeatures.map((index, feature) => (
//           <li key={index}>
//             <strong>{feature.value}</strong>
//             <span>{feature.title}</span>
//           </li>
//         ))}</ul>
//     </section>
//   )
// }