export default function Hero() {
  return (
    <section id="inicio" className="relative h-[80vh] flex items-center justify-center bg-zinc-950">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000')" }}
      />
      {/* Overlay mais escuro para garantir leitura no fundo preto */}
      <div className="absolute inset-0 z-0 bg-zinc-950/70" />
      
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
          A Essência da <span className="text-amber-500 italic">Elegância</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-10 font-light tracking-wide">
          Peças exclusivas desenhadas para eternizar os seus momentos mais preciosos.
        </p>
        <button className="bg-amber-600 text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-amber-500 transition-all duration-300">
          Ver Coleção
        </button>
      </div>
    </section>
  );
}