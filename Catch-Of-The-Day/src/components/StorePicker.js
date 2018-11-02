import React, { Component } from 'react';
import { format } from 'util';

class StorePicker extends Component {
  render() {
    {
      /*This is a simple store selector*/
    }
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
