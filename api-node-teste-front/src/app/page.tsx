'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Livro = {
  id: number;
  nome: string;
  genero: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function HomePage() {
  const [livros, setLivros] = useState<Livro[]>([]);

  const fetchLivros = async () => {
    try {
      const res = await fetch(`${API_URL}/livros`);
      if (!res.ok) throw new Error('Erro ao buscar livros');
      const data = await res.json();
      setLivros(data);
    } catch (error) {
      console.error('Erro ao carregar livros:', error);
    }
  };

  const removerLivro = async (id: number) => {
    try {
      await fetch(`${API_URL}/livros/${id}`, {
        method: 'DELETE',
      });
      fetchLivros();
    } catch (error) {
      console.error('Erro ao remover livro:', error);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>📚 Biblioteca Digital</h1>

      <h2 style={{ marginTop: '2rem' }}>Navegação</h2>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/usuarios">
          <button>Gerenciar Usuários</button>
        </Link>
        <Link href="/livros">
          <button>Gerenciar Livros</button>
        </Link>
      </div>

      <h2>Livros Cadastrados</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {livros.length === 0 ? (
          <li>Nenhum livro cadastrado.</li>
        ) : (
          livros.map((livro) => (
            <li
              key={livro.id}
              style={{
                marginBottom: '1rem',
                padding: '1rem',
                background: '#fff',
                borderRadius: '6px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              }}
            >
              <strong>{livro.nome}</strong> — {livro.genero}
              <div>
                <button
                  onClick={() => removerLivro(livro.id)}
                  style={{ marginTop: '0.5rem' }}
                >
                  Remover
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
