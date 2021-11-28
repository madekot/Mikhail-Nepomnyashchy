import React, { Component } from 'react';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import { Services } from './components/Services';

class App extends Component {
  services = new Services();

  state = {
    films: null,
    search: 'matrix',
    type: null,
  };

  getFactoryRequest = (type, search) => {
    const { getAllVideo, getMovies, getSerials } = this.services;

    if (type === 'films') {
      return getMovies(search);
    }

    if (type === 'serials') {
      return getSerials(search);
    }

    return getAllVideo(search);
  };

  onChangeSearch = (search) => {
    const { getFactoryRequest, setState } = this;
    const { type } = this.state;

    getFactoryRequest(type, search).then((films) => {
      setState({ search, films });
    });
  };

  onChangeType = (type) => {
    const { getFactoryRequest, setState } = this;
    const { search } = this.state;
    
    getFactoryRequest(type, search).then((films) => {
      setState({ search, films, type });
    });
  };

  componentDidMount() {
    this.services
      .getAllVideo(this.state.search)
      .then((films) => this.setState({ films }));
  }

  render() {
    const { onChangeSearch, onChangeType } = this;
    const { films, search } = this.state;

    return (
      <>
        <Header />
        <Main
          search={search}
          films={films}
          onChangeSearch={onChangeSearch}
          onChangeType={onChangeType}
        />
        <Footer />
      </>
    );
  }
}

export default App;
