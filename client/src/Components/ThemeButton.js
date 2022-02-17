import styled from "styled-components";


const StyledThemeButton = styled.button`

background-color: springGreen;
  color: black;
  font-size: 16px;
  border-radius: 4px;
  padding: 1rem 1rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  outline: none
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;


  &:hover {
    background-color: salmon;
    color: white;
  }

  .div {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const ThemeButton = ({ theme, handleThemeButton }) => {
  return (
  
    <div>
      <StyledThemeButton 
      onClick={() => handleThemeButton(theme)}>{theme}
      </StyledThemeButton>
      </div> 
    
  );
};

export default ThemeButton;
