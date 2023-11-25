import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact activeClassName="active">All</NavLink>
        <NavLink to="/full-stack" activeClassName="active">Full Stack Development</NavLink>
        <NavLink to="/data-science" activeClassName="active">Data Science</NavLink>
        <NavLink to="/cyber-security" activeClassName="active">Cyber Security</NavLink>
        <NavLink to="/career" activeClassName="active">Career</NavLink>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/full-stack" component={FullStack} />
      <Route path="/data-science" component={DataScience} />
      <Route path="/cyber-security" component={CyberSecurity} />
      <Route path="/career" component={Career} />
    </Router>
  );
};

export default App;
