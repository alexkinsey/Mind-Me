import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import BackButton from '../Components/BackButton';

const GameContainer = ({ cardsToDisplay, themeName }) => {
  const [flippedCards, setFlippedCards] = useState(new Array(cardsToDisplay.length).fill(false));
  const [chosenCard1, setChosenCard1] = useState({ id: null, label: null });
  const [chosenCard2, setChosenCard2] = useState({ id: null, label: null });

  useEffect(() => {
    if (chosenCard1.id !== null && chosenCard2.id !== null) {
      setTimeout(function () {
        if (chosenCard1.label !== chosenCard2.label) {
          flippedCards[chosenCard1.id] = false;
          flippedCards[chosenCard2.id] = false;

          setChosenCard1({ id: null, label: null });
          setChosenCard2({ id: null, label: null });

          setFlippedCards(flippedCards);
        }
      }, 600);
      setChosenCard1({ id: null, label: null });
      setChosenCard2({ id: null, label: null });
    }
  }, [chosenCard1, chosenCard2, flippedCards]);

  if (cardsToDisplay.length < 1) {
    return <p>Loading...</p>;
  }

  const onCardClick = (id, label) => {
    if (chosenCard1.id === null) {
      setChosenCard1({ id: id, label: label });
    } else {
      setChosenCard2({ id: id, label: label });
    }
    flippedCards[id] = true;
    setFlippedCards(flippedCards);
  };

  return (
    <div>
      <h2>{themeName}</h2>
      <CardContainer cardsToDisplay={cardsToDisplay} flippedCards={flippedCards} onCardClick={onCardClick} />
    </div>
  );
};

export default GameContainer;
