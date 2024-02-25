import Image from "next/image"
import { DiscountIcon } from "../../assets/DiscountIcon"

export function Hero() {
  return (
    <section className="pt-[80px]">
      <h1 className="text-gradient text-[91.73px] font-semibold text-center text-[#D99836]">Manual do Milionário</h1>

      <div className="mt-[142px] flex items-center justify-between">
        <div className="flex flex-col gap-[42px]">
          <span className="w-[408px] py-2 pr-8 pl-[10px] text-white/60 bg-gradient-to-r from-[#272727] to-[#11101D] transform rounded-[10px] flex items-center justify-between font">
            <DiscountIcon />

            <span className="text-white">20%</span> DESCONTO NO <span className="text-white">1 MÊS</span> DE ACESSO
          </span>

          <h2 className="text-[32.28px] font-semibold max-w-[490px]">Destrave sua mente e torne-se o Primeiro Milionário da família.</h2>

          <p className="text-[#FFFFFF]/70 max-w-[483px]">Descubra os segredos que os milionários usam para alcançar o sucesso financeiro neste curso abrangente e prático.</p>
        </div>

        <Image src={"/HeroBanner.png"} width={508} height={354} alt="Hero Banner" />
      </div>

      <ul className="flex items-center justify-between my-[172px]">
        <li className="flex items-center gap-[18px]">
          <strong className="font-semibold text-[40.89px]">1350+</strong>
          <span className="text-[20.45px] text-[#E6BF5C]">AULAS PRONTAS</span>
        </li>

        <li>|</li>

        <li className="flex items-center gap-[18px]">
          <strong className="font-semibold text-[40.89px]">20+</strong>
          <span className="text-[20.45px] text-[#E6BF5C]">CERTIFICADOS DISPONÍVEIS</span>
        </li>

        <li>|</li>

        <li className="flex items-center gap-[18px]">
          <strong className="font-semibold text-[40.89px]">$260M+</strong>
          <span className="text-[20.45px] text-[#E6BF5C]">TRANSAÇÕES APROVADAS</span>
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