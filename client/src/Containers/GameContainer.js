import { useState, useEffect } from 'react';
import styled from 'styled-components';

import CardContainer from './CardContainer';
import EndScreen from './EndScreen';
import BackButton from '../Components/BackButton';

// STYLES
const Model = styled.div`
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);

  div {
    margin: auto;
    margin-top: 25vh;
  }
`;

const GameContainer = ({ cardsToDisplay, themeName }) => {
  const [flippedCards, setFlippedCards] = useState(new Array(cardsToDisplay.length).fill(false));
  const [chosenCard1, setChosenCard1] = useState({ id: null, label: null });
  const [chosenCard2, setChosenCard2] = useState({ id: null, label: null });
  const [gameComplete, setGameComplete] = useState(false);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    if (chosenCard1.id !== null && chosenCard2.id !== null) {
      if (chosenCard1.label === chosenCard2.label) {
        setChosenCard2({ id: null, label: null });
        setChosenCard1({ id: null, label: null });
      } else {
        setTimeout(function () {
          flippedCards[chosenCard2.id] = false;
          flippedCards[chosenCard1.id] = false;

          setFlippedCards(flippedCards);

          setChosenCard2({ id: null, label: null });
          setChosenCard1({ id: null, label: null });
        }, 600);
      }
    }
  }, [chosenCard1, chosenCard2, flippedCards]);

  useEffect(() => {
    if (flippedCards.every((v) => v === true)) {
      console.log('complete');
      setGameComplete(true);
    }
  });

  if (cardsToDisplay.length < 1) {
    return <p>Loading...</p>;
  }

  const onCardClick = (id, label) => {
    if (chosenCard1.id === null && chosenCard2.id === null && !flippedCards[chosenCard1.id]) {
      setChosenCard1({ id: id, label: label });
      flippedCards[id] = true;
      setFlippedCards(flippedCards);
    } else if (chosenCard2.id === null && chosenCard1.id !== null && !flippedCards[chosenCard2.id]) {
      setChosenCard2({ id: id, label: label });
      flippedCards[id] = true;
      setFlippedCards(flippedCards);
      setTurns(turns + 1);
    }
  };

  return (
    <div>
      <h2>{themeName}</h2>
      <p>Turns: {turns}</p>
      <CardContainer cardsToDisplay={cardsToDisplay} flippedCards={flippedCards} onCardClick={onCardClick} />
      
      {gameComplete ? (
        <Model>
          <EndScreen turns={turns} />
        </Model>
      ) : null}
    </div>
  );
};

export default GameContainer;
