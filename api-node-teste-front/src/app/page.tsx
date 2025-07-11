"use client";
import Link from 'next/link';
import axios from 'axios';

async function getLivro(id: string) {
  const res = await axios.get(`http://localhost:3001/livros/${id}`);
  return res.data;
}

export default function HomePage() {
  return (
    <main >
      <h1>Biblioteca Digital</h1>
      <div >
        <Link href="/usuarios">
          <button >Gerenciar Usuários</button>
        </Link>
        <Link href="/livros">
          { <button>Gerenciar Livros</button> }
        </Link>
      </div>
    </main>
  );
}
