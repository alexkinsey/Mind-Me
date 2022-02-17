import { useState } from 'react';
import arrayShuffle from 'array-shuffle';
import styled from 'styled-components';

import { GlobalStyle } from './GlobalStyle';

import GameContainer from './Containers/GameContainer';
import ThemeButtonContainer from './Containers/ThemeButtonContainer';
import DifficultyLevelContainer from './Containers/DifficultyLevelContainer';

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-row: 1fr 1fr;
gap: 10px
   `;
const grid

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
      shuffledCards = shuffledCards.slice(0, 6);
    } else if (difficulty === 'Medium') {
      shuffledCards = shuffledCards.slice(0, 5);
    } else if (difficulty === 'Easy') {
      shuffledCards = shuffledCards.slice(0, 3);
    }

    shuffledCards = arrayShuffle(shuffledCards.concat(shuffledCards));
    setCardsToDisplay(shuffledCards);

    setMenuChoice('Game');
  };

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

