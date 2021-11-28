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

  typeToFunc = {
    films: () => this.getContent(this.services.getMovies),
    serials: () => this.getContent(this.services.getSerials),
    all: () => this.getContent(this.services.getAllVideo),
  }

  getContent = (cb) => {
    cb(this.state.search).then((films) => {
      this.setState({ search: this.state.search, films });
    });
  }

  onChangeSearch = (search) => { 
    this.services.getAllVideo(search).then((films) => {
      this.setState({ search, films });
    });
  };

  onChangeType = (type) => {
    this.typeToFunc[type]() 
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
