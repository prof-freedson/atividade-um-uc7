"use client";
import axios from 'axios';

async function getLivro(id: string) {
  const res = await axios.get(`http://localhost:3001/livros/${id}`);
  return res.data;
}

export default async function LivroDetalhes({ params }: any) {
  const livro = await getLivro(params.id);

  return (
    <div >
      <h2>Detalhes do Livro</h2>
      <img src={livro.url} alt={livro.titulo}  />
      <p><strong>Título:</strong> {livro.titulo}</p>
      <p><strong>Editora:</strong> {livro.editora}</p>
      <p><strong>Número de Páginas:</strong> {livro.num_paginas}</p>
      <p><strong>Gênero:</strong> {livro.genero}</p>
      <p><strong>Autor:</strong> {livro.autor}</p>
    </div>
  );
}
