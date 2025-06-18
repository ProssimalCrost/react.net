import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function AtividadeForm({ addAtividade, atualizarAtividade, atividade }) {
  const [form, setForm] = useState({
    id: 0,
    titulo: '',
    descricao: '',
    prioridade: '0',
  });

  useEffect(() => {
    if (atividade.id !== 0) {
      setForm(atividade);
    }
  }, [atividade]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.titulo.trim() || !form.descricao.trim() || form.prioridade === '0') {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    if (form.id === 0) {
      addAtividade(form);
    } else {
      atualizarAtividade(form);
    }

    setForm({ id: 0, titulo: '', descricao: '', prioridade: '0' });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-3">
        <label htmlFor="id" className="form-label">ID</label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          value={form.id}
          disabled
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="prioridade" className="form-label">Prioridade</label>
        <select
          id="prioridade"
          name="prioridade"
          className="form-select"
          value={form.prioridade}
          onChange={handleChange}
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
          name="titulo"
          placeholder="Título da atividade"
          value={form.titulo}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-8">
        <label htmlFor="descricao" className="form-label">Descrição</label>
        <input
          type="text"
          className="form-control"
          id="descricao"
          name="descricao"
          placeholder="Descrição da atividade"
          value={form.descricao}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-2 d-flex align-items-end">
        <button type="submit" className="btn btn-success">
          <FontAwesomeIcon icon={form.id === 0 ? faPlus : faCheck} /> {form.id === 0 ? 'Adicionar' : 'Salvar'}
        </button>
      </div>
    </form>
  );
}
