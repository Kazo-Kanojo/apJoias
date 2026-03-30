import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-zinc-950 border-b border-zinc-800/50">
      <div className="text-2xl font-serif font-bold text-white tracking-wider">
        ap<span className="text-amber-500">Joias</span>
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-zinc-400">
        <a href="#inicio" className="hover:text-amber-500 transition-colors">Início</a>
        <a href="#colecoes" className="hover:text-amber-500 transition-colors">Coleções</a>
        <a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre</a>
      </div>

      <div className="flex items-center space-x-4 text-white">
        <button className="hover:text-amber-500 transition-colors">
          <ShoppingBag size={24} strokeWidth={1.5} />
        </button>
        <button className="md:hidden hover:text-amber-500 transition-colors">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}