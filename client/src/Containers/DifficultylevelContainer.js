import DifficultyLevelsButton from '../Components/DifficultyLevelsButton';

const DifficultyLevelContainer = ({handleDifficultyButton}) => {
  return (
    <>
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={"Easy"}/>
    </>
  );
};

export default DifficultyLevelContainer;
