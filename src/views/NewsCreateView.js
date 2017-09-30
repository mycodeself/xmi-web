import React from 'react'
import Layout from "../components/Layout";
import NewsForm from "../components/NewsForm";
import {pushNews} from "../firebase/news";

class NewsCreateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      submitSuccess: false,
      submitError: false,
    }
  }

  handleSubmit(news) {
    this.setState({isLoading: true});
    pushNews(news)
      .then((snap) => {
        this.setState({
          isLoading: false,
          submitSuccess: true,
          submitError: false,
        })
      })
      .catch((error) => {
        this.setStaet({
          isLoading: false,
          submitSuccess: false,
          submitError: true,
        })
      })
  }

  render() {
    return (
      <Layout title="Crear Noticia">
        <NewsForm onSubmit={this.handleSubmit.bind(this)}/>
      </Layout>
    )
  }
}


export default NewsCreateView