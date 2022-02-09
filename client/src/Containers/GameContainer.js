import React, { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import BackButton from "../Components/BackButton";
import Hint from "../Components/Hint";
import TurnsLeft from "../Components/TurnsLeft";
import MainMenuContainer from "./MainMenuContainer";


const GameContainer = ({isFlipped, setIsFlipped}) => {

      //const [cards, setCards] = usestate();
      //const [turns, setTurns] = usestate(0);
        // const [choiceOne, setChoiceOne] = useState(null);
        // const [choiceTwo, setChoiceTwo] = useState(null);
        // const [loaded, setLoaded] = useState(false);

      // when page first loads get the card data
    //   useEffect(() => {
    //     getData();
    //   }, []);
   
    //retrieving data from the API and converting it to JSON 
    //using a try catch in giving an error message if the API fails to load 
    //    const getData = async () => {

    //       try {
    //           let response = await fetch();
    //           let data = await response.json();
    //           await setCards(data);
    //           await setLoaded(true);
    //       }
    //       catch (error) {
    //           console.log('error');
    //       }
        
    //   }

       //shuffle
    //    const shuffleCards = () => {
    //    const shuffledCards = [...data, ...data]
    //     .sort(() => Math.random() - 0.5)
    //     .map((card) => ({ ...card, id: Math.random() }));

    //     setChoiceOne(null);
    //     setChoiceTwo(null);
    //     setCards(shuffledCards);
    //     setTurns(0);
    // };

    //handling choice 
    //    const handleChoice = (card) => {
    //     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    //    }

       //comparing different cards 

    //    useEffect(() => {
    //        if(choiceOne != choiceTwo) {
    //            setIsFlipped(false);
    //        if(choiceOne === choiceTwo){
    //            setIsFlipped(true)
    //        }
    //        }
    //    })
    
    return (
        <>
        <h1>Welcome to the Dementia test</h1>
        <BackButton/>
        <TurnsLeft/>
        <Hint/>
        <Cards/>
        </>
   
   
    


    )};


export default GameContainer;