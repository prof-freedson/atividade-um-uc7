"use client";
import { useState } from "react";
import axios from "axios";

type CartaoLivro = {
  livroId: string;
  leitor: string;
  dataEmprestimo: string;
};

export default function CriarCartao({ livroId }: { livroId: string }) {
  const [leitor, setLeitor] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCriarCartao = async () => {
    const novoCartao: CartaoLivro = {
      livroId,
      leitor,
      dataEmprestimo: new Date().toISOString().split("T")[0],
    };

    try {
      await axios.post("http://localhost:3001/cartoes", novoCartao);
      setMensagem("Cartão criado com sucesso!");
      setLeitor("");
    } catch (err) {
      console.error(err);
      setMensagem("Erro ao criar cartão.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Criar Cartão de Empréstimo</h3>
      <label>
        Nome do Leitor:
        <input
          type="text"
          value={leitor}
          onChange={(e) => setLeitor(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <button onClick={handleCriarCartao} style={{ marginLeft: "10px" }}>
        Registrar Empréstimo
      </button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
