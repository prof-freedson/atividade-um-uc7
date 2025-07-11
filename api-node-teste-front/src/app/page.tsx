'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Livro = {
  id: number;
  nome: string;
  genero: string;
};

export default function HomePage() {
  const [livros, setLivros] = useState<Livro[]>([]);

  const fetchLivros = async () => {
    const res = await fetch('http://localhost:3001/livros'); // Ajuste a URL da sua API
    const data = await res.json();
    setLivros(data);
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  const removerLivro = async (id: number) => {
    await fetch(`http://localhost:3001/livros/${id}`, { method: 'DELETE' });
    fetchLivros();
  };

  return (
    <main >
      
      <h1>Biblioteca Digital</h1>
      <h2>Formulário</h2>
      <div >
        <Link href="/usuarios">
          <button >Gerenciar Usuários</button>
        </Link>
        <Link href="/livros">
          { <button>Gerenciar Livros</button> }
        </Link>

      </div>
    </main>
  );
}