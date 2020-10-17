import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import HomePage from './components/home/home';
import TeamPage from './components/team/teamPage';
import Footer from './components/footer/footer';
import GetInvolve from './components/involve/involve';
import ArchivePage from './components/archive/archive';
import Endorsement from './components/endorsement/endorsement';
// import UnderConstruction from './components/construction/UnderConstruction';

import Email from './components/email/Email';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact><HomePage /></Route>
        <Route path='/archive' exact><ArchivePage /></Route>
        <Route path='/team' exact><TeamPage /></Route>
        <Route path='/endorsement' exact><Endorsement /></Route>
        <Route path='/involvement' exact><GetInvolve /></Route>
        <Route path='/email' exact><Email /></Route>
      </Switch>
      <Footer />
    </HashRouter>
    
  );
}

export default App;
