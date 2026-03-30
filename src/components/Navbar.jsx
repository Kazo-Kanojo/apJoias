import { ShoppingBag, Menu } from 'lucide-react';
import Logo from '../assets/Logo.jpg'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        {/* Usamos a classe animate-pulse nativa do Tailwind */}
        <img 
          src={Logo} 
          alt="apJoias" 
          className="h-14 w-auto object-contain hover:animate-pulse transition-all" 
        />
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-zinc-400">
        {[ 'Início', 'Coleções', 'Sobre' ].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="hover:text-[#D4AF37] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-5 text-white">
        <button className="hover:text-[#D4AF37] transition-colors duration-300 relative">
          <ShoppingBag size={22} strokeWidth={1.5} />
          {/* Cor dourada aplicada diretamente via [#D4AF37] */}
          <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-zinc-950 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </button>
        <button className="md:hidden hover:text-[#D4AF37] transition-colors">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}