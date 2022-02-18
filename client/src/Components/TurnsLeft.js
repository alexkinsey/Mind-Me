const TurnsLeft = ({ turns, maxTurns }) => {
  return <p>{maxTurns - turns} turns left</p>;
};

export default TurnsLeft;
