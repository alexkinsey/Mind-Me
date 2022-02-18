import styled from 'styled-components';

// Components
import BackButton from '../Components/BackButton';
import DifficultyLevelsButton from '../Components/DifficultyLevelsButton';

// Styles
const Wrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
`;

const DifficultyLevelContainer = ({ handleDifficultyButton, handleBackButton }) => {
  return (
    <Wrapper>
      <p>Choose a difficulty level and don't run out of turns!</p>
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Easy'} />
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Medium'} />
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Hard'} />
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Too hot to handle!'} />
      <BackButton handleBackButton={handleBackButton} />
    </Wrapper>
  );
};

export default DifficultyLevelContainer;
