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
import OurTeamPage from './components/team/OurTeamPage';
import ProjectPage from './components/construction/UnderConstruction';
import UnderConstruction from './components/construction/UnderConstruction';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact><HomePage /></Route>
        <Route path='/archive' exact><ArchivePage /></Route>
        <Route path='/team' exact><OurTeamPage /></Route>
        <Route path='/about' exact><UnderConstruction /></Route>
        <Route path='/involvement' exact><UnderConstruction /></Route>
      </Switch>
      <Footer />
    </HashRouter>
    
  );
}

export default App;
