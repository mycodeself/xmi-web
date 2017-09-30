import React from 'react'
import { FormGroup, Form, Label, Input, Button } from 'reactstrap'

import { pushAssociation } from "../firebase/firebase"

class AssociationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      web: '',
      latitude: 0,
      longitude: 0
    }
  }

  handleForm() {
    if(this.state.name
    && this.state.phone
    && this.state.email
    && this.state.address
    && this.state.city
    && this.state.web) {
      pushAssociation(this.state);
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Nombre:</Label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(event) => {this.setState({ name: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Dirección:</Label>
          <Input
            type="text"
            name="address"
            value={this.state.address}
            onChange={(event) => {this.setState({ address: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Teléfono:</Label>
          <Input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={(event) => {this.setState({ phone: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>E-mail:</Label>
          <Input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(event) => {this.setState({ email: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Web:</Label>
          <Input
            type="text"
            name="web"
            value={this.state.web}
            onChange={(event) => {this.setState({ web: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Ciudad:</Label>
          <Input
            type="text"
            name="city"
            value={this.state.city}
            onChange={(event) => {this.setState({ city: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Latitud:</Label>
          <Input
            type="number"
            name="latitude"
            value={this.state.latitude}
            onChange={(event) => {this.setState({ latitude: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Longitud:</Label>
          <Input
            type="number"
            name="longitude"
            value={this.state.longitude}
            onChange={(event) => {this.setState({ longitude: event.target.value })}}
            required
          />
        </FormGroup>
        <Button onClick={() => this.handleForm()}>Insertar</Button>
      </Form>
    )
  }
}

export default AssociationForm