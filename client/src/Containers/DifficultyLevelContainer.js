import styled from 'styled-components';

// Components
import BackButton from '../Components/BackButton';
import DifficultyLevelsButton from '../Components/DifficultyLevelsButton';

// Styles
import { AnimationFadeUp, AnimationFadeIn } from '../Styles/Animations';

const Wrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DifficultyLevelContainer = ({ handleDifficultyButton, handleBackButton }) => {
  return (
    <Wrapper>
      <AnimationFadeIn animationDelay={'0s'}>
        <p>Choose a difficulty to begin</p>
      </AnimationFadeIn>
      <AnimationFadeUp animationDelay={'100ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} highlightColour={'MediumSeaGreen'} difficulty={'Easy'} />
      </AnimationFadeUp>

      <AnimationFadeUp animationDelay={'200ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} highlightColour={'Orange'} difficulty={'Medium'} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'300ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} highlightColour={'Red'} difficulty={'Hard'} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'400ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} highlightColour={'Indigo'} difficulty={'Too hot to handle!'} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1s'}>
        <BackButton handleBackButton={handleBackButton} />
      </AnimationFadeUp>
    </Wrapper>
  );
};

export default DifficultyLevelContainer;
