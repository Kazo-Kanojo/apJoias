import { Menu, ChevronDown } from "lucide-react";
import LogoImg from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function Navbar() {
  const { setCategoriaSelecionada } = useProducts();
  const categorias = ["Todas", "Anéis", "Brincos", "Correntes", "Escapularios", "Pingentes", "Pulseira"];

  const handleCategorySelect = (categoria) => {
    setCategoriaSelecionada(categoria);
    const seccao = document.getElementById("colecoes");
    if (seccao) {
      seccao.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50">
      <div className="flex items-center space-x-3 group">
        <img
          src={LogoImg}
          alt="apJoias"
          className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-zinc-400 items-center">
        <a href="#inicio" className="hover:text-white transition-colors duration-300">Início</a>
        
        <div className="relative group py-1 cursor-pointer">
          <div className="flex items-center gap-1 hover:text-white transition-colors duration-300">
            Coleções <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </div>
          <div className="absolute top-full -left-4 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <ul className="py-2 flex flex-col">
              {categorias.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => handleCategorySelect(cat)}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-800 hover:text-[#D4AF37] transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="#sobre" className="hover:text-white transition-colors duration-300">Sobre</a>
        <a href="#contato" className="hover:text-white transition-colors duration-300">Contato</a>
        <Link to="/admin" className="hover:text-[#D4AF37] transition-colors duration-300">Admin</Link>
      </div>

      <div className="flex items-center space-x-5 text-white">
        <a
          href="#contato"
          className="hidden md:block relative overflow-hidden bg-[#D4AF37] text-zinc-950 px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:bg-[#B8860B] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 group"
        >
          <span className="relative z-10">Consultoria</span>
          <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
        </a>
        <button className="md:hidden hover:text-[#D4AF37] transition-colors duration-300">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}