import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 20em;
  padding: 5em;

  border: 1px solid white;
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(33px);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const NewGameButton = styled.button`
  background: var(--accent);
  color: var(--white);
  border: none;
  border-radius: 15px;
  width: 7em;
  padding: 10px 0;
  font-size: var(--fontMed);

  :hover {
    cursor: pointer;
    background: var(--accentLight);
  }

  :click {
    cursor: pointer;
    background: var(--accentDark);
  }
`;

const EndScreen = ({ turns, onRetryClick }) => {
  return (
    <Wrapper>
      <h1>Congratulations!</h1>
      <h3>You completed the puzzle in {turns} turns.</h3>
      <ButtonContainer>
        <NewGameButton onClick={() => window.location.reload(false)}>New game</NewGameButton>
        <NewGameButton onClick={() => onRetryClick()}>Retry</NewGameButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default EndScreen;
