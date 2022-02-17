
//to import in Gamecontainer



const shuffleCards =  () => {
    const shuffleCards = [//insert the variable conatining the api ]
        .sort(() => Math.random () - 0.5) //we get a shuffled array: if the number is less than zero the number of the items remains the same if it is more than zero then the order of the itmes is mixed up
        .map((Cards) => ({...Cards, id: Math.random()}))

        setCards(shuffleCards) 


}


