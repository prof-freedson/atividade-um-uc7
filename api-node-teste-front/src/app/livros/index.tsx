import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/LivroCard.module.css";

interface Livro {
  id: number;
  nome: string;
  genero: string;
}

export default function ListaLivros() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data));
  }, []);

  const removerLivro = async (id: number) => {
    if (confirm("Deseja realmente remover este livro?")) {
      await fetch(`http://localhost:3000/livros/${id}`, { method: "DELETE" });
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
