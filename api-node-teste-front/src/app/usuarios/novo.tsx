'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function NovoUsuario() {
  const [form, setForm] = useState({ nome: '', nascimento: '', email: '', telefone: '', cidade: '', estado: '', url: '' });
  const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/usuarios', form);
    router.push('/usuarios');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Novo Usuário</h2>
      <input name="nome" placeholder="Nome" onChange={handleChange} required />
      <input name="nascimento" placeholder="Nascimento (dd/mm/aaaa)" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="telefone" placeholder="Telefone (99)99999-9999" onChange={handleChange} required />
      <input name="cidade" placeholder="Cidade" onChange={handleChange} required />
      <input name="estado" placeholder="Estado" onChange={handleChange} required />
      <input name="url" placeholder="URL da Imagem" onChange={handleChange} required />
      <button type="submit">Salvar</button>
    </form>
  );
}
