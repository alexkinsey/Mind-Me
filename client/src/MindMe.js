import { useState, useEffect } from 'react';
import React from 'react';

import GameContainer from './Containers/GameContainer';
import ThemeButtonContainer from './Containers/ThemeButtonContainer';
import DifficultyLevelContainer from './Containers/DifficultyLevelContainer';

const MindMe = () => {
  const [themeData, setThemeData] = useState([]);
  const [menuChoice, setMenuChoice] = useState('Theme');
  const [cardsToDisplay, setCardsToDisplay ] = useState([]);

  const handleThemeButton = (collection) => {
    fetch(`https://mind-me-9b3f9-default-rtdb.firebaseio.com/${collection.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => setThemeData(data));

    setMenuChoice('Difficulty');
  };

  const handleDifficultyButton = (difficulty) => {
    setMenuChoice('Game');
       if (difficulty == 'Too hot to handle!') {
       setCardsToDisplay(themeData);
       } else if (difficulty == 'Hard') {
       setCardsToDisplay(themeData);
       themeData.splice(2, 3);
       } else if (difficulty == 'Medium') {
       setCardsToDisplay(themeData);
       themeData.splice(2, 6);
     } else {
        setCardsToDisplay(themeData);
        themeData.splice(2, 8);
     }
     
      
    
  };
   
  
   

  return (
    <>
      <div>
        <h1>Mind Me</h1>
        {menuChoice === 'Theme' ? (
          <ThemeButtonContainer handleThemeButton={handleThemeButton} />
        ) : menuChoice === 'Difficulty' ? (
          <DifficultyLevelContainer handleDifficultyButton={handleDifficultyButton} />
        ) : menuChoice === 'Game' ? (
          <GameContainer themeData={themeData}  cardsToDisplay={cardsToDisplay} />
        ) : null}
      </div>
    </>
  );
      
};


export default MindMe;
