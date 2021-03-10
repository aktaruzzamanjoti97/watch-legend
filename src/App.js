import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
