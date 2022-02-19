import styled from 'styled-components';

// Components
import BackButton from '../Components/BackButton';
import DifficultyLevelsButton from '../Components/DifficultyLevelsButton';

// Styles
import AnimationFadeUp from '../Styles/Animations';

const Wrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
`;

const DifficultyLevelContainer = ({ handleDifficultyButton, handleBackButton }) => {
  return (
    <Wrapper>
      <AnimationFadeUp animationDelay={'0s'}>
        <p>Choose a difficulty level and don't run out of turns!</p>
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'100ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Easy'} />
      </AnimationFadeUp>

      <AnimationFadeUp animationDelay={'200ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Medium'} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'300ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Hard'} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'400ms'}>
        <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Too hot to handle!'} />
      </AnimationFadeUp>
      <AnimationFadeUp animationDelay={'1s'}>
        <BackButton handleBackButton={handleBackButton} />
      </AnimationFadeUp>
    </Wrapper>
  );
};

export default DifficultyLevelContainer;
