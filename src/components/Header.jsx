export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#galeria" className="text-white hover:text-sky-secondary font-bold uppercase text-xs tracking-widest transition-colors">
            Estrutura
          </a>
          <a href="#faq" className="text-white hover:text-sky-secondary font-bold uppercase text-xs tracking-widest transition-colors">
            Faq
          </a>
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white uppercase">
              SKY<span className="text-sky-secondary">FIT</span>
              <small className="text-xs md:text-sm font-light text-white tracking-widest ml-1">Pedreiras</small>
            </h1>
          </a>
        </div>

        <div className="items-center hidden md:flex">
          <a 
            href="#cta"
            className="bg-sky-secondary hover:bg-sky-secondary/80 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-black uppercase text-xs transition-all hover:scale-105 active:scale-95"
          >
            Inscrever-me
          </a>
        </div>
      </div>
    </header>
  );
}