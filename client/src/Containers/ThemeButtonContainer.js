import ThemeButton from '../Components/ThemeButton';

const ThemeButtonContainer = ({ handleThemeButton }) => {
  return (
    <>
      <ThemeButton theme={'Animals'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Celebs'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Locations'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Food'} handleThemeButton={handleThemeButton} />
    </>
  );
};

export default ThemeButtonContainer;
