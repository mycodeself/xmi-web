import React from 'react'
import { Button } from 'reactstrap'

import Layout from '../components/Layout'
import {rootRef} from '../firebase/firebase'

class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Layout title="Home">

      </Layout>
    )
  }
}

export default HomeView