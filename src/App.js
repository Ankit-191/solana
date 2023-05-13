
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Developer from './components/Developer';
import Started from './components/Started';
import Digdipper from './components/Digdipper';
import Gotosource from './components/Gotosource';


function App() {
  return (
    <>
      <Add/>
      <Navbar/>
      <Developer/>
      <Started/>
      <Digdipper/>
      <Gotosource/>
    </>
  );
}

export default App;
