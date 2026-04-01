import imagemAnel from "../assets/imagemTeste.jpg";
import imagemColar from "../assets/imagemTeste2.jpg";

export const products = [
  {
    id: 1,
    nome: "Anel Solitário Diamante 18k",
    price: "R$ 4.500,00",
    imagem: imagemAnel,
    categoria: "Anéis",
    quantidade: 10,
    status: "Disponível",
  },
  {
    id: 2,
    nome: "Colar Pérola e Ouro Branco",
    price: "R$ 2.850,00",
    imagem: imagemColar,
    categoria: "Correntes",
    quantidade: 5,
    status: "Disponível",
  },
  {
    id: 3,
    nome: "Brincos Gota Esmeralda",
    price: "R$ 3.200,00",
    imagem:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    categoria: "Brincos",
    quantidade: 0,
    status: "Esgotado",
  },
];