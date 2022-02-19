import { PrimaryButton } from '../Styles/Button.style';

const DifficultyLevelsButton = ({ handleDifficultyButton, difficulty }) => {
  var highlightColour;
  if (difficulty === 'Easy') {
    highlightColour = 'MediumSeaGreen';
  } else if (difficulty === 'Medium') {
    highlightColour = 'Orange';
  } else if (difficulty === 'Hard') {
    highlightColour = 'Red';
  } else {
    highlightColour = 'Indigo';
  }

  return (
    <PrimaryButton highlightColour={highlightColour} onClick={() => handleDifficultyButton(difficulty)}>
      {difficulty}
    </PrimaryButton>
  );
};

export default DifficultyLevelsButton;
