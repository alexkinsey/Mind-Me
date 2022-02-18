import PrimaryButton from '../Styles/Button.style';

const DifficultyLevelsButton = ({ handleDifficultyButton, difficulty }) => {
  var highlightColour;
  if (difficulty === 'Easy') {
    highlightColour = 'springGreen';
  } else if (difficulty === 'Medium') {
    highlightColour = 'gold';
  } else if (difficulty === 'Hard') {
    highlightColour = 'orange';
  } else {
    highlightColour = 'tomato';
  }

  return (
    <PrimaryButton highlightColour={highlightColour} onClick={() => handleDifficultyButton(difficulty)}>
      {difficulty}
    </PrimaryButton>
  );
};

export default DifficultyLevelsButton;
