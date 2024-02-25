import { YellowLine } from "../../assets/YellowLine"
import { ArrowDown } from "../../assets/ArrowDown"
import { ArrowRight } from "../../assets/ArrowRight"

export function Plans() {
  return (
    <section className="mt-[142px] mb-[100px]">
      <ul className="flex items-start justify-center gap-[32px]">
        <li className="w-[378.66px] bg-[#0e1013] rounded-[4px] border-2 border-white/10">
          <h4 className="mt-[34px] ml-[50px] text-[36px] mb-[23px]">Mensal</h4>

          <ul>
            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>1 Mês de   Acesso</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px] bg-black">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Acesso a Todos os Cursos</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Mais de 1350 Aulas</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px] bg-black">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Certificado de Conclusão</p>
              </span>

              <ArrowDown />
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center bg-black mt-[16px] py-[32px] gap-y-[16px]">
            <strong className="text-[36px] font-medium">R$ 120</strong>

            <button className="w-[200px] h-[51px] rounded-[4px] text-[18px] font-medium bg-[#FF9900] hover:bg-[#FF9900]/75 text-white transition duration-75 flex items-center justify-center">Assinar Mensal <ArrowRight className="ml-[27.44px]" /></button>
          </div>
        </li>

        <li className="w-[378.66px] bg-[#0e1013] rounded-[4px] border-2 border-white/10">
          <h4 className="mt-[34px] ml-[50px] text-[36px] mb-[23px]">Anual</h4>

          <ul>
            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>12 Meses de Acesso</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px] bg-black">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Acesso a Todos os Cursos</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Mais de 1350 Aulas</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px] bg-black">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Certificado de Conclusão</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Suporte</p>
              </span>

              <ArrowDown />
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center bg-black mt-[16px] py-[32px] gap-y-[16px]">
            <strong className="text-[36px] font-medium flex flex-col items-center justify-center">
              <span className="text-[#D4D6D8] text-[16px]">até 12x de</span>
              R$ 39
              <span className="text-[#D4D6D8] text-[16px]">à vista R$ 468</span>
            </strong>

            <button className="w-[200px] h-[51px] rounded-[4px] text-[18px] font-medium bg-[#FF9900] hover:bg-[#FF9900]/75 text-white transition duration-75 flex items-center justify-center">Assinar Mensal <ArrowRight className="ml-[27.44px]" /></button>

            <span className="text-[#88DD22] text-[18px]">Economize 67%</span>
          </div>
        </li>

        <li className="w-[378.66px] bg-[#0e1013] rounded-[4px] border-2 border-white/10">
          <h4 className="mt-[34px] ml-[50px] text-[36px] mb-[23px]">Vitalício</h4>

          <ul>
            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Acesso Vitalício Ilimitado</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px] bg-black">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Acesso a Todos os Cursos</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Mais de 1350 Aulas</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px] bg-black">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Certificado de Conclusão</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px]">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Suporte Premium</p>
              </span>

              <ArrowDown />
            </li>

            <li className="flex items-center justify-between max-w-[342.66px] h-[43px] pr-[8px] rounded-r-[4px] bg-black">
              <span className="flex items-center gap-[8px] ml-[34px]">
                <YellowLine />
                <p>Certificado de Conclusão</p>
              </span>

              <ArrowDown />
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center bg-black mt-[16px] py-[32px] gap-y-[16px]">
            <strong className="text-[36px] font-medium">R$ 120</strong>

            <button className="w-[200px] h-[51px] rounded-[4px] text-[18px] font-medium bg-[#FF9900] hover:bg-[#FF9900]/75 text-white transition duration-75 flex items-center justify-center">Assinar Mensal <ArrowRight className="ml-[27.44px]" /></button>
          </div>
        </li>
      </ul>
    </section>
  )
}