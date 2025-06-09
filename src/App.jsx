import { useState } from 'react';
import AtividadeLista from './components/AtividadeLista';
import AtividadeForm from './components/AtividadeForm';

function App() {
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState([]);

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

  function pegarAtividade(id) {
    const= atividade = atividades.filter(((atividade) => atividade.id === id)
    setAtividade(atividade[0])
  )
  }

    return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="container my-auto py-4"> {/* my-auto ajuda na centralização vertical */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8"> {/* Larguras responsivas */}
            <h2 className="text-center mb-4">Gerenciador de Atividades</h2>
            
            <div className="card shadow-sm mb-5">
              <div className="card-body p-4">
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
        </div>
      </div>
    </div>
  );
}

export default App;