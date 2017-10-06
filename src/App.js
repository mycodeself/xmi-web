import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HomeView from "./views/HomeView";
import AssociationCreateView from "./views/AssociationCreateView";
import ResourcesView from './views/ResourcesView'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeView} />
          <Route path="/asociaciones" component={AssociationCreateView} />
          <Route path="/recursos" component={ResourcesView} />
        </div>
      </Router>
      )
  }
}

export default App;
