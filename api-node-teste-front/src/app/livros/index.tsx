'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function LivrosPage() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/livros')
      .then(response => setLivros(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleRemover = async (id: number) => {
    await axios.delete(`http://localhost:3001/livros/${id}`);
    setLivros(livros.filter((l: any) => l.id !== id));
  };

  return (
    <main >
      <h2>Livros</h2>
      <Link href="/livros/novo"><button>Criar novo livro</button></Link>
      <div >
        {livros.map((livro: any) => (
          <div key={livro.id} >
            <img src={livro.url} alt={livro.titulo} />
            <h3>{livro.titulo}</h3>
            <p>{livro.genero}</p>
            <Link href={`/livros/${livro.id}`}><button>Ver</button></Link>
            <Link href={`/livros/editarLivro?id=${livro.id}`}><button>Editar</button></Link>
            <button onClick={() => handleRemover(livro.id)}>Remover</button>
          </div>
        ))}
      </div>
    </main>
  );
}
