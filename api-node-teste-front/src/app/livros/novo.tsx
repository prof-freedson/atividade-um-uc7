import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

export default function NovoLivro() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: "",
    genero: "",
    editora: "",
    num_paginas: 0,
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "num_paginas" ? Number(value) : value,
    }));
  };
<<<<<<< HEAD:api-node-teste-front/src/app/livros/[id]/novo.tsx

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
=======
//movido
  const handleSubmit = async (e: any) => {
>>>>>>> upstream/main:api-node-teste-front/src/app/livros/novo.tsx
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/livros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar o livro.");
      }

      router.push("/livros");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar o livro.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Novo Livro</h1>

      <input
        name="nome"
        onChange={handleChange}
        placeholder="Nome"
        required
      />

      <input
        name="genero"
        onChange={handleChange}
        placeholder="Gênero"
        required
      />

      <input
        name="editora"
        onChange={handleChange}
        placeholder="Editora"
        required
      />

      <input
        name="num_paginas"
        type="number"
        onChange={handleChange}
        placeholder="Número de Páginas"
        required
      />

      <input
        name="url"
        onChange={handleChange}
        placeholder="URL da Capa"
        required
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
