import {useState, useEffect} from 'react';
import React from "react";
import MainMenuContainer from "./Containers/MainMenuContainer";
import GameContainer from './Containers/GameContainer';
import getCards from "./CardsAPI";


const MindMe = () => {

  const [themeData, setThemeData] = useState ([]);

const handleThemeButton = (collection) => {

    if (difficulty === 'Too hard to handle'){
      shuffledCards = shuffledCards.slice(0, 37);

  
    if (difficulty === 'Hard') {
      shuffledCards = shuffledCards.slice(0, 7);
    } else if (difficulty === 'Medium') {
      shuffledCards = shuffledCards.slice(0, 6);
    } else if (difficulty === 'Easy') {
      shuffledCards = shuffledCards.slice(0, 4);
    } 

}


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

