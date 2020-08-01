import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ItemWrapper = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  padding: 12px 16px;
  margin-left: 20px;
  align-items: center;
  background-color: var(--lg-color);
`;

const ButtonWrapper = styled.div`
  
`;

class Item extends React.Component {
  state = {
    imageUrl: "https://picsum.photos/150/100",
  };

  render() {
    return (
      <ItemWrapper>
        <img src={this.state.imageUrl} alt="Random Squared About Anything" />
        <h6>Qtde: </h6>
        <ButtonWrapper>
          <Button>+</Button>
          <Button>-</Button>
        </ButtonWrapper>
        <hr />
      </ItemWrapper>
    );
  }
}

export default Item;
