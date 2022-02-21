import { PrimaryButton } from '../Styles/Button.style';

const ThemeButton = ({ theme, highlightColour, handleThemeButton }) => {
  return (
    <PrimaryButton highlightColour={highlightColour} onClick={() => handleThemeButton(theme)}>
      {theme}
    </PrimaryButton>
  );
};

export default ThemeButton;
