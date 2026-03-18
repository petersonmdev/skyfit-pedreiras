import CtaButton from "../components/CtaButton";
import EstruturePhoto from "../assets/images/estrutura.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-sky-primary overflow-hidden py-6" id="home">
      <div className="absolute inset-0 z-0">
        <img 
          src={EstruturePhoto} 
          alt="Academia SkyFit" 
          className="w-full h-full object-cover opacity-50 uppercase"
        />
        <div className="absolute inset-0 bg-linear-to-r from-sky-primary via-sky-primary/70 to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="bg-sky-secondary text-white px-3 py-1 rounded-sm text-sm font-bold uppercase tracking-widest">
            SkyFit - Unidade Pedreiras
          </span>
          
          <h1 className="text-3xl md:text-5xl font-black text-white mt-6 mb-4 leading-tight uppercase">
            O padrão de academia que Pedreiras sempre mereceu 
            <span className="text-sky-secondary"> está chegando.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2lg">
            A 3ª maior rede de academias do Brasil abre as portas no coração de Pedreiras com quase 2.000m², equipamentos de última geração, totalmente climatizada e com estacionamento privativo. Garanta agora sua vaga de Aluno Fundador com preço exclusivo e presentes especiais.
          </p>

          <CtaButton href="#">
            👉 Quero entrar no grupo VIP
          </CtaButton>

        </div>
      </div>
    </section>
  );
}