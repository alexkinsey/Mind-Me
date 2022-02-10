const DifficultyLevelsButton = ({handleDifficultyButton, difficulty}) => {
  return (
    <div>
      <button onClick={() => handleDifficultyButton(difficulty)}>{difficulty}</button>
    </div>
  );
};

export default DifficultyLevelsButton;
