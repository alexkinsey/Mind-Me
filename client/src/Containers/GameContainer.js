import CardContainer from './CardContainer';
import BackButton from '../Components/BackButton';


const GameContainer = ({ cardsToDisplay, themeName }) => {
  if (cardsToDisplay.length < 1) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{themeName}</h2>
      <CardContainer cardsToDisplay={cardsToDisplay} />
      <BackButton></BackButton>
    </div>
  );
};

export default GameContainer;
