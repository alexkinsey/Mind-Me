import DifficultyLevelsButton from '../Components/DifficultyLevelsButton';

const DifficultyLevelContainer = ({handleDifficultyButton}) => {
  return (
    <>
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={"Easy"}/>
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={"Medium"}/>
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={"Hard"}/>
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={"Too hot to handle!"}/>
    </>
  );
};

export default DifficultyLevelContainer;
