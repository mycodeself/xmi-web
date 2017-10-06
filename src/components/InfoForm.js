import React from 'react'
import {Form, Button} from 'reactstrap'
import FieldGroup from "./FieldGroup";
import {pushInfo} from "../firebase/firebase";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: '',
      url: '',
      isLoading: false,
    }
  }

  componentWillMount() {
    this.setState(this.initialState)
  }


  handleForm() {
    this.setState({isLoading: true});
    pushInfo({
      title: this.state.title,
      url: this.state.url,
      time: Date.now()
    }, (snap) => {
      this.setState(this.initialState);
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    if(this.state.isLoading) {
      return <div>Cargando...</div>
    }

    return (
      <Form>
        <FieldGroup
          fieldId="title"
          label="Título"
          type="text"
          name="title"
          value={this.state.title}
          onChange={(event) => {this.setState({ title: event.target.value })}}
          required={true}
        />
        <FieldGroup
          fieldId="url"
          label="URL"
          type="text"
          name="url"
          value={this.state.url}
          onChange={(event) => {this.setState({ url: event.target.value })}}
          required={true}
        />
        <Button onClick={() => this.handleForm()}>Insertar información</Button>
      </Form>
    );
  }
}

export default InfoForm