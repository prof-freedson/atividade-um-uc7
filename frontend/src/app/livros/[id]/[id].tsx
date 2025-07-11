import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Livro {
  id: number;
  nome: string;
  genero: string;
  editora: string;
  num_paginas: number;
  url: string;
}

export default function DetalhesLivro() {
  const router = useRouter();
  const { id } = router.query;
  const [livro, setLivro] = useState<Livro | null>(null);

  useEffect(() => {
    if (id)
      fetch(`http://localhost:3001/livros/${id}`)
      .then((res: Response) => res.json())
      .then((data: Livro) => setLivro(data));
  }, [id]);

  if (!livro) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{livro.nome}</h1>
      <p><strong>Gênero:</strong> {livro.genero}</p>
      <p><strong>Editora:</strong> {livro.editora}</p>
      <p><strong>Número de páginas:</strong> {livro.num_paginas}</p>
      <img src={livro.url} alt={livro.nome} width={200} />
    </div>
  );
}
