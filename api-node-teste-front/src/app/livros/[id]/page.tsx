import axios from 'axios';
import { notFound } from 'next/navigation';

type Livro = {
  url: string;
  titulo: string;
  editora: string;
  num_paginas: number;
  genero: string;
  autor: string;
};

async function getLivro(id: string): Promise<Livro | null> {
  try {
    const res = await axios.get<Livro>(`http://localhost:3001/livros/${id}`);
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar o livro:", error);
    return null;
  }
}

export default async function LivroDetalhes({ params }: { params: { id: string } }) {
  const livro = await getLivro(params.id);

  if (!livro) {
    notFound(); 
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>📚 Detalhes do Livro</h2>
      <img 
        src={livro.url} 
        alt={`Capa do livro ${livro.titulo}`} 
        style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '1rem' }}
      />
      <p><strong>Título:</strong> {livro.titulo}</p>
      <p><strong>Editora:</strong> {livro.editora}</p>
      <p><strong>Número de Páginas:</strong> {livro.num_paginas}</p>
      <p><strong>Gênero:</strong> {livro.genero}</p>
      <p><strong>Autor:</strong> {livro.autor}</p>
    </div>
  );
}
