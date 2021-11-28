import { Component } from 'react';

class Radio extends Component {
  state = {
    checkedType: null,
  };

  style = {
    display: 'flex',
    justifyContent: 'space-between',
  };

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
              defaultChecked
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
            />
            <span>Serials</span>
          </label>
        </p>
      </form>
    );
  }
}

export { Radio };
