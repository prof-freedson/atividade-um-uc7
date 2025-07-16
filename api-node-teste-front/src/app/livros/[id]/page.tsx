"use client";
import axios from 'axios';

type Livro = {
  url: string;
  titulo: string;
  editora: string;
  num_paginas: number;
  genero: string;
  autor: string;
};

async function getLivro(id: string): Promise<Livro> {
  const res = await axios.get<Livro>(`http://localhost:3001/livros/${id}`);
  return res.data;
}

interface LivroDetalhesProps {
  params: { id: string };
}

export default async function LivroDetalhes({ params }: LivroDetalhesProps) {
  const livro = await getLivro(params.id);
return (
  <div>
    <h2>Detalhes do Livro</h2>

    <img src={livro.url} alt={livro.titulo} style={{ maxWidth: '100%', height: 'auto' }} />

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


}
