import CtaButton from "../components/CtaButton";
import { LiaHandPointerSolid } from "react-icons/lia";

export default function Opportunity() {
    return (
        <section className="text-center py-20 bg-sky-primary border-t-2 border-sky-secondary/30" id="cta">
            <div className="max-w-4xl mx-auto px-6">
                
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter leading-tight">
                    Oportunidade para os <span className="text-sky-secondary">Primeiros</span>
                </h2>

                <p className="mt-8 text-2xl font-bold text-sky-secondary uppercase tracking-wide">
                    Vagas de Aluno Fundador Limitadas e Exclusivas para quem estiver no Grupo VIP.
                </p>

                <p className="mt-6 text-xl text-white/90 leading-relaxed font-light">
                    Ser um &quot;Aluno Fundador&quot; significa garantir a menor mensalidade da história da unidade, com benefícios e presentes que nunca mais serão repetidos após a inauguração.
                </p>

                <div className="mt-10 bg-sky-secondary/10 border border-sky-secondary/30 p-6 rounded-2xl mx-auto">
                    <p className="text-white font-medium">
                        <span className="font-bold text-sky-secondary uppercase tracking-widest">Atenção:</span> Esta oferta não estará disponível no balcão após a abertura. Ela é um privilégio exclusivo para quem tomar a decisão agora e entrar no nosso grupo oficial.
                    </p>
                </div>

                <p className="mt-10 text-xl font-bold text-white uppercase tracking-tight">
                    NÃO FIQUE DE FORA DA MAIOR INAUGURAÇÃO DA REGIÃO
                </p>

                <CtaButton href="#" className={"justify-center"}>
                    <LiaHandPointerSolid className="inline-block mr-2 text-white w-6 h-6 rotate-90" />
                    Quero entrar no grupo VIP
                </CtaButton>
            </div>
        </section>
    );
}