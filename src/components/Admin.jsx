import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { LogOut, PlusCircle, PackagePlus } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    categoria: "Pulseira",
    nome: "",
    imagem: "",
    quantidade: 0,
    price: "R$ 0,00",
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: Date.now(),
      quantidade: Number(product.quantidade),
      status: Number(product.quantidade) > 0 ? "Disponível" : "Esgotado",
    };
    addProduct(newProduct);
    alert("Produto cadastrado com sucesso!");
    setProduct({
      categoria: "Pulseira",
      nome: "",
      imagem: "",
      quantidade: 0,
      price: "R$ 0,00",
    });
  };

  const categorias = [
    "Pulseira",
    "Pingentes",
    "Escapularios",
    "Correntes",
    "Brincos",
    "Anéis",
  ];

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-[#D4AF37] selection:text-zinc-950">
      {/* Sidebar - Menu Lateral */}
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between">
        <div>
          <div className="p-8 text-2xl font-serif font-bold text-white tracking-wider border-b border-zinc-800">
            ap<span className="text-[#D4AF37]">Joias</span>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-sans">
              Painel de Controle
            </span>
          </div>
          <nav className="mt-8">
            <ul className="flex flex-col gap-2 px-4">
              <li className="flex items-center gap-3 p-3 bg-zinc-800/50 text-[#D4AF37] rounded border border-zinc-700/50 cursor-pointer transition-all">
                <PackagePlus size={18} />
                <span className="font-medium text-sm tracking-wide">Adicionar Produto</span>
              </li>
              {/* Futuramente você pode adicionar mais abas aqui, como "Ver Produtos", "Pedidos", etc. */}
            </ul>
          </nav>
        </div>
        
        {/* Botão de Logout */}
        <div className="p-4 border-t border-zinc-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-red-900/50 text-red-500 py-2.5 px-4 rounded text-sm uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors duration-300"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </div>

      {/* Main Content - Área de Cadastro */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-serif text-white mb-2">Cadastrar Novo Produto</h1>
            <p className="text-zinc-400 text-sm">
              Preencha os dados abaixo para adicionar uma nova joia ao catálogo.
            </p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-2xl relative overflow-hidden">
            {/* Detalhe visual dourado no topo do card */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                <div className="md:col-span-2">
                  <label htmlFor="nome" className="block text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2">
                    Nome da Joia
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={product.nome}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded py-3 px-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    placeholder="Ex: Anel Solitário Ouro 18k"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="categoria" className="block text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2">
                    Categoria
                  </label>
                  <select
                    id="categoria"
                    name="categoria"
                    value={product.categoria}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded py-3 px-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none"
                  >
                    {categorias.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="price" className="block text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2">
                    Preço (Formatado)
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded py-3 px-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    placeholder="R$ 1.234,56"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="imagem" className="block text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2">
                    URL da Imagem
                  </label>
                  <input
                    type="text"
                    id="imagem"
                    name="imagem"
                    value={product.imagem}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded py-3 px-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-mono text-sm"
                    placeholder="https://exemplo.com/imagem.jpg"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="quantidade" className="block text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2">
                    Quantidade em Estoque
                  </label>
                  <input
                    type="number"
                    id="quantidade"
                    name="quantidade"
                    value={product.quantidade}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded py-3 px-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    min="0"
                    required
                  />
                </div>
              </div>

              {/* Linha separadora e Botão */}
              <div className="mt-8 border-t border-zinc-800 pt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#D4AF37] text-zinc-950 px-8 py-3 uppercase tracking-widest text-sm font-bold shadow-[0_4px_20px_rgba(212,175,55,0.15)] transition-all duration-300 hover:bg-[#B8860B] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 rounded"
                >
                  <PlusCircle size={18} />
                  Cadastrar Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;