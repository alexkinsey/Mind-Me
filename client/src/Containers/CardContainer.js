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

  var numberOfColumns;
  if (cardsToDisplay.length > 30) {
    numberOfColumns = 9;
  } else if (cardsToDisplay.length > 16) {
    numberOfColumns = 8;
  } else {
    numberOfColumns = 4;
  }

  return <Grid columnNumber={numberOfColumns}>{cardsNode}</Grid>;
};

export default CardContainer;
