import styled from 'styled-components';

const StyledThemeButton = styled.button`
  background-color: transparent;
  color: white;
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
  border: 2px solid white;
  width: 10em;

  &:hover {
    background-color: ${(props)=>props.highlightColour};
    color: white;
    box-shadow: 0 5px 15px rgba(225, 246, 136, .4);

  }
`;

const ThemeButtonContainer = styled.div `
display: flex;
justify-content: center;
`;


const ThemeButton = ({ theme, handleThemeButton }) => {
  var highlightColour;
  if(theme === 'Animals'){
    highlightColour = 'orange';
  } else if(theme === 'Celebs'){
    highlightColour = 'MediumSeaGreen';
  } else if(theme === 'Locations'){
    highlightColour = 'tomato';
  }else{
      highlightColour = 'DodgerBlue';
  }
  return <StyledThemeButton highlightColour = {highlightColour} onClick={() => handleThemeButton(theme)}>{theme}</StyledThemeButton>;
};

export default ThemeButton;
