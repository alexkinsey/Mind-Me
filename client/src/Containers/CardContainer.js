import { useMemo } from 'react';
import styled from 'styled-components';

// Components
import Card from '../Components/Card';

// Styles
const Grid = styled.div`
  display: grid;
  max-height: flex;
  grid-template-columns: repeat(${(props) => props.columnNumber}, 1fr);
  row-gap: 15px;
  column-gap: 15px;
  justify-items: center;
`;

const CardContainer = ({
  cardsToDisplay,
  cardBack,
  flippedCards,
  onCardClick,
}) => {
  const cardsNode = useMemo(() => {
    return cardsToDisplay.map((card, index) => (
      <Card
        key={index}
        id={index}
        isFlipped={flippedCards[index]}
        cardImg={card.link}
        cardBack={cardBack}
        cardLabel={card.label}
        onCardClick={onCardClick}
      />
    ));
  }, [cardsToDisplay, flippedCards, cardBack, onCardClick]);

  const numberOfColumns =
    cardsToDisplay.length > 30 ? 9 : cardsToDisplay.length > 16 ? 8 : 4;

  return <Grid columnNumber={numberOfColumns}>{cardsNode}</Grid>;
};

export default CardContainer;
