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
`;

const ThemeButtonContainer = ({ handleThemeButton }) => {
  return (
    <Wrapper>
      <AnimationFadeIn animationDelay={'100ms'}>
        <p>
          Welcome to mind me! A memory testing game. Choose your favourite topic and match the cards in few turns as
          possible.
        </p>
      </AnimationFadeIn>

      <AnimationFadeUp animationDelay={'1s'}>
        <ThemeButton theme={'Animals'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1.1s'}>
        <ThemeButton theme={'Celebs'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1.2s'}>
        <ThemeButton theme={'Locations'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1.3s'}>
        <ThemeButton theme={'Food'} handleThemeButton={handleThemeButton} />
      </AnimationFadeUp>
    </Wrapper>
  );
};

export default ThemeButtonContainer;
