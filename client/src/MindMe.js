import { useState, useEffect } from 'react';
import React from 'react';

import GameContainer from './Containers/GameContainer';
import ThemeButtonContainer from './Containers/ThemeButtonContainer';
import DifficultyLevelContainer from './Containers/DifficultylevelContainer';

const MindMe = () => {
  const [themeData, setThemeData] = useState([]);
  const [menuChoice, setMenuChoice] = useState('Theme');
  const [difficultyLevel, setDifficultyLevel] = useState('');

  const handleThemeButton = (collection) => {
    fetch(`https://mind-me-9b3f9-default-rtdb.firebaseio.com/${collection.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => setThemeData(data));

    setMenuChoice('Difficulty');
  };

  const handleDifficultyButton = (difficulty) => {
    setMenuChoice('Game');
    setDifficultyLevel(difficulty);
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
          <GameContainer themeData={themeData} difficultyLevel={difficultyLevel} />
        ) : null}
      </div>
    </>
  );
};

export default MindMe;
