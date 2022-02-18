import styled from "styled-components";

const StyledDifficultyButton = styled.button `

background-color: transparent;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  padding: 2rem 4rem;
  margin: 1rem;
  cursor: pointer;
  border:  2px solid white;
  outline: none
  display: flex;
  text-align: center;
  margin-top: 15px;
  width: 16em;


  &:hover {
    background-color: ${(props)=>props.highlightColour};
    color: black;
    box-shadow: 0 5px 15px rgba(225, 246, 136, .4);

  }
`;

const DifficultyButtonContainer = styled.div `
display: flex;
justify-content: center;
`;



const DifficultyLevelsButton = ({handleDifficultyButton, difficulty, }) => {
  var highlightColour;
  if(difficulty === 'Easy'){
    highlightColour = 'springGreen';
  } else if(difficulty === 'Medium'){
    highlightColour = 'yellow';
  } else if(difficulty === 'Hard'){
    highlightColour = 'orange';
  } else {
    highlightColour = 'red'
  }
  return (
    <DifficultyButtonContainer>
    <div>
      <StyledDifficultyButton highlightColour = {highlightColour} onClick={() => handleDifficultyButton(difficulty)}>{difficulty}</StyledDifficultyButton>
    </div>
    </DifficultyButtonContainer>
  );
};

export default DifficultyLevelsButton;
