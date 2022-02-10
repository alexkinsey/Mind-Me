import DifficultyLevelContainer from './DifficultyLevelContainer';
import ThemeButtonContainer from './ThemeButtonContainer';
import GameContainer from './GameContainer';
import React, { useState } from 'react';

const MainMenuContainer = ({ handleThemeButton, handleDifficultyButton, menuChoice }) => {
  const [menuPicker, setMenuPicker] = useState(false);

  return (
    <div>
      <h1>Mind Me</h1>
      {menuChoice === 'Theme' ? (
        <ThemeButtonContainer
          handleThemeButton={handleThemeButton}
          menuPicker={menuPicker}
          setMenuPicker={setMenuPicker}
        />
      ) : menuChoice === 'Difficulty' ? (
        <DifficultyLevelContainer handleDifficultyButton={handleDifficultyButton} />
      ) : (
        <GameContainer />
      )}
    </div>
  );
};

export default MainMenuContainer;
