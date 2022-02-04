import DifficultylevelContainer from "./DifficultylevelContainer";
import ThemeButtonContainer from "./ThemeButtonContainer";
import React, { useState } from "react";

const MainMenuContainer = () => {
  const [menuPicker, setMenuPicker] = useState(false);

  return (
    <div>
      <h1>Mind Me</h1>
      {menuPicker ? <DifficultylevelContainer /> : <ThemeButtonContainer menuPicker ={menuPicker} setMenuPicker ={setMenuPicker}/>}
    </div>
  );
};

export default MainMenuContainer;
