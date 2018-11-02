import React, { Component } from 'react';
import search from './search.svg'


class FilteringTextBox extends Component {
  state = {
    fruitSuggetst: [],
    suggestionVisibility: false,
    value: ''
  };


  changeList = (e) => {
    const fruits = ['Apple', 'Orange', 'Banana', 'Pineapple', 'Blueberry', 'Blackberry',
      'Raspberry', 'Cranberry', 'Clementine', 'Mango', 'Papaya', 'Peach', 'Tangerine', 'Pear', 'Plum', 'Grapes',
      'Boysenberry', 'Lychee', 'Pomegranate', 'Watermelon', 'Honey Dew Melon', 'Fig', 'Cherry', 'Grapefruit']

    const updatedFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      fruits: updatedFruits,
      suggestionVisibility: true
    })
  }

  changeValue = (e) => {
    console.log(e.target.textContent)
  }


  render() {
    const { suggestionVisibility, fruits, value } = this.state
    return (
      <div>
        <h1>Filtering Text Box</h1>
        <form action="" autoComplete='off'>
          <div className='input_box'>
            <label htmlFor='fruit'></label>
            <input type='text' id='fruit' onChange onKeyDown={this.changeList} placeholder='Search...' />
          </div>
          <button type='submit'><img src={search} alt="" id='search' /></button>
        </form>
        <div>
          {suggestionVisibility && <ul>
            {fruits.map((fruit, idx) => (
              <li onClick={this.changeValue} key={idx}>{fruit}</li>
            ))}
          </ul>}
        </div>

      </div >
    )
  }
}

export default FilteringTextBox;

