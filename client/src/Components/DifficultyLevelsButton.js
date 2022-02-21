import { PrimaryButton } from '../Styles/Button.style';

const DifficultyLevelsButton = ({ handleDifficultyButton, highlightColour, difficulty }) => {
  return (
    <PrimaryButton highlightColour={highlightColour} onClick={() => handleDifficultyButton(difficulty)}>
      {difficulty}
    </PrimaryButton>
  );
};

export default DifficultyLevelsButton;
