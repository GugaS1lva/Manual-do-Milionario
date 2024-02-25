import Image from "next/image"
import { DiscountIcon } from "../../assets/DiscountIcon"

export function Hero() {
  return (
    <section className="pt-[42px] sm:pt-[80px]">
      <h1 className="text-gradient text-[50px] sm:text-[91.73px] font-semibold text-center text-[#D99836]">Manual do Milionário</h1>

      <div className="mt-[52px] sm:mt-[142px] flex sm:flex-row flex-col items-center justify-between">
        <div className="flex flex-col items-center sm:items-start gap-[42px] text-center sm:text-start">
          <span className="w-[343px] sm:w-[408px] py-2 pr-4 sm:pr-8 pl-[10px] text-white/60 bg-gradient-to-r from-[#272727] to-[#11101D] transform rounded-[10px] text-[14px] sm:text-[16px] flex items-center justify-between font">
            <DiscountIcon />

            <span className="text-white">20%</span> DESCONTO NO <span className="text-white">1 MÊS</span> DE ACESSO
          </span>

          <h2 className="text-[24px] sm:text-[32.28px] mx-[32px] sm:mx-0 font-semibold max-w-[490px]">Destrave sua mente e torne-se o Primeiro Milionário da família.</h2>

          <p className="text-[#FFFFFF]/70 w-[320px] sm:w-[483px] leading-[170%] text-[18px] ">Descubra os segredos que os milionários usam para alcançar o sucesso financeiro neste curso abrangente e prático.</p>
        </div>

        <Image className="my-[60px] sm:my-0" src={"/HeroBanner.png"} width={508} height={354} alt="Hero Banner" />
      </div>

      <ul className="flex flex-col sm:flex-row items-center justify-between mt-[20px] mb-[60px] sm:my-[172px] gap-y-[12px] sm:gap-0">
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


{/* Exemplo de importaçã dinâmica dos textos!
// import { stats } from "../../constants"

// export function Hero() {
//   return (
//     <section>
//       <h1>Manual do Milionário</h1>
//       <h1>{stats.map(stat => (
//           <div key={stat.id}>
//             {stat.value}
//           </div>
//         ))}</h1>
//     </section>
//   )
// }
*/}