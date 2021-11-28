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
    if (type === 'all') {
      return this.services.getAllVideo(search);
    }

    if (type === 'films') {
      return this.services.getMovies(search);
    }

    if (type === 'serials') {
      return this.services.getSerials(search);
    }
  };

  onChangeSearch = (search) => {
    const { type } = this.state;
    this.getFactoryRequest(type, search).then((films) => {
      this.setState({ search, films });
    });
  };

  onChangeType = (type) => {
    // const { search } = this.state;
    // this.getFactoryRequest(type, search).then((films) => {
    //   this.setState({ search, films, type});
    // });
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
