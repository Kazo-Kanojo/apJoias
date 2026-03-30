import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function Highlights() {
  return (
    <section id="colecoes" className="py-24 px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white mb-4">Destaques da Temporada</h2>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto"></div>
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