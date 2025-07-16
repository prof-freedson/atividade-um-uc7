
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    const res = await fetch(`http://localhost:3001/livros/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

interface LivroDetalhesProps {
  params: { id: string };
}


const LivroDetalhes = ({ params }: LivroDetalhesProps) => {
  const [livro, setLivro] = useState<Livro | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLivro(params.id).then((data) => {
      setLivro(data);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) return <div>Carregando...</div>;
  if (!livro) return <div>Livro não encontrado.</div>;


  if (!livro) {
    notFound(); 
  }

  return (
    <div>
      <h2>Detalhes do Livro</h2>
      <Image src={livro.url} alt={livro.titulo} width={400} height={300} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>
        <strong>Título:</strong> {livro.titulo}
      </p>
      <p>
        <strong>Editora:</strong> {livro.editora}
      </p>
      <p>
        <strong>Número de Páginas:</strong> {livro.num_paginas}
      </p>
      <p>
        <strong>Gênero:</strong> {livro.genero}
      </p>
      <p>
        <strong>Autor:</strong> {livro.autor}
      </p>
    </div>
  );
};

export default LivroDetalhes;
