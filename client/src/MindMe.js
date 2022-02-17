import { useState } from 'react';
import arrayShuffle from 'array-shuffle';
import styled from 'styled-components';

// Components
import GameContainer from './Containers/GameContainer';
import ThemeButtonContainer from './Containers/ThemeButtonContainer';
import DifficultyLevelContainer from './Containers/DifficultyLevelContainer';

// Styles
import { GlobalStyle } from './GlobalStyle';

const Wrapper = styled.div`
  width: var(--maxWidth);
  margin: 0 auto;

  padding-top: 1em;

  h1 {
    margin-bottom: 1em;
  }
`;

const MindMe = () => {
  const [themeName, setThemeName] = useState('');
  const [themeData, setThemeData] = useState([]);
  const [menuChoice, setMenuChoice] = useState('Theme');
  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  const handleThemeButton = (collection) => {
    fetch(`https://mind-me-cc-default-rtdb.europe-west1.firebasedatabase.app/${collection.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => setThemeData(data));

    setThemeName(collection);
    setMenuChoice('Difficulty');
  };

  const handleDifficultyButton = (difficulty) => {
    let shuffledCards = arrayShuffle(themeData);

    if (difficulty === 'Hard') {
      shuffledCards = shuffledCards.slice(0, 13);
    } else if (difficulty === 'Medium') {
      shuffledCards = shuffledCards.slice(0, 9);
    } else if (difficulty === 'Easy') {
      shuffledCards = shuffledCards.slice(0, 5);
    }

    shuffledCards = arrayShuffle(shuffledCards.concat(shuffledCards));
    setCardsToDisplay(shuffledCards);

    setMenuChoice('Game');
  };
  const handleBackButton = () => {};

  return (
    <Wrapper>
      <h1>Mind Me</h1>
      {menuChoice === 'Theme' ? (
        <ThemeButtonContainer handleThemeButton={handleThemeButton} />
      ) : menuChoice === 'Difficulty' ? (
        <DifficultyLevelContainer handleDifficultyButton={handleDifficultyButton} />
      ) : menuChoice === 'Game' ? (
        <GameContainer cardsToDisplay={cardsToDisplay} themeName={themeName} />
      ) : null}
      <GlobalStyle />
    </Wrapper>
  );
};

export default MindMe;
