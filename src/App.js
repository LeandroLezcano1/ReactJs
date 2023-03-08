import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Hola mundo!"} />
    </div>
  );
};

export default App;
