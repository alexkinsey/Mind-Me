import { useState, useEffect } from 'react';
import React from 'react';
import MainMenuContainer from './Containers/MainMenuContainer';
import GameContainer from './Containers/GameContainer';
import getCards from './CardsAPI';

const MindMe = () => {
  const [themeData, setThemeData] = useState([]);

  const handleThemeButton = (collection) => {
    getCards(collection);
  };

  return (
    <>
      <MainMenuContainer handleThemeButton={handleThemeButton} />
      <GameContainer />
    </>
  );
};

export default MindMe;
