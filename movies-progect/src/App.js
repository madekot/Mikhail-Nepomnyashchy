import React, { Component } from 'react';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';

class App extends Component {
  
  state = {
    films: null
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=2dc59f56&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({ films: data.Search }));
  };
  
  render () {
    return (
      <>
        <Header />
        <Main films={this.state.films}/>
        <Footer />
      </>
    );
  }
}

export default App;
