import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NavShow from './components/NavShow/NavShow';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Router>
        <NavShow />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/team/:teamId'>
            <TeamDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
