import React, { Component } from 'react';
import search from './search.svg'

class FilteringTextBox extends Component {
  render() {
    return (
      <div>
        <h1>Filtering Text Box</h1>
        <form action="">
          <div className='input_box'>
            <label htmlFor='fruit'></label>
            <input type='text' id='fruit' placeholder='Search...' />
          </div>
          <button type='submit'><img src={search} alt="" id='search' /></button>
        </form>

      </div >
    )
  }
}

export default FilteringTextBox;