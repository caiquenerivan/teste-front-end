import Header from './components/Header';
import Informacoes from './components/Informacoes';
import Marcas from './components/Marcas';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import './style/App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Informacoes />
      <Produtos />
      <Marcas />
      <Footer />
    </div>
  );
}

export default App;
