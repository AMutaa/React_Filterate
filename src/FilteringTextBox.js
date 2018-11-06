import React, { Component, Fragment } from 'react';
import styled from 'styled-components'


export default class FilteringTextBox extends Component {
  // SET OUR INITIAL STATE
  state = {
    fruits: ['Apple', 'Orange', 'Banana', 'Pineapple', 'Blueberry', 'Blackberry',
      'Raspberry', 'Cranberry', 'Clementine', 'Mango', 'Papaya', 'Peach', 'Tangerine', 'Pear', 'Plum', 'Grapes',
      'Boysenberry', 'Lychee', 'Pomegranate', 'Watermelon', 'Honey Dew Melon', 'Fig', 'Cherry', 'Grapefruit'
    ],
    filteredFruits: [],
    searchInput: '',
    displayFruits: false
  }

  // FIRST CHECK FOR FRUITS IN OUR LOCAL STORAGE, IF THERE IS, SET THEM TO STATE
  componentDidMount() {
    if (localStorage.getItem('newFr')) {
      console.log('we have items')
      const storedFruits = JSON.parse(localStorage.getItem('newFr'));
      console.log(storedFruits)
      this.setState({
        fruits: storedFruits
      })
    }
  }

  // LISTEN FOR CHANGE BY TYPING IN THE INPUT FIELD
  handleChange = (e) => {
    const { fruits } = this.state
    const typedChar = e.target.value.toLowerCase()
    // FILTER EXISTING FRUITS WITH TYPED CHARACTERS
    const filteredFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(typedChar))
    if (typedChar.length >= 0) {
      this.setState({
        searchInput: e.target.value
      })
    }
    // IF TYPED CHARACTERS ARE MORE THAN OR EQUAL TO 3, SET FILTER RESULTS TO STATE
    if (typedChar.length >= 3) {
      this.setState({
        filteredFruits,
        displayFruits: true
      })
    }
  }

  //HANDLE THE FORM SUBMISSION , AND ALSO PREVENT THE FORM FROM DESTROYING
  // GOING TO CHECK IF WE HAVE AN INPUT THAT DOESNT EXIST IN OUR FRIUTS ARRAY, IF WE DO, ADD IT TO THE ARRAY AND SET TO LOCAL STORAGE
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.searchInput);
    const newFruit = this.state.searchInput
    const oldFruits = this.state.fruits;
    console.log(oldFruits);
    function fruitFinder(newFruit) {
      if (!oldFruits.includes(newFruit)) {
        let newFruits = [...oldFruits, newFruit]
        localStorage.setItem('newFr', JSON.stringify(newFruits))
      }
    }
    fruitFinder(newFruit)
  }

  // FOR AUTO COMPLETION WHEN WE CLICK ON AN ITEM IN OUR FRUIT LIST
  handleClick = (e) => {
    this.setState({
      searchInput: e.target.innerText,
      displayFruits: false
    })
  }

  render() {
    const { filteredFruits, searchInput, displayFruits } = this.state
    return (
      <Fragment>
        <h1>Filtering Text Box</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField type='search' value={searchInput} placeholder='Search Fruits...' onChange={this.handleChange} />
        </form>
        <FruitsUL>{displayFruits && filteredFruits.map((fruit, idx) => <Fruit key={idx} onClick={this.handleClick}>{fruit}</Fruit>)}</FruitsUL>
      </Fragment >
    )
  }
}

//IMPLEMENTED REACT STYLED COMPONENTS TO KEEP MY CSS IN THE COMPONENT ITSELF

const InputField = styled.input`
width: 400px;
height: 48px;
font-size:1.2em;
padding: 0 10px;
border-radius:3px;
border: 2px solid #6200EA;
outline:none;
font-weight:400;
border-bottom: none;
margin-bottom:0;
border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
background:#F5F5F5;
`;

const FruitsUL = styled.div`
width: 400px;
margin: 0 auto;
border-bottom: 2px solid #6200EA;
border-right: 2px solid #6200EA;
border-left: 2px solid #6200EA;
border-bottom-left-radius:3px;
border-bottom-right-radius:3px;
list-style:none;
background:#EDE7F6;
`;

const Fruit = styled.div`
height:40px;
text-align:left;
padding: 0 10px;
display:grid;
align-items:center;
cursor: pointer;
 &:hover {
    background:#b188ea;
    color:white;
    font-weight:bold;
  }
`;

