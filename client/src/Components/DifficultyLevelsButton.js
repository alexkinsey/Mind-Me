const DifficultyLevelsButton = ({handleDifficultyButton, difficulty}) => {
  return (
    <div>
      <button onClick={() => handleDifficultyButton()}>{difficulty}</button>
    </div>
  );
};

export default DifficultyLevelsButton;
