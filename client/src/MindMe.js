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

    } else if (difficulty === 'Hard') {
      shuffledCards = shuffledCards.slice(0, 25);
    } else if (difficulty === 'Medium') {
      shuffledCards = shuffledCards.slice(0, 17);
    } else if (difficulty === 'Easy') {
      shuffledCards = shuffledCards.slice(0, 5);
    } 
     

}


  return (
    <>
      
      <MainMenuContainer handleThemeButton = {handleThemeButton} /> 
      <GameContainer />
    </>
  )
};



export default MindMe;

