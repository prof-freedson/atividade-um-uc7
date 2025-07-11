'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function NovoLivro() {
  const [form, setForm] = useState({ titulo: '', editora: '', num_paginas: 0, genero: '', autor: '', url: '' });
  const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/livros', form);
    router.push('/livros');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Novo Livro</h2>
      <input name="titulo" placeholder="Título" onChange={handleChange} required />
      <input name="editora" placeholder="Editora" onChange={handleChange} required />
      <input name="num_paginas" type="number" placeholder="Número de páginas" onChange={handleChange} required />
      <input name="genero" placeholder="Gênero" onChange={handleChange} required />
      <input name="autor" placeholder="Autor" onChange={handleChange} required />
      <input name="url" placeholder="URL da capa" onChange={handleChange} required />
      <button type="submit">Salvar</button>
    </form>
  );
}
