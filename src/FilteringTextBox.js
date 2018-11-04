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

  handleChange = (e) => {

    const { fruitSuggestions } = this.state
    const fruitName = e.target.value
    if (fruitName.length >= 3) {
      console.log('we logged three');

      const filteredSuggestions = fruitSuggestions.filter((fruit) => fruit.toLowerCase().includes(fruitName.toLowerCase()));
      console.log(fruitName.length)
      this.setState({
        filteredSuggestions,
        suggestionsVisibility: true,
        userInput: fruitName

      })
    }
  }

  handleKeyDown = (e) => {
    const { fruitSuggestions } = this.state
    if (!fruitSuggestions.includes(e.target.value) && e.keyCode === 13) {
      const newSuggestions = fruitSuggestions.push(e.target.value)
      this.setState({
        fruitSuggestions: newSuggestions,
        userInput: e.target.value
      })
    }
  }

  handleClick = (e) => {
    this.setState({
      userInput: e.target.innerText,
      suggestionsVisibility: false,
    })
  }

  render() {
    const { suggestionsVisibility, filteredSuggestions, userInput } = this.state
    return (
      <div>
        <h1>Filtering Text Box</h1>
        <div className="App">
          <form action="" autoComplete='off'>
            <div className='input_box'>
              <label htmlFor='fruit'></label>
              <input type='text' id='fruit' value={userInput} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder='Search...' />
            </div>
            <button type='submit'><img src={search} alt="" id='search' /></button>
          </form>
          <div>
            {suggestionsVisibility && <ul>
              {filteredSuggestions.map((suggestion, index) => (
                <li onClick={this.handleClick} key={index}>{suggestion}</li>
              ))}
            </ul>}
          </div>
        </div>
      </div >
    )
  }
}

export default FilteringTextBox;

