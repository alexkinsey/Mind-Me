import DifficultyLevelContainer from './DifficultyLevelContainer';
import ThemeButtonContainer from './ThemeButtonContainer';
import GameContainer from './GameContainer';
import React, { useState } from 'react';

const MainMenuContainer = ({ handleThemeButton, handleDifficultyButton, menuChoice, themeData, difficultyLevel }) => {
  

  return (
    <div>
      <h1>Mind Me</h1>
      {menuChoice === 'Theme' ? (
        <ThemeButtonContainer
          handleThemeButton={handleThemeButton}
          menuChoice={menuChoice}
          
        />
      ) : menuChoice === 'Difficulty' ? (
        <DifficultyLevelContainer handleDifficultyButton={handleDifficultyButton} />
      ) : (
        <GameContainer  themeData={themeData} difficultyLevel={difficultyLevel} />
      )}
    </div>
  );
};

export default MainMenuContainer;
