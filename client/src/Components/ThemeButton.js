import styled from "styled-components";


const StyledThemeButton = styled.button`

background-color: springGreen;
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
  border: none;


  &:hover {
    background-color: salmon;
    color: white;
    box-shadow: 0 5px 15px rgba(225, 246, 136, .4);

  }
`;

const ThemeButtonContainer = styled.div `
display: flex;
justify-content: center;
`;


const ThemeButton = ({ theme, handleThemeButton }) => {
  return (
  
  <ThemeButtonContainer>
    <div>
      <StyledThemeButton 
      onClick={() => handleThemeButton(theme)}>{theme}
      </StyledThemeButton>
    </div> 
  </ThemeButtonContainer>

    
  );
};

export default ThemeButton;
