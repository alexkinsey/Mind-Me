import styled from 'styled-components';

const StyledThemeButton = styled.button`
  background-color: springGreen;
  color: black;
  width: 10rem;
  font-size: 16px;
  border-radius: 4px;
  padding: 1rem 1rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: salmon;
    color: white;
  }
`;

const ThemeButton = ({ theme, handleThemeButton }) => {
  return (
    <div>
      <StyledThemeButton onClick={() => handleThemeButton(theme)}>{theme}</StyledThemeButton>
    </div>
  );
};

export default ThemeButton;
