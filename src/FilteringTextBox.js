import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
// import friuts from './friuts'

export default class FilteringTextBox extends Component {
  state = {
    fruits: ['Apple', 'Orange', 'Banana', 'Pineapple', 'Blueberry', 'Blackberry',
      'Raspberry', 'Cranberry', 'Clementine', 'Mango', 'Papaya', 'Peach', 'Tangerine', 'Pear', 'Plum', 'Grapes',
      'Boysenberry', 'Lychee', 'Pomegranate', 'Watermelon', 'Honey Dew Melon', 'Fig', 'Cherry', 'Grapefruit'
    ],
    filteredFruits: [],
    search: '',
    displayFruits: false
  }


  componentDidMount() {
    if (localStorage.getItem('name')) {
      console.log('we have items')
      const storedData = JSON.parse(localStorage.getItem('name'));
      console.log(storedData)
      this.setState({
        fruits: storedData
      })
    }
  }




  // Listener for change that has been typed in the input
  handleChange = (e) => {
    const { fruits } = this.state
    const userInput = e.target.value.toLowerCase()
    const filteredFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(userInput))
    if (userInput.length >= 0) {
      this.setState({
        search: e.currentTarget.value
      })
    }
    if (userInput.length >= 3) {
      this.setState({
        filteredFruits,
        displayFruits: true
      })
    }
  }

  // THIS WILL HANDLE THE FORM SUBMITTION , AND ALSO PREVENT THE FORM FROM DESTROYING
  // GOING TO CHECK IF WE HAVE AN INPUT, IN OUR FRIUTS ARRAY, IF WE ADD IT AND SET TO LOCAL STORAGE
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.search);
    const newFruit = this.state.search
    const stateFruit = this.state.fruits;
    console.log(stateFruit);
    function fruitFinder(newFruit) {
      if (!stateFruit.includes(newFruit)) {
        let newFruits = [...stateFruit, newFruit]
        localStorage.setItem('name', JSON.stringify(newFruits))
      }
    }
    fruitFinder(newFruit)


  }

  // FOR AUTO COMPLETE
  handleClick = (e) => {
    console.log('clicked' + e.target.innerText)
    this.setState({
      search: e.target.innerText,
      displayFruits: false
    })
  }



  render() {
    const { filteredFruits, search, displayFruits } = this.state
    return (
      <Fragment>
        <h1>Filtering Text Box</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField type='search' value={search} placeholder='Search Fruits...' onChange={this.handleChange} />
        </form>
        <FruitsUL>{displayFruits && filteredFruits.map((fruit, idx) => <Fruit key={idx} onClick={this.handleClick}>{fruit}</Fruit>)}</FruitsUL>
      </Fragment >
    )
  }
}

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
    background:#757575;
    color:white;
    font-weight:bold;
  }
`;

