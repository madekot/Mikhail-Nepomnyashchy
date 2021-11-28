import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  };

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.onChangeSearch(this.state.search);
    }
  };

  componentDidMount() {
    this.setState({ search: this.props.search });
  }

  render() {
    return (
      <div className="input-field">
        <input
          className="validate"
          value={this.state.search}
          type="search"
          placeholder="search"
          onChange={(evt) => this.setState({ search: evt.target.value })}
          onKeyDown={(evt) => this.handleKey(evt)}
        />
        <button className="btn search-btn" onClick={() => this.props.onChangeSearch(this.state.search)}>
          Search
        </button>
      </div>
    );
  }
}

export { Search };
