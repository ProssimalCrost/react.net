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

  // Cor da borda e do badge baseada na prioridade
  function getPrioridadeStyle(prioridade) {
    switch (prioridade) {
      case 'Baixa':
        return { border: 'border-success', badge: 'bg-success' };
      case 'Normal':
        return { border: 'border-primary', badge: 'bg-primary' };
      case 'Alta':
        return { border: 'border-warning', badge: 'bg-warning text-dark' };
      default:
        return { border: 'border-secondary', badge: 'bg-secondary' };
    }
  }

  const prioridadeStyle = getPrioridadeStyle(ativ.prioridade);

  return (
    <div className="col-md-8 mx-auto mb-4"> {/* Centraliza a coluna e adiciona margem inferior */}
      <div className={`card shadow-sm ${prioridadeStyle.border}`}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0">
              {ativ.id} - {ativ.titulo}
            </h5>
            <span className={`badge ${prioridadeStyle.badge}`}>
              <FontAwesomeIcon icon={getPrioridadeIcon(ativ.prioridade)} className="me-2" />
              {ativ.prioridade}
            </span>
          </div>

          <p className="card-text">{ativ.descricao}</p>

          <div className="d-flex justify-content-end gap-3 mt-4"> {/* Reduzi o gap e margin-top */}
            <button
              className="btn btn-outline-primary btn-sm"
              aria-label="Editar atividade"
            > onClick={() => pegarAtividade(ativ.id)}
              <FontAwesomeIcon icon={faEdit} className="me-1" /> Editar
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => deletarAtividade(ativ.id)}
              aria-label="Deletar atividade"
            >
              <FontAwesomeIcon icon={faTrash} className="me-1" /> Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}