import EstruturePhoto from "../assets/images/estrutura.jpg";
import ClimatizacaoPhoto from "../assets/images/climatizacao.jpg";
import EquipamentoPhoto from "../assets/images/equipamento.jpg";
import TimePhoto from "../assets/images/time.jpg";
import HorarioPhoto from "../assets/images/horario.jpg";
import ModalidadesPhoto from "../assets/images/modalidades.jpg";
import CtaButton from "../components/CtaButton";
import { LiaHandPointerSolid } from "react-icons/lia";

const photos = [
  { id: 1, url: EstruturePhoto, alt: "Estrutura Gigante", size: "col-span-2 md:row-span-3 row-span-1", title: "ESTRUTURA GIGANTE", text: "Quase 2.000m² de área total para você treinar com liberdade e sem stress." },
  { id: 2, url: ClimatizacaoPhoto, alt: "Climatização de verdade", size: "col-span-2 md:row-span-2 row-span-1", title: "CLIMATIZAÇÃO DE VERDADE", text: "Treine o ano todo, ignorando o calor lá fora." },
  { id: 3, url: EquipamentoPhoto, alt: "Equipamentos de última geração", size: "col-span-2 md:row-span-2 row-span-1", title: "EQUIPAMENTOS DE ÚLTIMA GERAÇÃO", text: "Aparelhos linha premium da Kikos, com a melhor biomecânica do mercado para acelerar seus resultados e evitar lesões." },
  { id: 4, url: TimePhoto, alt: "Time de elite altamente capacitado", size: "col-span-2 md:col-span-1 md:row-span-2 row-span-1", title: "TIME DE ELITE", text: "Profissionais selecionados a dedo, treinados e capacitados na nossa metodologia para oferecer o melhor atendimento e suporte técnico da região." },
  { id: 5, url: HorarioPhoto, alt: "Horário que se adapta a você", size: "col-span-2 md:col-span-1 md:row-span-2 row-span-1", title: "HORÁRIO QUE SE ADAPTA A VOCÊ", text: "Aberta das 05h às 23h de segunda a sexta, além de horários especiais aos sábados, domingos e feriados." },
  { id: 6, url: ModalidadesPhoto, alt: "Todas as modalidades inclusas", size: "col-span-2 row-span-1", title: "TODAS AS MODALIDADES INCLUSAS", text: "Musculação, aulas coletivas como: spinning, dança e muito mais em um único plano." },
];

export default function Gallery() {
  return (
    <section className="bg-white text-center text-sky-primary py-20" id="galeria">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold uppercase">
                Por que a Skyfit vai mudar o seu jeito de treinar?
            </h2>

            <p className="mt-4 max-w-3xl mx-auto">
                Esqueça tudo o que você conhece sobre academias apertadas e quentes. A Skyfit traz para Pedreiras o conceito High Value, Low Cost: Alto Padrão por um preço que cabe no seu bolso.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-8 auto-rows-[200px]">
            {photos.map((photo) => (
                <div 
                key={photo.id} 
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${photo.size}`}
                >
                <div className="absolute inset-0 bg-sky-primary/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <p className="p-4 text-white text-center font-bold uppercase tracking-tighter transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform">
                    {photo.title}
                    <br />
                    <span className="text-sm font-light tracking-wide">{photo.text}</span>
                    </p>
                </div>
                
                <img 
                    src={photo.url} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                </div>
            ))}
            </div>

            <CtaButton href="#" className={"justify-center"}>
                <LiaHandPointerSolid className="inline-block mr-2 text-white w-6 h-6 rotate-90" />
                Quero entrar no grupo VIP
            </CtaButton>
        </div>
    </section>
  );
}