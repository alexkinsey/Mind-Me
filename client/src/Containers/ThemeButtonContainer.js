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

const ThemeButtonContainer = ({ handleThemeButton }) => {
  return (
    <Wrapper>
      <AnimationFadeIn animationDelay={'100ms'}>
        <p>Welcome to <b>Mind Me</b> - a memory testing game. Match the cards in as few turns as possible!</p>
        <p>Please select a theme</p>
      </AnimationFadeIn>

      <AnimationFadeUp animationDelay={'1s'}>
        <ThemeButton theme={'Animals'} highlightColour={'DarkOrange'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1.1s'}>
        <ThemeButton theme={'Celebs'} highlightColour={'MediumSeaGreen'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1.2s'}>
        <ThemeButton theme={'Locations'} highlightColour={'DodgerBlue'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1.3s'}>
        <ThemeButton theme={'Food'} highlightColour={'tomato'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
    </Wrapper>
  );
};

export default ThemeButtonContainer;
