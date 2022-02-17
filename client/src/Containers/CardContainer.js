import React from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;

  margin: auto;
`;

const CardContainer = ({cardsToDisplay}) => {
  var cardId = 0;
  const cardsNode = cardsToDisplay.map((card) => {
    cardId = cardId + 1
    return <Card key={cardId} cardImg={card.link} cardLabel={card.label}/>
  })
  
  return (
    <Grid>
      {cardsNode}
    </Grid>
  );
}


export default CardContainer;
