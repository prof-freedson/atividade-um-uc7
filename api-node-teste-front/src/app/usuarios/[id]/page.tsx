"use client";
import axios from 'axios';

type Usuario = {
  url: string;
  nome: string;
  email: string;
  nascimento: string;
  telefone: string;
  cidade: string;
  estado: string;
};

async function getUsuario(id: string): Promise<Usuario> {
  const res = await axios.get<Usuario>(`http://localhost:3001/usuarios/${id}`);
  return res.data;
}

export default async function UsuarioDetalhes({ params }: any) {
  const usuario = await getUsuario(params.id);

  return (
    <div >
      <h2>Detalhes do Usuário</h2>
      <img src={usuario.url} alt={usuario.nome}  />
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Data de Nascimento:</strong> {usuario.nascimento}</p>
      <p><strong>Telefone:</strong> {usuario.telefone}</p>
      <p><strong>Cidade:</strong> {usuario.cidade}</p>
      <p><strong>Estado:</strong> {usuario.estado}</p>
    </div>
  );
}
 