'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function EditarUsuario() {
  const [form, setForm] = useState({ nome: '', nascimento: '', email: '', telefone: '', cidade: '', estado: '', url: '' });
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      axios.get<{ 
        nome: string; 
        nascimento: string; 
        email: string; 
        telefone: string; 
        cidade: string; 
        estado: string; 
        url: string 
      }>(`http://localhost:3001/usuarios/${id}`)
        .then(response => setForm(response.data));
    }
  }, [id]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/usuarios/${id}`, form);
    router.push('/usuarios');
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Editar Usuário</h2>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
      <input name="nascimento" placeholder="Nascimento" value={form.nascimento} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
      <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} required />
      <input name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} required />
      <input name="url" placeholder="URL da Imagem" value={form.url} onChange={handleChange} required />
      <button type="submit">Atualizar</button>
    </form>
  );
}
