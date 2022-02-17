import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

import cardBack from '../Images/Back.jpg';

const CardBackground = styled.div`
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  overflow: hidden;

  border: var(--medGrey) 0.5px solid;
  border-radius: 10px;
  height: 200px;
  width: 130px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Card = ({ id, cardImg, cardLabel, isFlipped, onCardClick }) => {
  // const onCardClick = () => {
  //   if (chosenCard.id === null) {
  //     setChosenCard({ id: id, label: cardLabel });
  //     flippedCards[id] = !flippedCards[id];
  //     setFlippedCards(flippedCards);
  //   } else {
  //     if (chosenCard.label === cardLabel) {
  //       flippedCards[id] = !flippedCards[id];
  //     } else {
  //       flippedCards[chosenCard.id] = false;
  //     }
  //     setFlippedCards(flippedCards);
  //     setChosenCard({ id: null, label: null });
  //   }
  // };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardBackground>
          <img src={cardBack} alt={cardLabel} onClick={() => onCardClick(id, cardLabel)} />
        </CardBackground>

        <CardBackground>
          <img src={cardImg} alt={cardLabel} onClick={() => onCardClick(id, cardLabel)} />
        </CardBackground>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
