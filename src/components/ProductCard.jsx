export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer bg-zinc-900 border border-zinc-800 p-4 transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)]">
      <div className="relative overflow-hidden bg-zinc-950 aspect-[4/5] mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
      </div>
      <div className="text-center px-2">
        <h3 className="text-lg font-serif text-zinc-100 mb-3 group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
        <p className="text-[#D4AF37] font-medium tracking-wide text-xl">{product.price}</p>
        
        <div className="mt-5 w-0 h-px bg-[#D4AF37] mx-auto group-hover:w-16 transition-all duration-300"></div>
      </div>
    </div>
  );
}