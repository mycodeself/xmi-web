import React from 'react'
import {TabPane, Row, Col} from 'reactstrap'
import StudiesForm from "./StudiesForm";

class StudiesTab extends React.Component {
  render() {
    return (
      <TabPane tabId="2" style={{marginTop: 30}}>
        <Row>
          <Col sm="12">
            <h4>Insertar nuevo estudio</h4>
            <StudiesForm/>
          </Col>
        </Row>
      </TabPane>
    )
  }
}

export default StudiesTab