import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";


const GameContainer = () => {

//    const [cards, setCards] = usestate();
//    const [turns, setTurns] = usestate(0);
//     const [choiceOne, setChoiceOne] = useState(null);
//     const [choiceTwo, setChoiceTwo] = useState(null);
//     const [disabled, setDisabled] = useState(false);
//     const [loaded, setLoaded] = useState(false);

//     when page first loads get the card data
//     useEffect(() => {
//        getData();
//    }, []);
   
//     retrieving data from the API and converting it to JSON 
//     using a try catch in giving an error message if the API fails to load 
//     const getData = async () => {

//        try {
//            let response = await fetch();
//            let data = await response.json();
//            await setCards(data);
//            await setLoaded(true);
//        }
//        catch (error) {
//             console.log('error');
//        }
        
//    }
    return (
   <div>
    <h1>Welcome to the Dementia test</h1>
        <CardContainer />
    </div>


    )};


export default GameContainer;