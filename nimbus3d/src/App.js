import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            {/* home  Page*/}
          </Route>
          <Redirect to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
