import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './Routes'
import Navbar from './Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes/>
      </div>  
    </BrowserRouter>
  );
}

export default App;
