'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function EditarLivro() {
  const [form, setForm] = useState({ titulo: '', editora: '', num_paginas: 0, genero: '', autor: '', url: '' });
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/livros/${id}`)
        .then(response => setForm(response.data));
    }
  }, [id]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/livros/${id}`, form);
    router.push('/livros');
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Editar Livro</h2>
      <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
      <input name="editora" placeholder="Editora" value={form.editora} onChange={handleChange} required />
      <input name="num_paginas" type="number" placeholder="Número de páginas" value={form.num_paginas} onChange={handleChange} required />
      <input name="genero" placeholder="Gênero" value={form.genero} onChange={handleChange} required />
      <input name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} required />
      <input name="url" placeholder="URL da capa" value={form.url} onChange={handleChange} required />
      <button type="submit">Atualizar</button>
    </form>
  );
}
