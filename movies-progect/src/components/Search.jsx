import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  };

  render() {
    const { onChangeSearch, search } = this.props;
    // const { search } = this.state;

    return (
      <div className="input-field">
        <input
          className="validate"
          value={search}
          type="search"
          placeholder="search"
          onChange={(evt) => {
              this.setState({search: evt.target.value})
            }}
          onKeyDown={({key}) => {
            if (key === 'Enter') {
              onChangeSearch(search)
            }
          }}  
        />
      </div>
    );
  }
}

export { Search };
