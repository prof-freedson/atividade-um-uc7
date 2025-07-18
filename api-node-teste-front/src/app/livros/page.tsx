'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/LivroCard.module.css";

import axios from 'axios';

interface Livro {
  id: number;
  nome: string;
  genero: string;
  url_capa: string;
}

export default function ListaLivros() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
  axios.get('http://localhost:3001/livros')
    .then(response => {
      const data = response.data as { livro?: Livro[] };
      setLivros(data.livro || []);
    })
    .catch(error => console.error(error));
}, []);

  const removerLivro = async (id: number) => {
    if (confirm("Deseja realmente remover este livro?")) {
      await fetch(`http://localhost:3001/livros/${id}`, { method: "DELETE" });
      setLivros(livros.filter((livro) => livro.id !== id));
    }
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      <Link href="/livros/novo">
        <button>Criar novo livro</button>
      </Link>
      <div className={styles.listaLivros}>
        {livros.map((livro) => (
          <div key={livro.id} className={styles.card}>
            <img src={livro.url_capa} alt={livro.nome} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>{livro.nome}</h2>
            <p>{livro.genero}</p>
            <Link href={`/livros/${livro.id}`}><button>Ver</button></Link>
            <Link href={`/livros/${livro.id}/editar`}><button>Editar</button></Link>
            <button onClick={() => removerLivro(livro.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}
