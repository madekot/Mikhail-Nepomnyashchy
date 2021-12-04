import React, { Component } from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import Services from './components/Services';

class App extends Component {
  services = new Services();

  state = {
    films: [],
    search: 'matrix',
    type: '',
    loading: true,
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
    const { getFactoryRequest } = this;
    const { type } = this.state;

    this.setState({ loading: true });

    getFactoryRequest(type, search).then((films) => {
      this.setState({ search, films, loading: false });
    });
  };

  onChangeType = (type) => {
    const { getFactoryRequest } = this;
    const { search } = this.state;

    this.setState({ loading: true });

    getFactoryRequest(type, search).then((films) => {
      this.setState({ search, films, loading: false, type });
    });
  };

  componentDidMount() {
    this.services
      .getAllVideo(this.state.search)
      .then((films) => this.setState({ films }));
  }

  render() {
    const { onChangeSearch, onChangeType } = this;
    const { films, search, loading } = this.state;

    return (
      <>
        <Header />
        <Main
          search={search}
          films={films}
          loading={loading}
          onChangeSearch={onChangeSearch}
          onChangeType={onChangeType}
        />
        <Footer />
      </>
    );
  }
}

export default App;
