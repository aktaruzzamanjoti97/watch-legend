import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Header from './components/Header/Header';
import NavShow from './components/NavShow/NavShow';
import AllTeams from './components/AllTeams/AllTeams';

function App() {
  return (
    <div>
      <Router>
        <NavShow />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/teams'>
            <AllTeams />
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
