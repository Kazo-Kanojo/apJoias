export default function Hero() {
  return (
    <section id="inicio" className="relative h-[85vh] flex items-center justify-center bg-zinc-950 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50 hover:scale-105 transition-transform duration-[10000ms]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
      
      {/* Usando animate-bounce ou fade-in se você tiver plugin, mas aqui usamos transições puras */}
      <div className="relative z-20 text-center px-4 max-w-4xl mt-10">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          A Essência da <br />
          <span className="text-[#D4AF37] italic">
            Elegância
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-12 font-light tracking-wide max-w-2xl mx-auto">
          Peças exclusivas desenhadas para eternizar os seus momentos mais preciosos com o verdadeiro brilho do ouro.
        </p>
        
        <button className="bg-[#D4AF37] text-zinc-950 px-12 py-5 uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:bg-[#B8860B] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1">
          Descobrir Coleção
        </button>
      </div>
    </section>
  );
}