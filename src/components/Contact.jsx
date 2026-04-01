import { Mail } from 'lucide-react';

// Criamos o ícone manualmente para evitar erros da biblioteca
const InstagramIcon = ({ size, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Contact() {
  const instagramHandle = "@_apjoias_";

  return (
    <section id="contato" className="py-32 px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Atendimento Exclusivo</p>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Solicite Sua Peça</h2>
        <p className="text-zinc-300 mb-20 max-w-2xl mx-auto font-light text-xl">
          Para alianças personalizadas, fabricação do zero ou avaliação de ouro, nosso canal oficial de atendimento é o <strong className="text-white">Instagram Direct</strong>.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 p-12 flex flex-col items-center group transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_60px_-15px_rgba(212,175,55,0.2)]">
            <div className="text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform">
              <InstagramIcon size={64} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Instagram Direct</h3>
            <p className="text-zinc-400 mb-8 text-center text-lg">
              Envie sua foto de referência e fale diretamente com nosso especialista para orçamentos e consultoria técnica.
            </p>
            <p className="text-[#D4AF37] font-sans text-2xl mb-12 tracking-wider">{instagramHandle}</p>
            <a 
              href="https://www.instagram.com/_apjoias_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#D4AF37] text-zinc-950 px-8 py-5 uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:bg-[#B8860B] text-center"
            >
              Mandar Mensagem Agora
            </a>
          </div>
        </div>
        
        <div className="mt-20 text-zinc-600 flex flex-col items-center gap-2 border-t border-zinc-800 pt-12 max-w-xl mx-auto">
          <Mail size={16} />
          <p className="text-xs uppercase tracking-widest mb-2">Suporte via e-mail</p>
          <a href="mailto:contato@apjoias.com" className="text-zinc-400 hover:text-[#D4AF37] transition-colors">contato@apjoias.com</a>
        </div>
      </div>
    </section>
  );
}