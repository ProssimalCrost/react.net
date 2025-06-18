import Atividade from './Atividade';

export default function AtividadeLista({ atividades, deletarAtividade, pegarAtividade }) {
  return (
    <div className="row align-items-center justify-content-center">
      {atividades.map((ativ) => (
        <Atividade
          key={ativ.id}
          ativ={ativ}
          deletarAtividade={deletarAtividade}
          pegarAtividade={pegarAtividade}
        />
      ))}
    </div>
  );
}
