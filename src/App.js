import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header'
import RegisterCard from './components/register-card'
import Home from './components/home'

import './App.css';

function App() {
  const [title, setTitle] = useState('')

  return (
    <Router>
      <div className="App">
        <Header title={title} />
        <section className="body-wrapper">
          <Switch>
            <Route exact path="/register-card">
              <RegisterCard setTitle={setTitle} />
            </Route>
            <Route path="/">
              <Home setTitle={setTitle} />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
