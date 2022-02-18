import PrimaryButton from "../Styles/Button.style";

const ThemeButton = ({ theme, handleThemeButton }) => {
  var highlightColour;
  if (theme === 'Animals') {
    highlightColour = 'DarkOrange';
  } else if (theme === 'Celebs') {
    highlightColour = 'MediumSeaGreen';
  } else if (theme === 'Locations') {
    highlightColour = 'tomato';
  } else {
    highlightColour = 'DodgerBlue';
  }
  return (
    <PrimaryButton highlightColour={highlightColour} onClick={() => handleThemeButton(theme)}>
      {theme}
    </PrimaryButton>
  );
};

export default ThemeButton;
