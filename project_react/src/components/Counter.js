import React from "react";
import styled from "styled-components";
import Item from './Items/Item';

//create a counter clas/element
//add to the counter a state = 0
//return: a title, its state, buttons to add and to delete
//create a function to updade the value of the state count
//if the counter is equal to zero, return zero or return th counter value

const text_open = "SHOPPING LIST";
const text_closing = "TOTAL ITEMS";

const CounterWrapper = styled.div `
padding: 10px 10px 10px 20px;
background-color: var(--white);
&.h1 {
  font-size: 100px;
}
`;

class Counter extends React.Component {
  state = {
    count: 0    
  };

  render() {
    return (
      <CounterWrapper>
        <h1>{text_open}</h1>
        <Item />   
        <h2>{text_closing} : {this.formatCount()}</h2>
      </CounterWrapper>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "0" : count;
  }
}

export default Counter;
