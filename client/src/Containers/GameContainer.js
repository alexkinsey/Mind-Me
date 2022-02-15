import React, { useState, useEffect } from 'react';
import CardContainer from './CardContainer';

const GameContainer = ({ themeData, cardsToDisplay }) => {
  if (themeData.length < 1) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to the Dementia test</h1>
      <CardContainer cardsToDisplay={cardsToDisplay} />
    </div>
  );
};

export default GameContainer;
