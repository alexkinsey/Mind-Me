import { useCallback } from 'react';
import { PrimaryButton } from '../Styles/Button.style';

const ThemeButton = ({ theme, highlightColour, handleThemeButton }) => {
  const handleClick = useCallback(() => {
    handleThemeButton(theme);
  }, [handleThemeButton, theme]);

  return (
    <PrimaryButton highlightColour={highlightColour} onClick={handleClick}>
      {theme}
    </PrimaryButton>
  );
};

export default ThemeButton;
