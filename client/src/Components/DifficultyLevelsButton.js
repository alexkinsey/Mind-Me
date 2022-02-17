import styled from 'styled-components'

const StyledThemeButton = styled.button`
  background-color: springGreen;
  color: black;
  width: 10rem;
  font-size: 16px;
  border-radius: 15px;
  padding: 1rem 1rem;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: salmon;
    color: white;
  }
`;

const DifficultyLevelsButton = ({handleDifficultyButton, difficulty}) => {
  return (
    <div>
      <StyledThemeButton onClick={() => handleDifficultyButton(difficulty)}>{difficulty}</StyledThemeButton>
    </div>
  );
};

export default DifficultyLevelsButton;
