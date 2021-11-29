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
      >
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            data-name="all"
            checked={this.state.checkedType === 'all'}
            onChange={(evt) => {
              const checkedType = evt.target.dataset.name;
              this.setState({ checkedType });
              this.props.onChangeType(checkedType);
            }}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            data-name="films"
            checked={this.state.checkedType === 'films'}
            onChange={(evt) => {
              const checkedType = evt.target.dataset.name;
              this.setState({ checkedType });
              this.props.onChangeType(checkedType);
            }}
          />
          <span>Films</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            data-name="serials"
            checked={this.state.checkedType === 'serials'}
            onChange={(evt) => {
              const checkedType = evt.target.dataset.name;
              this.setState({ checkedType });
              this.props.onChangeType(checkedType);
            }}
          />
          <span>Serials</span>
        </label>
      </form>
    );
  }
}

export { Radio };
