import { useState } from 'react';
import AtividadeLista from './components/AtividadeLista';
import AtividadeForm from './components/AtividadeForm';
import './App.css'
import api from './api/atividade'

function App() {
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  
  function addAtividade(ativ) {
    const novaAtividade = {
      ...ativ,
      id: atividades.length > 0 ? atividades[atividades.length - 1].id + 1 : 1,
    };
    setAtividades([...atividades, novaAtividade]);
 }



  function atualizarAtividade(ativ) {
    setAtividades(
      atividades.map((item) => (item.id === ativ.id ? ativ : item))
    );
    setAtividade({ id: 0 }); // limpa a atividade selecionada após editar
  }

  function deletarAtividade(id) {
    const novasAtividades = atividades.filter((atividade) => atividade.id !== id);
    setAtividades(novasAtividades);
  }

  function pegarAtividade(id) {
    const atividade = atividades.find((atividade) => atividade.id === id);
    setAtividade(atividade);
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="container my-auto py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h2 className="text-center mb-4 text-white">Gerenciador de Atividades</h2>

            <div className="card shadow-sm mb-5 border border-secondary">
              <div className="card-body p-4">
                <AtividadeForm
                  addAtividade={addAtividade}
                  atualizarAtividade={atualizarAtividade}
                  atividade={atividade}
                />
              </div>
            </div>

            <AtividadeLista
              atividades={atividades}
              deletarAtividade={deletarAtividade}
              pegarAtividade={pegarAtividade}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
