import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = () => {
  const[isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Playing_card_club_A.svg" onClick={() => setIsFlipped(!isFlipped)}/>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg" onClick={() => setIsFlipped(!isFlipped)}/>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
