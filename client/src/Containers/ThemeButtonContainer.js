import styled from 'styled-components';

// Components
import ThemeButton from '../Components/ThemeButton';

// Styles
import { AnimationFadeUp, AnimationFadeIn } from '../Styles/Animations';

const Wrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const themeButtons = [
  { theme: 'Animals', color: 'DarkOrange', delay: '1s' },
  { theme: 'Celebs', color: 'MediumSeaGreen', delay: '1.1s' },
  { theme: 'Locations', color: 'DodgerBlue', delay: '1.2s' },
  { theme: 'Food', color: 'tomato', delay: '1.3s' },
];

const ThemeButtonContainer = ({ handleThemeButton }) => {
  return (
    <Wrapper>
      <AnimationFadeIn animationDelay={'100ms'}>
        <p>
          Welcome to <b>Mind Me</b> - a memory testing game. Match the cards in
          as few turns as possible!
        </p>
        <p>Please select a theme</p>
      </AnimationFadeIn>

      {themeButtons.map(({ theme, color, delay }) => (
        <AnimationFadeUp key={theme} animationDelay={delay}>
          <ThemeButton
            theme={theme}
            highlightColour={color}
            handleThemeButton={handleThemeButton}
          />
        </AnimationFadeUp>
      ))}
    </Wrapper>
  );
};

export default ThemeButtonContainer;
