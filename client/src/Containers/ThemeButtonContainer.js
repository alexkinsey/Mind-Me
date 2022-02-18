import styled from 'styled-components';

// Components
import ThemeButton from '../Components/ThemeButton';

// Styles
const Wrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
`;

const ThemeButtonContainer = ({ handleThemeButton }) => {
  return (
    <Wrapper>
      <p>
        Welcome to mind me! A memory testing game. Choose your favourite topic and match the cards in few turns as
        possible
      </p>
      <ThemeButton theme={'Animals'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Celebs'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Locations'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Food'} handleThemeButton={handleThemeButton} />
    </Wrapper>
  );
};

export default ThemeButtonContainer;
