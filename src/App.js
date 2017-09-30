import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HomeView from "./views/HomeView";
import NewsCreateView from "./views/NewsCreateView";
import AssociationCreateView from "./views/AssociationCreateView";
import TestimonyCreateView from "./views/TestimonyCreateView";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeView} />
          <Route path="/asociaciones" component={AssociationCreateView} />
          <Route path="/testimonios" component={TestimonyCreateView} />
          <Route path="/alas-vivas/noticias" component={NewsCreateView} />
        </div>
      </Router>
      )
  }
}

export default App;
