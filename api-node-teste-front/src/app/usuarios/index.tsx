'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

type Usuario = {
  id: number;
  nome: string;
  email: string;
  url: string;
};

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    axios.get<Usuario[]>('http://localhost:3001/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleRemover = async (id: number) => {
    await axios.delete(`http://localhost:3001/usuarios/${id}`);
    setUsuarios(usuarios.filter((u: any) => u.id !== id));
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Usuários</h2>
      <Link href="/usuarios/novo"><button>Criar novo usuário</button></Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {usuarios.map((usuario: any) => (
          <div key={usuario.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
            <img src={usuario.url} alt={usuario.nome} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{usuario.nome}</h3>
            <p>{usuario.email}</p>
            <Link href={`/usuarios/${usuario.id}`}><button>Ver</button></Link>
            <Link href={`/usuarios/editarUsuario?id=${usuario.id}`}><button>Editar</button></Link>
            <button onClick={() => handleRemover(usuario.id)}>Remover</button>
          </div>
        ))}
      </div>
    </main>
  );
}
