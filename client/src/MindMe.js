import { useState } from 'react';
import arrayShuffle from 'array-shuffle';
import styled from 'styled-components';

// Components
import GameContainer from './Containers/GameContainer';
import ThemeButtonContainer from './Containers/ThemeButtonContainer';
import DifficultyLevelContainer from './Containers/DifficultyLevelContainer';

// Styles
import { GlobalStyle } from './Styles/GlobalStyle';

const Wrapper = styled.div`
  /* width: var(--maxWidth); */
  margin: 0 auto;

`;
const Heading = styled.h1`
animation: myAnim 1s ease 0s 1 normal forwards;


@keyframes myAnim {
  0% {
    transform: scale(0.5);
    transform-origin: 50% 100%;
  }

  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
}
`

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
      shuffledCards = shuffledCards.slice(0, 12);
    } else if (difficulty === 'Medium') {
      shuffledCards = shuffledCards.slice(0, 8);
    } else if (difficulty === 'Easy') {
      shuffledCards = shuffledCards.slice(0, 4);
    }

    shuffledCards = arrayShuffle(shuffledCards.concat(shuffledCards));
    setCardsToDisplay(shuffledCards);

    setMenuChoice('Game');
  };

  const handleBackButton = () => {
    if (menuChoice === 'Difficulty' || menuChoice === 'Game') {
      setMenuChoice('Theme');
      setThemeName('');
      setThemeData([]);
      setCardsToDisplay([]);
    }
  };

  return (
    <Wrapper>
      
     <Heading>Mind Me</Heading>
      {menuChoice === 'Theme' ? (
        <ThemeButtonContainer handleThemeButton={handleThemeButton} />
      ) : menuChoice === 'Difficulty' ? (
        <DifficultyLevelContainer handleDifficultyButton={handleDifficultyButton} handleBackButton={handleBackButton} />
      ) : menuChoice === 'Game' ? (
        <GameContainer cardsToDisplay={cardsToDisplay} themeName={themeName} handleBackButton={handleBackButton} />
      ) : null}
      <GlobalStyle />
    </Wrapper>
  );
};

export default MindMe;
