import React, { Component } from 'react';
import search from './search.svg'


class FilteringTextBox extends Component {
  constructor(props) {
    super(props)
    this.state = { fruits: [] };
    this.changeList = this.changeList.bind(this);
  }

  changeList(e) {
    const fruits = ['Apple', 'Orange', 'Banana', 'Pineapple', 'Blueberry', 'Blackberry',
      'Raspberry', 'Cranberry', 'Clementine', 'Mango', 'Papaya', 'Peach', 'Tangerine', 'Pear', 'Plum', 'Grapes',
      'Boysenberry', 'Lychee', 'Pomegranate', 'Watermelon', 'Honey Dew Melon', 'Fig', 'Cherry', 'Grapefruit']

    const updatedFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      fruits: updatedFruits
    })
  }

  render() {

    return (
      <div>
        <h1>Filtering Text Box</h1>
        <form action="">
          <div className='input_box'>
            <label htmlFor='fruit'></label>
            <input type='text' id='fruit' onKeyDown={this.changeList} placeholder='Search...' />
          </div>
          <button type='submit'><img src={search} alt="" id='search' /></button>
        </form>
        <ul>
          {this.state.fruits.map((fruit, idx) => (
            <li key={idx}>{fruit}</li>
          ))}
        </ul>
      </div >
    )
  }
}

export default FilteringTextBox;

