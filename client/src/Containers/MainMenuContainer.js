import DifficultylevelContainer from './DifficultylevelContainer';
import ThemeButtonContainer from './ThemeButtonContainer';
import React, { useState } from 'react';

const MainMenuContainer = ({ handleThemeButton }) => {
  const [menuPicker, setMenuPicker] = useState(false);

  return (
    <div>
      <h1>Mind Me</h1>
      {menuPicker ? (
        <DifficultylevelContainer />
      ) : (
        <ThemeButtonContainer
          handleThemeButton={handleThemeButton}
          menuPicker={menuPicker}
          setMenuPicker={setMenuPicker}
        />
      )}
    </div>
  );
};

export default MainMenuContainer;
