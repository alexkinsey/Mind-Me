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

const difficultyLevels = [
  { difficulty: 'Easy', color: 'MediumSeaGreen', delay: '100ms' },
  { difficulty: 'Medium', color: 'Orange', delay: '200ms' },
  { difficulty: 'Hard', color: 'Red', delay: '300ms' },
  { difficulty: 'Too hot to handle!', color: 'Indigo', delay: '400ms' },
];

const DifficultyLevelContainer = ({
  handleDifficultyButton,
  handleBackButton,
}) => {
  return (
    <Wrapper>
      <AnimationFadeIn animationDelay={'0s'}>
        <p>Choose a difficulty to begin</p>
      </AnimationFadeIn>
      {difficultyLevels.map(({ difficulty, color, delay }) => (
        <AnimationFadeUp key={difficulty} animationDelay={delay}>
          <DifficultyLevelsButton
            handleDifficultyButton={handleDifficultyButton}
            highlightColour={color}
            difficulty={difficulty}
          />
        </AnimationFadeUp>
      ))}
      <AnimationFadeUp animationDelay={'1s'}>
        <BackButton handleBackButton={handleBackButton} />
      </AnimationFadeUp>
    </Wrapper>
  );
};

export default DifficultyLevelContainer;
