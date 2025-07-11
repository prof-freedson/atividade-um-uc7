import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditarLivro() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({ nome: "", genero: "", editora: "", num_paginas: 0, url: "" });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/livros/${id}`)
        .then((res) => res.json())
        .then((data) => setForm(data));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/livros/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/livros");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>📚Editar Livro</h1>
      <input name="nome" onChange={handleChange} value={form.nome} placeholder="Nome" required />
      <input name="genero" onChange={handleChange} value={form.genero} placeholder="Gênero" required />
      <input name="editora" onChange={handleChange} value={form.editora} placeholder="Editora" required />
      <input name="num_paginas" type="number" onChange={handleChange} value={form.num_paginas} placeholder="Número de Páginas" required />
      <input name="url" onChange={handleChange} value={form.url} placeholder="URL da Capa" required />
      <button type="submit">💾Salvar</button>
    </form>
  );
}
