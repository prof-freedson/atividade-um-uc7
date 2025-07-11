import { useRouter } from "next/router";
import { useState } from "react";

export default function NovoLivro() {
  const router = useRouter();
  const [form, setForm] = useState({ nome: "", genero: "", editora: "", num_paginas: 0, url: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("http://localhost:3000/livros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/livros");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Novo Livro</h1>
      <input name="nome" onChange={handleChange} placeholder="Nome" required />
      <input name="genero" onChange={handleChange} placeholder="Gênero" required />
      <input name="editora" onChange={handleChange} placeholder="Editora" required />
      <input name="num_paginas" type="number" onChange={handleChange} placeholder="Número de Páginas" required />
      <input name="url" onChange={handleChange} placeholder="URL da Capa" required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
