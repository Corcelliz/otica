import './App.css';

import Topo from './components/Topo';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="container-app">
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
