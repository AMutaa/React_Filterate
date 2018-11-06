
import React, {
  Component,
  Fragment
} from 'react';
import styled from 'styled-components'


class FilteringTextBox extends Component {
  state = {
    fruitSuggestions: ['Apple', 'Orange', 'Banana', 'Pineapple', 'Blueberry', 'Blackberry',
      'Raspberry', 'Cranberry', 'Clementine', 'Mango', 'Papaya', 'Peach', 'Tangerine', 'Pear', 'Plum', 'Grapes',
      'Boysenberry', 'Lychee', 'Pomegranate', 'Watermelon', 'Honey Dew Melon', 'Fig', 'Cherry', 'Grapefruit'
    ],
    filteredSuggestions: [],
    suggestionsVisibility: false,
    userInput: ''
  };

  handleChange = (e) => {

    const {
      fruitSuggestions
    } = this.state
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
    const {
      fruitSuggestions
    } = this.state
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
    // const { suggestionsVisibility, filteredSuggestions, userInput } = this.state
    return (<
      Fragment >
      <
        InputField type='search' />
      <
      /Fragment>
    )
  }
}

//     return (
//       <div>
//         <h1>Filtering Text Box</h1>
//         <div>
//           <InputField  id='fruit' value={userInput} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder='Search...' />
//           <div>
//             {suggestionsVisibility && <ul>
//               {filteredSuggestions.map((suggestion, index) => (
//                 <li onClick={this.handleClick} key={index}>{suggestion}</li>
//               ))}
//             </ul>}
//           </div>
//         </div>
//       </div >
//     )
//   }
// }

