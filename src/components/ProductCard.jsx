export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden bg-zinc-900 aspect-[4/5] mb-4 border border-zinc-800/50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-serif text-zinc-100 mb-2">{product.name}</h3>
        <p className="text-amber-500 font-medium tracking-wide">{product.price}</p>
      </div>
    </div>
  );
}