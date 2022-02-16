import CardContainer from './CardContainer';

const GameContainer = ({ cardsToDisplay, themeName }) => {
  if (cardsToDisplay.length < 1) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{themeName}</h1>
      <CardContainer cardsToDisplay={cardsToDisplay} />
    </div>
  );
};

export default GameContainer;
