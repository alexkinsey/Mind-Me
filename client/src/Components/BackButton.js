import GameContainer from "../Containers/GameContainer";
import MainMenuButton from "./MainMenuButton";
import MindMe from "../MindMe";
import styled from 'styled-components'

const StyledBackButton = styled.button`
  background-color: springGreen;
  color: black;
  width: 10rem;
  font-size: 16px;
  border-radius: 15px;
  padding: 1rem 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  `;




const BackButton = () => {
  return (
    <div>
     <StyledBackButton>Back</StyledBackButton>
      </div>
  );
};

export default BackButton;
