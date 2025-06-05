import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AtividadeForm({ addAtividade, proximoId }) {
  const [prioridade, setPrioridade] = useState('0');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!titulo.trim() || !descricao.trim() || prioridade === '0') {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    addAtividade({ prioridade, titulo, descricao });

    // Limpa campos após adicionar
    setPrioridade('0');
    setTitulo('');
    setDescricao('');
  }

  return (
    <form className="row g-3 justify-content-center align-items-center" onSubmit={handleSubmit}>

      <div className="col-md-3">
        <label htmlFor="id" className="form-label">ID</label>
        <input
          type="text"
          className="form-control"
          id="id"
          value={proximoId}
          readOnly
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="prioridade" className="form-label">Prioridade</label>
        <select
          id="prioridade"
          className="form-select"
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
        >
          <option value="0">Selecionar...</option>
          <option value="Baixa">Baixa</option>
          <option value="Normal">Normal</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <div className="col-md-6">
        <label htmlFor="titulo" className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          placeholder="Título da atividade"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="col-md-8">
        <label htmlFor="descricao" className="form-label">Descrição</label>
        <input
          type="text"
          className="form-control"
          id="descricao"
          placeholder="Descrição da atividade"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>

      <div className="col-md-2 d-flex align-items-end">
        <button type="submit" className="btn btn-success">
          <FontAwesomeIcon icon={faPlus} /> Adicionar
        </button>
      </div>
    </form>
  );
}
