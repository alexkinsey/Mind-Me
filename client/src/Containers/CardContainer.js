import React from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';

const Grid = styled.div`
   display: grid;
   max-width: 1000px;
   max-height: flex;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 15px;
   row-gap: 15px;
`
;

const CardContainer = ({ cardsToDisplay, cardBack, flippedCards, onCardClick }) => {
  var cardId = -1;
  const cardsNode = cardsToDisplay.map((card) => {
    cardId = cardId + 1;
    return (
      <Card
        key={cardId}
        id={cardId}
        isFlipped={flippedCards[cardId]}
        cardImg={card.link}
        cardBack={cardBack}
        cardLabel={card.label}
        onCardClick={onCardClick}
      />
    );
  });

  return <Grid>{cardsNode}</Grid>;
};

export default CardContainer;
