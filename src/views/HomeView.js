import React from 'react'
import { Button } from 'reactstrap'

import Layout from '../components/Layout'
import {rootRef} from '../firebase/firebase'

class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onClick() {
    rootRef.child('resources/info').push({
      title: 'Primeros signos del maltrato',
      url: 'http://www.violenciagenero.msssi.gob.es/informacionUtil/comoDetectarla/primerosSignos/home.htm',
      time: Date.now(),
    });
  }

  render() {
    return (
      <Layout title="Home">
        <Button onClick={() => this.onClick()}>Do action!</Button>
      </Layout>
    )
  }
}

export default HomeView