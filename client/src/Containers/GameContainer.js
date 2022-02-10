import React, { useState, useEffect } from 'react';
import CardContainer from './CardContainer';

const GameContainer = ({ themeData, difficultyLevel }) => {
  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  if (themeData.length < 1) {
    return <p>Loading...</p>;
  }

  if (difficultyLevel == 'Too hot to handle!') {
    setCardsToDisplay(themeData);
  }

  return (
    <div>
      <h1>Welcome to the Dementia test</h1>
      <CardContainer cardsToDisplay={cardsToDisplay} />
    </div>
  );
};

export default GameContainer;
