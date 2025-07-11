'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleRemover = async (id: number) => {
    await axios.delete(`http://localhost:3001/usuarios/${id}`);
    setUsuarios(usuarios.filter((u: any) => u.id !== id));
  };

  return (
    <main >
      <h2>Usuários</h2>
      <Link href="/usuarios/novo"><button>Criar novo usuário</button></Link>
      <div >
        {usuarios.map((usuario: any) => (
          <div key={usuario.id} >
            <img src={usuario.url} alt={usuario.nome} />
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