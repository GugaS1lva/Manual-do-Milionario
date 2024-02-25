import { Clock } from "../../assets/Clock"
import { Share } from "../../assets/Share"
import { Star } from "../../assets/Star"

export function Details() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between">
      <div className="w-[350px] sm:w-[550px] h-[240px] sm:h-[406px] flex flex-col justify-between items-center sm:items-start text-center sm:text-start">
        <h2 className="font-semibold text-[32px] sm:text-[48px] leading-[130%] sm:leading-[160%]">Conquiste a riqueza que sempre desejou.</h2>

        <p className="text-[16px] sm:text-[18px] text-white/70 w-[320px] sm:w-[500px]">Este curso intensivo é composto por mais de 30 horas de conteúdo, dividido em módulos acessíveis e fáceis de acompanhar. Você terá a flexibilidade de estudar no seu próprio ritmo, adaptando-se à sua agenda.</p>

        <button className="hidden sm:block w-[170.3px] h-[64px] rounded-[10px] text-[18px] font-medium bg-[#FF9900] hover:bg-white text-black transition duration-75">Saiba Mais</button>
      </div>

      <ul className="flex scale-75 sm:scale-100 flex-col gap-y-[36px]">
        <li className="flex items-center gap-[20px] hover:bg-gradient-to-b hover:from-white/30 hover:to-[#14101d] py-[16px] px-[20px] rounded-[20px] hover:cursor-pointer custom-hover-bg">
          <div className="w-[64px] h-[64px] rounded-[100%] bg-[#0E1013] flex flex-col items-center justify-center icon">
            <Star />
          </div>

          <div className="flex flex-col gap-[8px]">
            <h4 className="font-semibold text-[18px]">Recompensas</h4>
            <p className="text-white/70 w-[366px] text-[16px]">Receba recompensas enquanto participa de tarefas, monitorias e projetos práticos.</p>
          </div>
        </li>

        <li className="flex items-center gap-[20px] hover:bg-gradient-to-b hover:from-white/30 hover:to-[#14101d] py-[16px] px-[20px] rounded-[20px] hover:cursor-pointer custom-hover-bg">
          <div className="w-[64px] h-[64px] rounded-[100%] bg-[#0E1013] flex flex-col items-center justify-center icon">
            <Clock />
          </div>

          <div className="flex flex-col gap-[8px]">
            <h4 className="font-semibold text-[18px]">30+ Horas de duração</h4>
            <p className="text-white/70 w-[366px] text-[16px]">Prepare-se para uma imersão completa com mais de 30 horas de conteúdo.</p>
          </div>
        </li>

        <li className="flex items-center gap-[20px] hover:bg-gradient-to-b hover:from-white/30 hover:to-[#14101d] py-[16px] px-[20px] rounded-[20px] hover:cursor-pointer custom-hover-bg">
          <div className="w-[64px] h-[64px] rounded-[100%] bg-[#0E1013] flex flex-col items-center justify-center icon">
            <Share />
          </div>

          <div className="flex flex-col gap-[8px]">
            <h4 className="font-semibold text-[18px]">Sucesso Compartilhado</h4>
            <p className="text-white/70 w-[366px] text-[16px]">Alcance objetivos juntos, compartilhando conquistas com seus colegas de turma.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}