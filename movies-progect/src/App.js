import React, { Component } from 'react';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';

class App extends Component {
  
  state = {
    films: null,
    search: 'matrix',
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

  request = (search) => {
    return fetch(`http://www.omdbapi.com/?apikey=2dc59f56&s=${search}`)
      .then(response => response.json())
      .then(({Search}) => this.transformData(Search));
  }

  onChangeSearch = (search) => {
    this.request(search).then(films => {
      this.setState({search, films})
    })
  }
    
  componentDidMount() {
    this.request(this.state.search).then(films => this.setState({films}))
  };
  
  render () {
    const { onChangeSearch } = this;
    const { films, search } = this.state;

    return (
      <>
        <Header />
        <Main search={search} films={films} onChangeSearch={onChangeSearch}/>
        <Footer />
      </>
    );
  }
}

export default App;
