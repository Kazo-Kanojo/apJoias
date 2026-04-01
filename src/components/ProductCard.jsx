export default function ProductCard({ product }) {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 p-5 transition-all duration-500 hover:border-[#D4AF37]/50 hover:-translate-y-2 hover:shadow-[0_15px_60px_-15px_rgba(212,175,55,0.25)] flex flex-col h-full overflow-hidden">
      <div className="relative overflow-hidden bg-zinc-950 aspect-[4/5] mb-6 border border-zinc-800">
        <img 
          src={product.imagem} 
          alt={product.nome} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <a 
            href="https://www.instagram.com/_apjoias_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] text-xs uppercase tracking-widest border border-[#D4AF37] px-4 py-2 bg-zinc-950/80 backdrop-blur-sm hover:bg-[#D4AF37] hover:text-zinc-950 transition-all font-bold"
          >
            Consultar no Direct
          </a>
        </div>
      </div>
      
      <div className="text-center px-2 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif text-zinc-100 mb-2 group-hover:text-[#D4AF37] transition-colors">{product.nome}</h3>
          <p className="text-zinc-500 text-sm italic">Referência de Design</p>
        </div>
      </div>
    </div>
  );
}