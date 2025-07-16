import React from 'react';
import styles from './LivroCard.module.css';

interface LivroProps {
  titulo: string;
  autor: string;
  editora: string;
  num_paginas: number;
  genero: string;
  url: string;
}

const LivroCard: React.FC<LivroProps> = ({ titulo, autor, editora, num_paginas, genero, url }) => {
  return (
    <div className={styles.card}>
      <img src={url} alt={titulo} className={styles.imagem} />
      <div className={styles.info}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Editora:</strong> {editora}</p>
        <p><strong>Páginas:</strong> {num_paginas}</p>
        <p><strong>Gênero:</strong> {genero}</p>
      </div>
    </div>
  );
};

export default LivroCard;
