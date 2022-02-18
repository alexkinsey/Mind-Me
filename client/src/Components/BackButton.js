import GameContainer from '../Containers/GameContainer';
import MainMenuButton from './MainMenuButton';
import MindMe from '../MindMe';
import styled from 'styled-components';

const StyledBackButton = styled.button`
background-color: rgba(0,0,0,0.3);
color: white;
font-size: 2.5em;
border-radius: 10px;
padding: 1rem 4rem 1.2rem 4rem;
margin: 1rem;
cursor: pointer;
border: 2px solid white;
outline: none
display: flex;
text-align: center;
margin-top: 15px;
font-weight: bold;


&:hover {
  background-color: black;
  box-shadow: 0 5px 15px rgba(225, 246, 136, .4);

}
`;

const BackButton = ({handleBackButton}) => {
  return (
    <div>
      <StyledBackButton onClick={() => handleBackButton()}>&#x2190;</StyledBackButton>
    </div>
  );
};

export default BackButton;
