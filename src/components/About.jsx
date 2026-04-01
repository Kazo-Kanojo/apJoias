import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

export default function Highlights() {
  const { products, categoriaSelecionada, setCategoriaSelecionada } = useProducts();
  const categorias = ["Todas", "Anéis", "Brincos", "Correntes", "Escapularios", "Pingentes", "Pulseira"];

  // Filtra os produtos com base na categoria escolhida
  const produtosFiltrados = categoriaSelecionada === "Todas" 
    ? products 
    : products.filter(produto => produto.categoria === categoriaSelecionada);

  return (
    <section id="colecoes" className="py-28 px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">
            Exclusividade
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 transition-all">
            {categoriaSelecionada === "Todas" ? "Destaques da Temporada" : `Coleção: ${categoriaSelecionada}`}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>

        {/* Menu rápido de filtros visuais na secção */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest border transition-all duration-300 ${
                categoriaSelecionada === cat 
                ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' 
                : 'border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grelha de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-zinc-500 text-lg font-light">
                Ainda não temos joias disponíveis na categoria "{categoriaSelecionada}".
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}