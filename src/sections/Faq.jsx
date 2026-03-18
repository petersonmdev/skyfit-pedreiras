import { useState } from 'react';

const faqs = [
    {
      q: 'Quais são os preços das matrículas e planos?',
      a: 'Os preços e planos padrões serão compartilhados em breve nos grupos oficiais. Ao entrar agora, você já garante participação na pré-venda de lançamento para Fundadores, com condições especiais e presentes inclusos. Fique tranquilo: o grupo é silencioso e apenas para avisos importantes.',
    },
    {
      q: 'Como funciona o plano mensal?',
      a: 'O valor padrão será informado e disponibilizado presencialmente no balcão da academia, logo após a inauguração. A data prevista da abertura será divulgada em primeira mão dentro dos grupos VIP.',
    },
    {
      q: 'Como funciona o plano anual?',
      a: 'O plano anual é cobrado no cartão de crédito e você pode parcelar em até 12x sem juros. O sistema utiliza o limite total do valor no cartão. Importante: além da musculação, todas as modalidades da academia já estão inclusas no plano.',
    },
    {
      q: 'Posso pagar em dinheiro ou débito?',
      a: 'Sim, mas esta opção está disponível apenas para o plano mensal e o pagamento deve ser feito presencialmente no balcão da academia após a inauguração.',
    },
    {
      q: 'Como funciona o plano recorrente?',
      a: 'Nossos planos recorrentes são a forma mais prática de treinar: o valor é debitado automaticamente do seu cartão de crédito todos os meses, sem comprometer o seu limite total. Assim como no anual, todas as modalidades estão inclusas.',
    },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-sky-primary py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 uppercase">
          Dúvidas <span className="text-sky-secondary">Frequentes</span>
        </h2>

        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div 
              key={index} 
              className="border border-sky-primary-200 rounded-xl bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sky-primary-800 hover:bg-sky-primary-50 transition-colors"
              >
                <span>{item.q}</span>
                <svg 
                  className={`w-5 h-5 text-sky-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 p-5 pt-0 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden text-gray-600`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}