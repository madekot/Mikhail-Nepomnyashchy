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

  onChangeSearch = (search) => { 
    if (this.state.type === 'all') {
      this.services.getAllVideo(search).then((films) => {
        this.setState({ search, films });
      });
    }

    if (this.state.type === 'films') {
      this.services.getMovies(search).then((films) => {
        this.setState({ search, films });
      });
    }

    if (this.state.type === 'serials') {
      this.services.getSerials(search).then((films) => {
        this.setState({ search, films });
      });
    }
  };

  onChangeType = (type) => {
    const { search } = this.state;

    if (type === 'all') {
      this.services.getAllVideo(search).then((films) => {
        this.setState({ search, films });
      });
    }

    if (type === 'films') {
      this.services.getMovies(search).then((films) => {
        this.setState({ search, films });
      });
    }

    if (type === 'serials') {
      this.services.getSerials(search).then((films) => {
        this.setState({ search, films });
      });
    }
    this.setState({type})
  }

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
        <Main search={search} films={films} onChangeSearch={onChangeSearch} onChangeType={onChangeType} />
        <Footer />
      </>
    );
  }
}

export default App;
