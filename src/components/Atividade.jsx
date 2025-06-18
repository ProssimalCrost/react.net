export default function Atividade({ ativ, deletarAtividade, pegarAtividade }) {
  return (
    <div className="col-md-5 mb-3">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">
            {ativ.id} - {ativ.titulo}
          </h5>
          <p className="card-text">{ativ.descricao}</p>
          <span className={`badge bg-${prioridadeCor(ativ.prioridade)}`}>
            {ativ.prioridade}
          </span>

          <div className="mt-2">
            <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => pegarAtividade(ativ.id)}
            >
              Editar
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => deletarAtividade(ativ.id)}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function prioridadeCor(prioridade) {
  switch (prioridade) {
    case 'Baixa':
      return 'success';
    case 'Normal':
      return 'warning';
    case 'Alta':
      return 'danger';
    default:
      return 'secondary';
  }
}
