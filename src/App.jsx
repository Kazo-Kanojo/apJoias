import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  // Alterado para bg-zinc-950 (preto profundo) e texto claro por padrão
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;