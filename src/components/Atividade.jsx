import React from 'react';
import {
  faEdit,
  faTrash,
  faSmile,
  faClock,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Atividade({ ativ, deletarAtividade }) {
  // Ícone baseado na prioridade
  function getPrioridadeIcon(prioridade) {
    switch (prioridade) {
      case 'Baixa':
        return faSmile;
      case 'Normal':
        return faClock;
      case 'Alta':
        return faExclamationTriangle;
      default:
        return faSmile;
    }
  }

  // Cor da borda baseada na prioridade
  function getBorderColor(prioridade) {
    switch (prioridade) {
      case 'Baixa':
        return 'border-success';
      case 'Normal':
        return 'border-dark';
      case 'Alta':
        return 'border-warning';
      default:
        return 'border-secondary';
    }
  }

  return (
  <div className="col-md-20">
    <div className={`card shadow-sm ${getBorderColor(ativ.prioridade)}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title mb-0">
            {ativ.id} - {ativ.titulo}
          </h5>
          <span className="badge bg-primary">
            <FontAwesomeIcon icon={getPrioridadeIcon(ativ.prioridade)} className="me-2" />
            {ativ.prioridade}
          </span>
          
        </div>

        <p className="card-text text-muted">{ativ.descricao}</p>

        <div className="d-flex justify-content-end gap-5 mt-5">
          <button
            className="btn btn-outline-primary btn-sm"
            aria-label="Editar atividade"
          >
            <FontAwesomeIcon icon={faEdit} /> Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => deletarAtividade(ativ.id)}
            aria-label="Deletar atividade"
          >
            <FontAwesomeIcon icon={faTrash} /> Deletar
          </button>
        </div>
      </div>
    </div>
  </div>
);
}
