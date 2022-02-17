import styled from "styled-components";

const StyledDifficultyButton = styled.button `

background-color: salmon;
  color: black;
  font-size: 20px;
  border-radius: 10px;
  padding: 2rem 4rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  outline: none
  display: flex;
  text-align: center;
  margin-top: 15px;


  &:hover {
    background-color: springGreen;
    color: black;
    box-shadow: 0 5px 15px rgba(225, 246, 136, .4);

  }
`;

const DifficultyButtonContainer = styled.div `
display: flex;
justify-content: center;
`;



const DifficultyLevelsButton = ({handleDifficultyButton, difficulty}) => {
  return (
    <DifficultyButtonContainer>
    <div>
      <StyledDifficultyButton
       onClick={() => handleDifficultyButton(difficulty)}>{difficulty}
       </StyledDifficultyButton>
    </div>
    </DifficultyButtonContainer>
  );
};

export default DifficultyLevelsButton;
