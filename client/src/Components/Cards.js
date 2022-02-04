import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

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
};

export default Cards;
