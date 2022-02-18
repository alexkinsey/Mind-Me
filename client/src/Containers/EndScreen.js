import React from 'react';
import styled from 'styled-components';
import arrayShuffle from 'array-shuffle';

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

const NewGameButton = styled.button`
  background: var(--accent);
  color: var(--white);
  border: 2px solid var(--accentDark);
  border-radius: 15px;
  width: 10em;
  padding: 1em;
  font-size: 18px;

  :hover {
    cursor: pointer;
    background: var(--accentLight);
  }

  :click {
    cursor: pointer;
    background: var(--accentDark);
  }
`;

const EndScreen = ({ turns, onRetryClick, endingScenario, handleBackButton }) => {
  var endingMessage;
  const winMessages = [
    'Congratulations!',
    'Faultless!',
    'Flawless!',
    'Excellent!',
    'Perfect!',
    'Well done!',
    'Great job!',
  ];
  const winMessageShuffled = arrayShuffle(winMessages);

  if (endingScenario === 'win') {
    endingMessage = winMessageShuffled[0];
  } else if (endingScenario === 'lose') {
    endingMessage = "Your memory isn't the best, try again?";
  }

  return (
    <Wrapper>
      <h1>{endingMessage}</h1>
      {endingScenario === 'win' ? <h3>You completed the puzzle in {turns} turns.</h3> : null}
      <ButtonContainer>
        <NewGameButton onClick={() => handleBackButton()}>New game</NewGameButton>
        <NewGameButton onClick={() => onRetryClick()}>Retry</NewGameButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default EndScreen;
