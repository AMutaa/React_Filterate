import React, { Component } from 'react';
import search from './search.svg'


class FilteringTextBox extends Component {
  state = {
    fruits: ['Apple', 'Orange', 'Banana', 'Pineapple', 'Blueberry', 'Blackberry',
      'Raspberry', 'Cranberry', 'Clementine', 'Mango', 'Papaya', 'Peach', 'Tangerine', 'Pear', 'Plum', 'Grapes',
      'Boysenberry', 'Lychee', 'Pomegranate', 'Watermelon', 'Honey Dew Melon', 'Fig', 'Cherry', 'Grapefruit']
  }
  render() {
    return (
      <div>
        <h1>Filtering Text Box</h1>
        <form action="">
          <div className='input_box'>
            <label htmlFor='fruit'></label>
            <input type='text' id='fruit' onKeyDown={handleClick} placeholder='Search...' />
          </div>
          <button type='submit'><img src={search} alt="" id='search' /></button>
        </form>
        <ul>
          {this.state.fruits.map((fruit) => (
            <li>{fruit}</li>
          ))}
        </ul>

      </div >
    )
  }
}

export default FilteringTextBox;

function handleClick(e) {
  console.log(e.target.value)
}