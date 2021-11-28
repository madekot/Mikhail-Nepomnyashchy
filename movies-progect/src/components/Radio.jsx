import { Component } from 'react';

class Radio extends Component {
  state = {
    checkedType: 'all',
  };

  style = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  componentDidMount() {
    this.props.onChangeType(this.state.checkedType);
  }

  render() {
    const { style } = this;

    return (
      <form
        action="#"
        style={style}
        onChange={(evt) => {
          const checkedType = evt.target.dataset.name;
          this.setState({checkedType})
          this.props.onChangeType(checkedType);
        }}
      >
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-name="all"
              checked={this.state.checkedType === 'all'}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-name="films"
              checked={this.state.checkedType === 'films'}
            />
            <span>Films</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-name="serials"
              checked={this.state.checkedType === 'serials'}
            />
            <span>Serials</span>
          </label>
        </p>
      </form>
    );
  }
}

export { Radio };
