import React, { Component } from 'react';
import search from './search.svg'


class FilteringTextBox extends Component {
  state = {
    fruitSuggestions: ['Apple', 'Orange', 'Banana', 'Pineapple', 'Blueberry', 'Blackberry',
      'Raspberry', 'Cranberry', 'Clementine', 'Mango', 'Papaya', 'Peach', 'Tangerine', 'Pear', 'Plum', 'Grapes',
      'Boysenberry', 'Lychee', 'Pomegranate', 'Watermelon', 'Honey Dew Melon', 'Fig', 'Cherry', 'Grapefruit'],
    filteredSuggestions: [],
    suggestionsVisibility: false,
    userInput: ''
  };

  onChange = (e) => {
    const { fruitSuggestions } = this.state
    const filteredSuggestions = fruitSuggestions.filter((fruit) => fruit.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      filteredSuggestions,
      suggestionVisibility: true,
      userInput: ''
    })
  }

  onClick = (e) => {
    this.setState({
      userInput: e.target.innerText,
      suggestionVisibility: false
    })
  }




  render() {
    const { suggestionVisibility, filteredSuggestions } = this.state
    return (
      <div>
        <h1>Filtering Text Box</h1>
        <form action="" autoComplete='off'>
          <div className='input_box'>
            <label htmlFor='fruit'></label>
            <input type='text' id='fruit' onKeyDown={this.onChange} placeholder='Search...' />
          </div>
          <button type='submit'><img src={search} alt="" id='search' /></button>
        </form>
        <div>
          {suggestionVisibility && <ul>
            {filteredSuggestions.map((suggestion, index) => (
              <li onClick={this.onClick} key={index}>{suggestion}</li>
            ))}
          </ul>}
        </div>

      </div >
    )
  }
}

export default FilteringTextBox;

