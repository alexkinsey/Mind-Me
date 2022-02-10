import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const baseAnimalURL = 'http://localhost:5000/api/mind_me/animals';

const Cards = () => {
  const[isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          <p>This is the front of the card.</p>
          <img src="https://km.visamiddleeast.com/dam/VCOM/regional/ap/taiwan/global-elements/images/tw-visa-classic-card-498x280.png" />
          <button onClick={() => setIsFlipped(!isFlipped)}>Click to flip</button>
        </div>

        <div>
          <p>This is the back of the card.</p>
          <img src="https://km.visamiddleeast.com/dam/VCOM/regional/ap/taiwan/global-elements/images/tw-visa-classic-card-498x280.png" />
          <button onClick={() => setIsFlipped(!isFlipped)}>Click to flip</button>
        </div>
      </ReactCardFlip>
    </div>
  );



  getCards() {
    return fetch (baseURL)
    .then (res => res.json());

},
};

export default Cards
