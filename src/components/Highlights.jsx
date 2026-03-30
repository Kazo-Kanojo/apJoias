import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function Highlights() {
  return (
    <section id="colecoes" className="py-28 px-8 bg-zinc-950">
      {/* Removido o opacity-0 e a lógica complexa de visibilidade que estava travando a tela */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Exclusividade</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Destaques da Temporada</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}