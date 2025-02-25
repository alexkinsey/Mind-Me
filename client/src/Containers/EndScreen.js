import styled from 'styled-components';
import arrayShuffle from 'array-shuffle';
import { useMemo } from 'react';

// Components
import { PrimaryButton } from '../Styles/Button.style';

// Styles
const Wrapper = styled.div`
  width: 25em;
  padding: 5em;
  border: 1px solid white;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(33px);
  -webkit-box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NewGameButton = styled(PrimaryButton)`
  width: 8em;
  padding: 1em;

  :hover {
    cursor: pointer;
    background: var(--accentLight);
    box-shadow: none;
  }

  :active {
    cursor: pointer;
    background: var(--accentDark);
  }
`;

const RetryButton = styled(PrimaryButton)`
  width: 6.5em;
  padding: 1em;

  :hover {
    cursor: pointer;
    background: var(--alertLight);
    box-shadow: none;
  }

  :active {
    cursor: pointer;
    background: var(--alert);
  }
`;

const winMessages = [
  'Congratulations!',
  'Faultless!',
  'Flawless!',
  'Excellent!',
  'Perfect!',
  'Well done!',
  'Great job!',
];

const EndScreen = ({
  turns,
  onRetryClick,
  endingScenario,
  handleBackButton,
}) => {
  const endingMessage = useMemo(() => {
    if (endingScenario === 'win') {
      return arrayShuffle(winMessages)[0];
    } else if (endingScenario === 'lose') {
      return "Your memory isn't the best, try again?";
    }
  }, [endingScenario]);

  return (
    <Wrapper>
      <h1>{endingMessage}</h1>
      {endingScenario === 'win' && (
        <h3>You completed the puzzle in {turns} turns.</h3>
      )}
      <ButtonContainer>
        <NewGameButton onClick={handleBackButton}>New game</NewGameButton>
        <RetryButton onClick={onRetryClick}>Retry</RetryButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default EndScreen;
