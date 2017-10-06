import React from 'react'
import {TabPane, Row, Col} from 'reactstrap'
import InfoForm from "./InfoForm";

class InformationTab extends React.Component {
  render() {
    return (
      <TabPane tabId="3">
        <Row>
          <Col sm="12" style={{marginTop: 30}}>
            <h4>Insertar nueva información</h4>
            <InfoForm/>
          </Col>
        </Row>
      </TabPane>
    )
  }
}

export default InformationTab