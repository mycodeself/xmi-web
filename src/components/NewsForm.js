import React from 'react'
import {Form, Button} from 'reactstrap'
import FieldGroup from './FieldGroup'

class NewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    }
  }

  render() {
    return (
      <Form>
        <FieldGroup
          id="newsTitleField"
          type="text"
          placeholder="Título de la noticia..."
          onChange={(event) => this.setState({title: event.target.value})}
          value={this.state.title}
        />
        <FieldGroup
          id="newsTextField"
          type="textarea"
          placeholder="Escribe aquí la noticia..."
          onChange={(event) => this.setState({text: event.target.value})}
          value={this.state.text}
        />
        <Button type="submit" onClick={() => this.props.onSubmit(this.state)}>
          Crear noticia
        </Button>
      </Form>
    )
  }
}

export default NewsForm