import { useState } from 'react';
import CardContainer from './CardContainer';

const GameContainer = ({ cardsToDisplay, themeName }) => {
  const [flippedCards, setFlippedCards] = useState(new Array(cardsToDisplay.length).fill(false));
  const [chosenCard, setChosenCard] = useState({ id: null, label: null });
  const [chosenCard2, setChosenCard2] = useState({ id: null, label: null });

  if (cardsToDisplay.length < 1) {
    return <p>Loading...</p>;
  }

  const onCardClick = (id, label) => {
    if (chosenCard.id === null) {
      setChosenCard({ id: id, label: label });
      flippedCards[id] = true;
      setFlippedCards(flippedCards);
    } else {
      flippedCards[id] = true;
      setFlippedCards(flippedCards);

      

      if (chosenCard.label === label) {
        flippedCards[id] = true;
      } 

      setTimeout(function () {
        if (chosenCard.label !== label) {
          flippedCards[id] = false;
          flippedCards[chosenCard.id] = false;
        }
      }, 50);

      setFlippedCards(flippedCards);
      setChosenCard({ id: null, label: null });
    }
  };

  return (
    <div>
      <h2>{themeName}</h2>
      <CardContainer cardsToDisplay={cardsToDisplay} flippedCards={flippedCards} onCardClick={onCardClick} />
    </div>
  );
};

export default GameContainer;
