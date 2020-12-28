import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            {/* home  Page*/}
            <Home/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
