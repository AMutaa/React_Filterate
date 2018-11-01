import React, { Component } from 'react';

class FilteringTextBox extends Component {
  render() {
    return (
      <div>
        <h1>Filtering Text Box</h1>
        <div>
          <label htmlFor='fruit'></label>
          <input type='text' id='fruit' />
        </div>
      </div>
    )
  }
}

export default FilteringTextBox;