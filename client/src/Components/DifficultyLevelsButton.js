import { useCallback } from 'react';
import { PrimaryButton } from '../Styles/Button.style';

const DifficultyLevelsButton = ({
  handleDifficultyButton,
  highlightColour,
  difficulty,
}) => {
  const handleClick = useCallback(() => {
    handleDifficultyButton(difficulty);
  }, [handleDifficultyButton, difficulty]);

  return (
    <PrimaryButton highlightColour={highlightColour} onClick={handleClick}>
      {difficulty}
    </PrimaryButton>
  );
};

export default DifficultyLevelsButton;
