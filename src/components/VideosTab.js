import React from 'react'
import {TabPane, Row, Col} from 'reactstrap'
import VideosForm from './VideosForm'

class VideosTab extends React.Component {
  render() {
    return (
      <TabPane tabId="1">
        <Row>
          <Col sm="12" style={{marginTop: 30}}>
            <h4>Insertar nuevo vídeo</h4>
            <VideosForm/>
          </Col>
        </Row>
      </TabPane>
    )
  }
}

export default VideosTab