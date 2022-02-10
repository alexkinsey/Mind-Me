import { useState, useEffect } from 'react';
import React from 'react';
import MainMenuContainer from './Containers/MainMenuContainer';
import GameContainer from './Containers/GameContainer';

const MindMe = () => {
  const [themeData, setThemeData] = useState([]);

  const handleThemeButton = (collection) => {
    fetch(`https://mind-me-9b3f9-default-rtdb.firebaseio.com/${collection.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => setThemeData(data));
  };

  return (
    <>
      <MainMenuContainer handleThemeButton={handleThemeButton} />
      <GameContainer />
    </>
  );
};

export default MindMe;
