import { Mail, MapPin } from 'lucide-react';

// O mesmo SVG manual do Instagram
const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-20 px-8 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-serif font-bold text-white tracking-wider">
            ap<span className="text-[#D4AF37]">Joias</span>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs font-light tracking-wide">
            Joalheria artesanal e autoral. Transformamos ouro e pedras preciosas em legados eternos. Atendimento em toda SP.
          </p>
          <div className="text-zinc-500 text-xs flex items-center gap-2 mt-2">
            <MapPin size={14} className="text-[#D4AF37]" />
            Atendimento Presencial sob Agendamento
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start">
          <h4 className="text-lg font-serif text-[#D4AF37] font-medium tracking-wide">Criação & Vendas</h4>
          <p className="text-sm text-zinc-400 font-light max-w-xs">
            Solicite orçamentos e envie suas referências exclusivamente pelo nosso Direct.
          </p>
          <a 
            href="https://www.instagram.com/_apjoias_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] py-2.5 px-6 text-xs uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-zinc-950 transition-all duration-300"
          >
            <InstagramIcon size={16} />
            Acessar Direct
          </a>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start md:w-32">
          <h4 className="text-lg font-serif text-[#D4AF37] font-medium tracking-wide">Links</h4>
          <nav className="flex flex-col gap-3.5 text-sm text-zinc-200 font-light">
            <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
            <a href="#colecoes" className="hover:text-[#D4AF37] transition-colors">Coleções</a>
            <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex space-x-7 text-zinc-600">
          <a href="https://www.instagram.com/_apjoias_/" className="hover:text-[#D4AF37] transition-all hover:scale-110">
            <InstagramIcon size={20} />
          </a>
          <a href="mailto:contato@apjoias.com" className="hover:text-[#D4AF37] transition-all hover:scale-110">
            <Mail size={20} />
          </a>
        </div>
        <div className="text-xs text-zinc-500 font-light text-center md:text-right">
          &copy; {new Date().getFullYear()} apJoias | Joalheria de Luxo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}