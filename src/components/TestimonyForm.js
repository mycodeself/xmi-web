import React from 'react'
import { FormGroup, Form, Label, Input, Button } from 'reactstrap'

import { pushTestimony } from '../firebase/firebase'

class TestimonyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      text: "",

    };
  }

  handleForm() {
    pushTestimony(this.state);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Autor:</Label>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            onChange={(event) => {this.setState({ author: event.target.value })}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="text"
            value={this.state.text}
            onChange={(event) => {this.setState({ text: event.target.value })}}
            placeholder="Escribe aquí..."
            required
          />
        </FormGroup>
        <Button onClick={() => this.handleForm()}>Insertar</Button>
      </Form>
    );
  }
}

export default TestimonyForm