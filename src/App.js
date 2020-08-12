import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// local components
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Articles from './Components/Articles/Articles';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <div className='main-view'>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/skills'>
              <Skills />
            </Route>
            <Route path='/articles'>
              <Articles />
            </Route>
            <Route path='/contacts'>
              <Contacts />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
