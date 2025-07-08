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
    const res = await fetch('http://localhost:3000/livros'); // Ajuste a URL da sua API
    const data = await res.json();
    setLivros(data);
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  const removerLivro = async (id: number) => {
    await fetch(`http://localhost:3000/livros/${id}`, { method: 'DELETE' });
    fetchLivros();
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Livros Cadastrados</h2>
      <Link href="/livros/novo">
        <button style={{ marginBottom: '1rem' }}>Criar novo livro</button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {livros.map((livro) => (
          <div key={livro.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
            <h3>{livro.nome}</h3>
            <p><strong>Gênero:</strong> {livro.genero}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link href={`/livros/${livro.id}`}><button>Ver</button></Link>
              <Link href={`/livros/${livro.id}/editar`}><button>Editar</button></Link>
              <button onClick={() => removerLivro(livro.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}