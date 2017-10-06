import React from 'react'
import {Form, Button} from 'reactstrap'
import FieldGroup from "./FieldGroup";
import {pushVideo} from "../firebase/firebase";

class VideosForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: '',
      youtubeId: '',
      isLoading: false,
    }
  }

  componentWillMount() {
    this.setState(this.initialState)
  }


  handleForm() {
    this.setState({isLoading: true});
    pushVideo({
      title: this.state.title,
      youtubeId: this.state.youtubeId,
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
          fieldId="youtubeId"
          label="YouTube ID"
          type="text"
          name="youtubeId"
          value={this.state.youtubeId}
          onChange={(event) => {this.setState({ youtubeId: event.target.value })}}
          required={true}
        />
        <Button onClick={() => this.handleForm()}>Insertar vídeo</Button>
      </Form>
    );
  }
}

export default VideosForm