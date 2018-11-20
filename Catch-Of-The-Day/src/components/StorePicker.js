import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  gotoStore = event => {
    event.preventDefault();
    console.log(this);
  };

  render() {
    return (
      <form onSubmit={this.gotoStore} className="store-selector">
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
