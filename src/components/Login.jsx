import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 1. Variáveis criadas para facilitar o acesso e a alteração das credenciais
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = '1234'; 

  // 2. Variável de facilidade: mude para 'true' para logar instantaneamente durante os testes
  const MODO_DESENVOLVIMENTO = true; 

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Verifica se está no modo de desenvolvimento OU se as credenciais digitadas batem com as variáveis
    if (MODO_DESENVOLVIMENTO || (username === ADMIN_USER && password === ADMIN_PASS)) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-950">
      <form onSubmit={handleLogin} className="bg-zinc-900 border border-zinc-800 p-8 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-serif text-[#D4AF37] mb-6 text-center">Acesso Restrito</h2>
        
        <div className="mb-4">
          <label className="block text-zinc-400 text-sm mb-2 uppercase tracking-widest">Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-3 bg-zinc-950 border border-zinc-800 rounded text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="Digite seu usuário"
          />
        </div>
        
        <div className="mb-8">
          <label className="block text-zinc-400 text-sm mb-2 uppercase tracking-widest">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-3 bg-zinc-950 border border-zinc-800 rounded text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="Digite sua senha"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-[#D4AF37] text-zinc-950 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#B8860B] transition-colors rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;