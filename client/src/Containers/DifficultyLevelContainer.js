import styled from 'styled-components';

import BackButton from '../Components/BackButton';
import DifficultyLevelsButton from '../Components/DifficultyLevelsButton';

const Wrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
`;

const DifficultyLevelContainer = ({ handleDifficultyButton }) => {
  return (
    <Wrapper>
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Easy'} />
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Medium'} />
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Hard'} />
      <DifficultyLevelsButton handleDifficultyButton={handleDifficultyButton} difficulty={'Too hot to handle!'} />
      <BackButton>Back</BackButton>
    </Wrapper>
  );
};

export default DifficultyLevelContainer;
