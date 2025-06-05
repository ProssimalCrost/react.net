import { useState } from 'react';
import AtividadeLista from './components/AtividadeLista';
import AtividadeForm from './components/AtividadeForm';

function App() {
  const [atividades, setAtividades] = useState([]);

  function addAtividade(atividade) {
    const novaAtividade = {
      ...atividade,
      id: atividades.length > 0 ? atividades[atividades.length - 1].id + 1 : 1,
    };

    setAtividades([...atividades, novaAtividade]);
  }

  function deletarAtividade(id) {
    const novasAtividades = atividades.filter((atividade) => atividade.id !== id);
    setAtividades(novasAtividades);
  }

  return (
    <div className="container mt-4 d-flex flex-column align-items-center justify-content-center">
      <h2 className="mb-4 text-center">Gerenciador de Atividades</h2>
      <div className="card shadow mb-4" >
        <div className="card-body">
          <AtividadeForm
            addAtividade={addAtividade}
            proximoId={atividades.length > 0 ? atividades[atividades.length - 1].id + 1 : 1}
          />
        </div>
      </div>

      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
      />
    </div>
  );
}

export default App;
