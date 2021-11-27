import React, { Component } from 'react';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';

class App extends Component {
  
  state = {
    films: null
  }

  transformData = (data) => {
    return data.map((item) => {
      return {
        title: item.Title,
        poster: item.Poster,
        category: item.Type,
        year: item.Year,
        id: item.imdbID,
      }
    })
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=2dc59f56&s=matrix')
      .then(response => response.json())
      .then(({Search}) => { 
        return this.setState({films: this.transformData(Search)});
      });
  };
  
  render () {
    const { films } = this.state

    return (
      <>
        <Header />
        <Main films={films}/>
        <Footer />
      </>
    );
  }
}

export default App;
